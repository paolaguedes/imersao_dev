var listaAnimes = ["https://img.elo7.com.br/product/original/26BC338/big-poster-anime-the-promised-neverland-lo12-90x60-cm-anime.jpg", "https://cdn.culturagenial.com/imagens/death-note-cartaz.jpg", "https://sakugabrasil.com/wp-content/uploads/2021/07/sao-visual.jpeg"]

for(var i=0; i < listaAnimes.length; i++ ){
document.write("<img src="+listaAnimes[i]+">")
}

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
// o parametro pode ser qualquer nome e atua como a variavel animeFavorito
function listarAnimes(anime) {
    var elementoAnimeFavorito = "<img src=" + anime + ">"
    var listAnime = document.getElementById("listaAnime")
    //soma os filmes adicionados
    listAnime.innerHTML =   listAnime.innerHTML + elementoAnimeFavorito
}