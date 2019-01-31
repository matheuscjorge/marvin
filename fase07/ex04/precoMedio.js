function precoMedio () {
    var recorde = arguments[0];
    var soma = 0;
    var i = 0;
    while (i in arguments) {
        if (arguments[i].preco > recorde.preco) {
            recorde = arguments[i];
        }
        soma += arguments[i].preco;
        i++;
    }
    console.log("O produto mais caro se chama \"" + recorde.nome + "\"");
    return soma / arguments.length;
}