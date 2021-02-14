const pegaURL = new URL(window.location)
const id = pegaURL.searchParams.get('id')

const inputID = document.querySelector('[data-id]')
inputID.value = id

const formEdicao = document.querySelector('[data-form]')

formEdicao.addEventListener("submit", event => {
    event.preventDefault()

    if( confirm( "Deseja deletar o desenvolvedor?" ) ) {
        deletaDeveloper(id)
        window.location.href ="developers.html"
    }

})