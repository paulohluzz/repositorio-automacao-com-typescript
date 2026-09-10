// Importando a função utilitaria de aguardar o tempo(delay)
import { aguardar } from "../../utils/helpers";

// Simulando uma API de Login
function simularLogin(usuario:string, senha:string):Promise<string> {
    return new Promise((resolve, reject) => {
        if(usuario === 'admin' && senha === '123456') {
            resolve('token-secreto-aprovado-123');
        } else {
            reject('ERRO 401 - USUÁRIO OU SENHA INVÁLIDO');
        }
    });
}

//Função principal testando com async/await
async function executarCT() {
    console.log('Iniciando cenário de teste');
    try {
        console.log('Passo 1: Abrindo tela de login...');
        await aguardar(2000);
        console.log('Passo 2: Inserindo credenciais...');
        await aguardar(3000);

        const token = await simularLogin('admina', '123456');
        console.log(`Sucesso! Usuário logado. Token recebido: ${token}`);
    } catch (erro) {
        console.error(`Falha no teste: ${erro}`);
    } finally {
        console.log('Passo final: Fechando o navegador e limpando dados.');
    }
}

executarCT()