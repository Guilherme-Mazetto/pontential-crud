const pegaURL = new URL(window.location)
const id = pegaURL.searchParams.get('id')

const inputNome = document.querySelector('[data-nome]')
const inputSexo = document.querySelector('[data-sexo]')
const inputIdade = document.querySelector('[data-idade]')
const inputHobby = document.querySelector('[data-hobby]')
const inputDataNascimento = document.querySelector('[data-datanascimento]')

detalhaDeveloper(id).then( dados => {
    inputNome.value = dados.nome
    inputSexo.value = dados.sexo
    inputIdade.value = dados.idade
    inputHobby.value = dados.hobby
    inputDataNascimento.value = dados.datanascimento.substring(0,10)
})

const formEdicao = document.querySelector('[data-form]')

const mensagemSucesso = (mensagem) => {
    const linha = document.createElement('tr');

    const conteudoLinha = `
    <div class="alert alert-sucess" role="alert">
        ${mensagem}
    </div>
    `  
    linha.innerHTML = conteudoLinha
    return linha  
};

const mensagemErro = (mensagem) => {
    const linha = document.createElement('tr');

    const conteudoLinha = `
    <div class="alert alert-warning" role="alert">
        ${mensagem}
    </div>
    `  
    linha.innerHTML = conteudoLinha
    return linha  
};


formEdicao.addEventListener("submit", event => {
    event.preventDefault()
    
    const nome = event.target.querySelector('[data-nome]')
    const sexo = event.target.querySelector('[data-sexo]')
    const idade = event.target.querySelector('[data-idade]')
    const hobby = event.target.querySelector('[data-hobby]')
    const datanascimento = event.target.querySelector('[data-datanascimento]')

    updateDeveloper(id, inputNome.value, inputSexo.value, inputIdade.value, inputHobby.value, inputDataNascimento.value).then
    ( resposta => {
        if( resposta.status == 200 ){
            formEdicao.appendChild(mensagemSucesso(
                'Desenvolvedor editado com sucesso!'
            ))
        } 
        else {
            formEdicao.appendChild(mensagemErro(
                'Erro na edição do desenvolvedor!'
            ))
        }
    })
})