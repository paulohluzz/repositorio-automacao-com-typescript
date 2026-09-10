// formas de tipas
//forma 1
let idade:number;

//forma 2
const nome = 'Seu Zezo';

//forma 3
const sobrenome:string = 'da Silva';

//typagens especiais
type usuario = {'nick':string, 'age':number};

let jogador:usuario = {'nick': 'Ricardo', age: '18'};

let jogadorVelho:usuario = {'nick': 'Toin', 'age': 76};

function verificarIdade(usuarioAtual:usuario) {
    if (usuarioAtual.age >= 21) {
        console.log(`✅ Acesso Liberado o jogador ${usuarioAtual.nick} tem ${usuarioAtual.age} anos e pode jogar nosso joguinho muito massa de pei pei🔫`);
    } else {
        console.log(`Ei ${usuarioAtual.nick} é de menor, pode tá pei pei não ${usuarioAtual.age}, anos um bebê 👶`);
    }
}

verificarIdade(jogador);
verificarIdade(jogadorVelho);

