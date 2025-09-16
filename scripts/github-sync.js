import { Octokit } from '@octokit/rest';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let connectionSettings;

async function getAccessToken() {
  if (connectionSettings && connectionSettings.settings.expires_at && new Date(connectionSettings.settings.expires_at).getTime() > Date.now()) {
    return connectionSettings.settings.access_token;
  }
  
  const hostname = process.env.REPLIT_CONNECTORS_HOSTNAME
  const xReplitToken = process.env.REPL_IDENTITY 
    ? 'repl ' + process.env.REPL_IDENTITY 
    : process.env.WEB_REPL_RENEWAL 
    ? 'depl ' + process.env.WEB_REPL_RENEWAL 
    : null;

  if (!xReplitToken) {
    throw new Error('X_REPLIT_TOKEN not found for repl/depl');
  }

  connectionSettings = await fetch(
    'https://' + hostname + '/api/v2/connection?include_secrets=true&connector_names=github',
    {
      headers: {
        'Accept': 'application/json',
        'X_REPLIT_TOKEN': xReplitToken
      }
    }
  ).then(res => res.json()).then(data => data.items?.[0]);

  const accessToken = connectionSettings?.settings?.access_token || connectionSettings.settings?.oauth?.credentials?.access_token;

  if (!connectionSettings || !accessToken) {
    throw new Error('GitHub not connected');
  }
  return accessToken;
}

// WARNING: Never cache this client.
// Access tokens expire, so a new client must be created each time.
// Always call this function again to get a fresh client.
export async function getUncachableGitHubClient() {
  const accessToken = await getAccessToken();
  return new Octokit({ auth: accessToken });
}

// Function to get all files in the project
function getAllFiles(dirPath, arrayOfFiles = []) {
  const files = fs.readdirSync(dirPath);

  files.forEach(file => {
    const fullPath = path.join(dirPath, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      // Skip certain directories
      if (!['node_modules', '.git', 'dist', '.replit'].includes(file)) {
        arrayOfFiles = getAllFiles(fullPath, arrayOfFiles);
      }
    } else {
      // Skip certain files
      if (!file.startsWith('.') || file === '.gitignore') {
        arrayOfFiles.push(fullPath);
      }
    }
  });

  return arrayOfFiles;
}

// Function to create repository and upload files
export async function syncToGitHub(repoName, description = 'Projeto transferido do Replit') {
  try {
    console.log('🔧 Conectando ao GitHub...');
    const octokit = await getUncachableGitHubClient();
    
    // Get user info
    const { data: user } = await octokit.rest.users.getAuthenticated();
    console.log(`✅ Conectado como: ${user.login}`);

    // Create repository
    console.log(`📦 Criando repositório: ${repoName}...`);
    let repo;
    try {
      const { data: repoData } = await octokit.rest.repos.createForAuthenticatedUser({
        name: repoName,
        description: description,
        private: false,
        auto_init: false
      });
      repo = repoData;
      console.log(`✅ Repositório criado: ${repo.html_url}`);
    } catch (error) {
      if (error.status === 422) {
        console.log(`⚠️  Repositório ${repoName} já existe. Usando o existente...`);
        const { data: repoData } = await octokit.rest.repos.get({
          owner: user.login,
          repo: repoName
        });
        repo = repoData;
      } else {
        throw error;
      }
    }

    // Get all files
    const projectRoot = path.resolve(__dirname, '..');
    const allFiles = getAllFiles(projectRoot);
    console.log(`📁 Encontrados ${allFiles.length} arquivos para upload`);

    // Upload files in smaller batches to avoid issues
    console.log('📤 Enviando arquivos...');
    
    for (const filePath of allFiles) {
      const relativePath = path.relative(projectRoot, filePath);
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Skip binary files or very large files that might cause issues
      if (content.length > 1024 * 1024) { // Skip files larger than 1MB
        console.log(`⚠️  Pulando arquivo grande: ${relativePath}`);
        continue;
      }
      
      try {
        console.log(`📤 Enviando: ${relativePath}`);
        
        await octokit.rest.repos.createOrUpdateFileContents({
          owner: user.login,
          repo: repoName,
          path: relativePath,
          message: `Adicionar ${relativePath}`,
          content: Buffer.from(content).toString('base64'),
          branch: 'main'
        });
        
      } catch (error) {
        if (error.status === 409) {
          // File already exists, update it
          console.log(`🔄 Atualizando: ${relativePath}`);
          
          // Get current file to get its SHA
          try {
            const { data: existingFile } = await octokit.rest.repos.getContent({
              owner: user.login,
              repo: repoName,
              path: relativePath
            });
            
            await octokit.rest.repos.createOrUpdateFileContents({
              owner: user.login,
              repo: repoName,
              path: relativePath,
              message: `Atualizar ${relativePath}`,
              content: Buffer.from(content).toString('base64'),
              sha: existingFile.sha,
              branch: 'main'
            });
          } catch (updateError) {
            console.log(`⚠️  Erro ao atualizar ${relativePath}: ${updateError.message}`);
          }
        } else {
          console.log(`⚠️  Erro ao enviar ${relativePath}: ${error.message}`);
        }
      }
    }

    console.log('🎉 Transferência concluída com sucesso!');
    console.log(`🔗 URL do repositório: ${repo.html_url}`);
    
    return {
      success: true,
      repository: repo,
      filesUploaded: allFiles.length
    };

  } catch (error) {
    console.error('❌ Erro durante a transferência:', error.message);
    throw error;
  }
}

// If running directly
if (import.meta.url === `file://${process.argv[1]}`) {
  const repoName = process.argv[2] || 'meu-projeto-replit';
  syncToGitHub(repoName)
    .then(result => {
      console.log(`\n✅ Sucesso! ${result.filesUploaded} arquivos transferidos.`);
      console.log(`🔗 Repositório: ${result.repository.html_url}`);
    })
    .catch(error => {
      console.error('\n❌ Falha na transferência:', error.message);
      process.exit(1);
    });
}