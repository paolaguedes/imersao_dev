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

//pegando o valor do que foi digitado nos inputs com determinados ids
//e alterando do tipo string (que é o padrao do js) para tipo float

var nome = document.getElementById("nome").value
var notaUm = parseFloat(document.getElementById("nota1").value)
var notaDois = parseFloat(document.getElementById("nota2").value)



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
# Aluraflix

Nesse projeto fomos mais a fundo na estruturação do código javascript, por quebrar nosso código em duas funções diferentes. Nosso objetivo era adicionar posters de anime/filme/série, aplicando a lógica de iterações, pela url.

<br>


Nessa parte do nosso código criamos uma tag img atribuindo ela a uma variável, e 
puxamos do html nossa div/section pelo seu id
Após, somamos cada entrada com a que já havia sido incluída anteriormente

```js

...

function listarAnimes(anime) {
    var elementoAnimeFavorito = "<img src=" + anime + ">"
    var listAnime = document.getElementById("listaAnime")
    //soma os filmes adicionados
    listAnime.innerHTML =   listAnime.innerHTML + elementoAnimeFavorito
}


```

E, na nossa função principal, que é chamada pelo onclick no button do html chamamos a função listarAnimes... e ficou assim:

```js

function adicionarAnime() {
    //pegar o valor digitado no input
    var animeFavorito = document.getElementById("anime").value
    //validando a entrada da url
    if(animeFavorito.endsWith(".jpg")){
       listarAnimes(animeFavorito) //chama a funçao listarAnimes e passa como parametro a variavel animeFavorito
    } else {
        console.error("endereço de filme inválido")
    }
    //limpa o input toda vez que uma url é adicionada
    document.getElementById("anime").value = " "
}
...

```

Para validar a entrada de urls usamos a estrutura de condição if com o método .endsWith, que é literalmente "termina com", e se nossa url terminasse com .jpg que é o padrão de imagem, ela seria incluída no escopo do nosso html, senão apresentaria um erro pelo console.error.
