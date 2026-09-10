// Importando dependencias
import {test, expect, vi} from 'vitest';

// Simulando login lento 
function loginLento(usuario:string):Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Bem Vindo, ${usuario}!`);
        }, 5000);
    });
}

test('Simular login usando fake timers ', async() => {
    //Ligando vitest
    vi.useFakeTimers();
    console.log('Iniciando Cenário de Teste');

    //Chamando usuário sem Await ainda
    const promessaLogin = loginLento("Dona Redonda")

    //Configurar avanço de 5 segundos
    vi.advanceTimersByTime(5000);
    const resultado = await promessaLogin;

    //Verificar resultado
    expect(resultado).toBe("Bem Vindo, Dona Redonda!");
    console.log("Sucesso! Teste realizado na velocidade da luz.");

    //Desligando vitest
    vi.useRealTimers();
});