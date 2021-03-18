/* Por que usar jQuery?
Devido ser uma biblioteca JavaScript que abstrai a sua complexidade e problemas de compatibilidade.
*/

//. chama class e # ids
var frase = $(".frase").text(); //$ == jQuery
//.text() <-acessa o conteúdo do html
var numPalavras = frase.split(" ").length; //split = quebra a frase em várias partes, no caso definimos a regra como ESPAÇO para quebrar.
//.length só retorna a quantidade do tamanho, ao invés de mostrar todo array. 
var tamanhoFrase = $("#tamanho-frase"); //# <- seletor de ID
tamanhoFrase.text(numPalavras); //chamo numPalavras e converto para texto para contar a quantidade de palavras