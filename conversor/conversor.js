
const valida = document.querySelector('.formButton');
valida.addEventListener('click', Converter)

function Converter(evento) {
    evento.preventDefault()
    var valorElemento = document.getElementById("valor")
    var valor = valorElemento.value
    var valorDolar = parseFloat(valor)

    var valorReal = valorDolar * 5

    var elementoValorConvertido = document.getElementById("valorConvertido")
    var valorConvertido = "O resultado em real é R$ " + valorReal
    elementoValorConvertido.innerHTML = valorConvertido
}

// Adicionar outras moedas para converter.
// Conversor de quilômetros para anos luz e verificar o tempo que demora para ir de uma estrela para outra.
// Conversor de temperaturas entre farenheit, kelvin e celcius.
// Adicionar uma linha ao projeto desenvolvido para que apareça o valor em bitcoin.
