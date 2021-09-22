// usar = {} significa que estamos trabalhando com um objeto
//um objeto é composto por propriedades
var paola = { nome:"Paola", vitorias:1, empates:2, derrotas:3, pontos:0 }
var paul = { nome:"Paul", vitorias:2, empates:2, derrotas:1, pontos:0 }

paola.pontos = calculaPontos(paola)
paul.pontos = calculaPontos(paul)

function calculaPontos(jogador) {
    var pontos = (jogador.vitorias * 3) + jogador.empates
    return pontos
}

var jogadores = [paola, paul]

function exibeJogadoresNaTela(jogadores) {
    var elemento = ""

    for (var i=0;i<jogadores.length;i++) {
        elemento += "<tr><td>"+ jogadores[i].nome +"</td>"
        elemento += "<td>"+ jogadores[i].vitorias +"</td>"
        elemento += "<td>"+ jogadores[i].empates +"</td>"
        elemento += "<td>"+ jogadores[i].derrotas +"</td>"
        elemento += "<td>"+ jogadores[i].pontos +"</td>"
        elemento += "<td><button onClick='adicionarVitoria("+ i +")'>Vitória</button></td>"
        elemento += "<td><button onClick='adicionarEmpate("+ i +")'>Empate</button></td>"
        elemento += "<td><button onClick='adicionarDerrota("+ i +")'>Derrota</button></td>"
        elemento += "<td><button onClick='resetar("+ i +")'>Resetar</button></td>"
    }

    var tabelaJogadores = document.getElementById("tabelaJogadores")
    tabelaJogadores.innerHTML = elemento
}

exibeJogadoresNaTela(jogadores)

// funçoes dos botoes
function adicionarVitoria(i) {
    var jogador = jogadores[i]
    jogador.vitorias++
    jogador.pontos = calculaPontos(jogador)
    exibeJogadoresNaTela(jogadores)
}

function adicionarEmpate(i) {

    for (var i=0; i<jogadores.length;i++){
        jogadores[i].empates++
        jogadores[i].pontos+= 3
    }
    exibeJogadoresNaTela(jogadores)
}

function adicionarDerrota(i) {
    var jogador = jogadores[i]
    jogador.derrotas++
    exibeJogadoresNaTela(jogadores)
}

function resetar(i) {
    for(var i=0; i<jogadores.length;i++){
        jogadores[i].vitorias = 0
        jogadores[i].empates = 0
        jogadores[i].derrotas = 0
        jogadores[i].pontos = 0
    }
    exibeJogadoresNaTela(jogadores)
}