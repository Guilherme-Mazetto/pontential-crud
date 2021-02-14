const exibeDeveloper = (nome, sexo, idade, hobby, datanascimento, id) => {
    const linha = document.createElement('tr');

    const conteudoLinha = `

        <td>${nome}</td>
        <td>${sexo}</td>
        <td>${idade}</td>
        <td>${hobby}</td>
        <td>${datanascimento.substring(0,10)}</td>
        <a href="excluir-developer.html?id=${id}">
        <button type="button" class="btn btn-danger">Excluir</button>
        </a>
        <a href="edita-developers.html?id=${id}">
        <button type="button" class="btn btn-info">Editar</button>
        </a>
    `  
    linha.innerHTML = conteudoLinha
    return linha  
};

const corpoTabela = document.querySelector("[data-conteudo-tabela]")

listarDevelopers().then(developers => {
    developers.forEach( indice => {
    corpoTabela.appendChild(exibeDeveloper(indice.nome, indice.sexo, indice.idade, indice.hobby, indice.datanascimento, indice.id))
    })
})
