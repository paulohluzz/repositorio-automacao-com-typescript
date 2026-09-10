type produto = {'nome':string, 'preco':number};

let produtoUm:produto = {'nome': 'Pc', 'preco': 2000};
let produtoDois:produto = {'nome': 'Monitor', 'preco': 500};

function maiorQueSeissentos(produto:produto) {
    console.log(produto.preco >= 600 ? `O ${produto.nome} é maior que R$600, sendo no valor de R$${produto.preco}.` : `O ${produto.nome} é menor que R$600, sendo no valor de R$${produto.preco}.`);
}

maiorQueSeissentos(produtoUm);
maiorQueSeissentos(produtoDois);