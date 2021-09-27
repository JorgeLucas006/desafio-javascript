/*
O desafio vai ser fazer aplicar os métodos de strings nas regras do jogo. E exibir no console a regra e a alteração realizada.

*/

var texto = "tesoura corta papel\npapel cobre veneno\npedra esmaga lagarto\nlagarto corta Spock\nSpock vaporiza tesoura\ntesoura decapita Spock\nlagarto come papel\nveneno refuta lagarto\nSpock vaporiza pedra\nveneno esmaga tesoura.";

var newTexto = texto.replace(/esmaga/gi, "quebra");
newTexto = newTexto.replace(/lagarto/gi, "tesoura");
newTexto = newTexto.replace(/Spock/gi, "papel");
newTexto = newTexto.replace(/vaporiza/gi, "embrulha");
newTexto = newTexto.replace(/cobre/gi, "embrulha");
newTexto = newTexto.replace(/decapita/gi, "corta");
newTexto = newTexto.replace(/come/gi, "corta");
newTexto = newTexto.replace(/veneno/gi, "pedra");
newTexto = newTexto.replace(/refuta/gi, "quebra");


console.log(texto)
console.log("-------------------------------------")
console.log(newTexto)
