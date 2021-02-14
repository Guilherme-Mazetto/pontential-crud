const formCadastroDeveloper = document.querySelector('[data-form]')

formCadastroDeveloper.addEventListener("submit", event => {
    event.preventDefault()
    
    const nome = event.target.querySelector('[data-nome]')
    const sexo = event.target.querySelector('[data-sexo]')
    const idade = event.target.querySelector('[data-idade]')
    const hobby = event.target.querySelector('[data-hobby]')
    const datanascimento = event.target.querySelector('[data-datanascimento]')

    cadastrarDevelopers(nome.value, sexo.value, idade.value, hobby.value, datanascimento.value)
    window.location.href ="developers.html"
})