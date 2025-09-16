#!/usr/bin/env node

import { syncToGitHub } from './scripts/github-sync.js';

async function main() {
  console.log('🚀 Transferência Automática para GitHub\n');
  
  try {
    // Use default values or command line arguments
    const repoName = process.argv[2] || 'meu-projeto-medico-replit';
    const description = process.argv[3] || 'Sistema médico com agenda e prontuários transferido do Replit';
    
    console.log(`📦 Repositório: ${repoName}`);
    console.log(`📖 Descrição: ${description}\n`);
    
    console.log('🔄 Iniciando transferência...\n');
    
    const result = await syncToGitHub(repoName, description);
    
    console.log('\n🎉 TRANSFERÊNCIA CONCLUÍDA COM SUCESSO!');
    console.log(`📦 Repositório: ${result.repository.name}`);
    console.log(`📁 Arquivos transferidos: ${result.filesUploaded}`);
    console.log(`🔗 URL: ${result.repository.html_url}`);
    console.log(`\n✅ Você pode agora acessar seu projeto no GitHub!`);
    
    return result;
    
  } catch (error) {
    console.error('\n❌ ERRO:', error.message);
    console.log('\n💡 Dicas para resolver:');
    console.log('- Verifique se a conexão com GitHub está ativa');
    console.log('- Certifique-se de que o nome do repositório é válido');
    console.log('- Tente novamente em alguns momentos');
    process.exit(1);
  }
}

main();