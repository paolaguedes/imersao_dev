//biblioteca que gera numeros aleatórios
var numeroSecreto = parseInt(Math.random() * 11)

function Adivinha() {
    var chute = parseInt(document.getElementById("numero").value) 
    var inputResultado = document.getElementById("numeroChutado")
    var resultado

            if (chute == numeroSecreto){
                resultado =  "Você acertou o número secreto!!"
            }
            else if (chute < 0 || chute > 10){
                resultado = "Digite um número no intervalo de 0 a 10!"
            }            
            else if (chute < numeroSecreto) {
                resultado =  "Você chutou baixo!!"
            }
            else if (chute > numeroSecreto) {
                resultado =  "Você chutou alto!!"            
            }

        inputResultado.innerHTML = resultado
}