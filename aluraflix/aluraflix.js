// aula 4 para introdução aos arrays
    
    var titulo = "Lista de livros"
    var lista = "Os meus preferidos são: "
    var livros = ["O mensageiro", "Meu pé de laranja lima","O extraordinário"]

    //push adiciona outros elementos
    livros.push("Harry Potter")
    livros.push("Percy Jackson")

    // escrevendo tags na tela
    document.write("<h1>"+titulo+"</h1>")
    document.write("<p>"+lista+"</p>")

    // length define o tamanho do array para definir a quantidade de iterações
    for(var i=0; i <livros.length; i++) {
    document.write("<li>"+livros[i]+"</li>")
    }
    var x = document.createElement("style")
    var t = document.createTextNode("body {background-color: rgba(0,0,0,0.9); color: white; font-family: sans-serif;} h1 {color:pink; text-shadow: 2px 2px 2px purple;}")
    x.appendChild(t)
    document.head.appendChild(x)