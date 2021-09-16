function Calcular() {
//pegando o valor do que foi digitado nos inputs com determinados ids
//e altera de string para float
var nome = document.getElementById("nome").value
var notaPrimeiro = parseFloat(document.getElementById("nota1").value)
var notaSegundo = parseFloat(document.getElementById("nota2").value)

var notaFinal = (notaPrimeiro + notaSegundo) / 2

//define a quantidade de casas decimais após a virgula
notaFinal = parseFloat(notaFinal.toFixed(2))

var resultadoFinal = document.getElementById("resultado")
var resultado

if (notaFinal >= 5) {
    resultado = "Parabens, sua nota final foi "+notaFinal+ ", "+nome+". Você está aprovado."
}
else {
    resultado = nome +" sua nota foi: "+notaFinal+", mas não se preocupe. Uma nota não te define."
}
// leva o valor da variavel resultado para o HTML
resultadoFinal.innerHTML = resultado
}