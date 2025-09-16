#!/usr/bin/env node

import readline from 'readline';
import { syncToGitHub } from './scripts/github-sync.js';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function question(query) {
  return new Promise(resolve => rl.question(query, resolve));
}

async function main() {
  console.log('🚀 Transferência de Projeto para GitHub\n');
  
  try {
    const repoName = await question('📝 Nome do repositório (deixe vazio para "meu-projeto-replit"): ');
    const description = await question('📖 Descrição do repositório (opcional): ');
    
    const finalRepoName = repoName.trim() || 'meu-projeto-replit';
    const finalDescription = description.trim() || 'Projeto transferido do Replit';
    
    console.log('\n🔄 Iniciando transferência...\n');
    
    const result = await syncToGitHub(finalRepoName, finalDescription);
    
    console.log('\n🎉 TRANSFERÊNCIA CONCLUÍDA COM SUCESSO!');
    console.log(`📦 Repositório: ${result.repository.name}`);
    console.log(`📁 Arquivos transferidos: ${result.filesUploaded}`);
    console.log(`🔗 URL: ${result.repository.html_url}`);
    console.log(`\n✅ Você pode agora acessar seu projeto no GitHub!`);
    
  } catch (error) {
    console.error('\n❌ ERRO:', error.message);
    console.log('\n💡 Dicas para resolver:');
    console.log('- Verifique se a conexão com GitHub está ativa');
    console.log('- Certifique-se de que o nome do repositório é válido');
    console.log('- Tente novamente em alguns momentos');
  } finally {
    rl.close();
  }
}

main();