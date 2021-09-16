# 📋 Conceitos utilizados de JavaScript

# Calculadora

Nesse primeiro projeto nosso objetivo era calcular a média de notas de uma pessoa a partir dos inputs no nosso HTML e mostrar na tela a conta já feita.

<br>

Para isso em cada um de nossos inputs adicionamos um id, para ser chamado no nosso arquivo javascript. Logo após um button com um evento onclick, que executa algo quando o botão é clicado. Em nosso caso chamamos a função Calcular(). E também uma div que trará o resultado do javascript para nosso site.

```html
...

<input type="text" id="nome">

<input type="number" id="nota1">

<input type="number" id="nota2">

<button type="submit" onclick="Calcular()">calcular</button>

<div id="resultado" ></div>

...

```

Com o html feito, partimos para o arquivo .js. Nele criamos nossa function Calcular(). Segue abaixo o código e a explicação de cada linha :)


```js
...

function Calcular() {

// aqui estamos buscando no código HTML o componente que possui o id especificado -->


var nome = document.getElementById("nome")
var notaUm = document.getElementById("nota1")
var notaDois = document.getElementById("nota2")

// só que ao fazer isso estamos puxando/pegando do nosso HTML TODO o componente visual, ou seja,
//se você der um console.log(nome),por exemplo, no console você verá o campo todo do input e não 
//é isso que nós queremos,queremos o valor que foi digitado pelo usuário, então 

...
var nota2 = notaDois.value

//ao fazer isso, criamos uma nova variável com o nome do nosso id (mas pode ser qualquer nome, claro)
//entao vamos acessar o conteúdo (.) do input e pegar apenas seu valor

nota2 = parseFloat(nota2)

// altera do tipo string (que é o padrao do js) para tipo float

// Agora para apresentar na tela, nossa variavel resultadoFinal vai pegar o componente do html que tem o id resultado,
// e vamos criar uma variavel resultado para conter o nosso texto com as informações de nota

var resultadoFinal = document.getElementById("resultado")
var resultado = nome+ " sua nota foi " + notaFinal 

if (notaFinal >= 5){
// caso a nota final seja maior ou igual a 5, nosso componente vai ser igual a variavel resultado, que contem nosso textinho.
// *.innerHTML é uma propriedade que permite retornar o código html interno de um elemento*

// em outras palavras, estamos dizendo que nossa div (que agora é o resultadoFinal), vai se juntar ao html (pela propriedade .innerHTML)
// e isso será igual a nossa string

      resultadoFinal.innerHTML = resultado
}
else {...}
//o else so mostra o contrário, se a nota for menor q 5
}

...

```
