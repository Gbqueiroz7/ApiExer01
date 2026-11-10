fetch("https://jsonplaceholder.typicode.com/posts")


.then(resposta => resposta.json())


.then(dados => {
    console.log(dados)
})

.catch(erro =>{
    console.log("Erro ao consultar", erro);
})