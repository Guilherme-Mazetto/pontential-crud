const listarDevelopers = () => {
    return fetch("http://localhost:3000/developers",{
        method: "GET"
    })
    .then( resposta => {
        return resposta.json();
    })
    .then( json => {
        return json;
    });
};

const detalhaDeveloper = id => {
    return fetch(`http://localhost:3000/developers/${id}`,
    {
        method: "GET"
    })
    .then( resposta => {
    return resposta.json()
    })
};


const cadastrarDevelopers = (nome, sexo, idade, hobby, datanascimento) => {
    const json = JSON.stringify({
        nome: nome,
        sexo: sexo,
        idade: idade,
        hobby: hobby,
        datanascimento: datanascimento
    })
    
    return fetch("http://localhost:3000/developers",{
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: json
    })
    .then( resp => {
        return resp.body;
    });
};

const deletaDeveloper = id => {
    return fetch(`http://localhost:3000/developers/${id}`, {
        method: "DELETE"
 })
}

const updateDeveloper = (id, nome, sexo, idade, hobby, datanascimento) => {
    const json = JSON.stringify({
        nome: nome,
        sexo: sexo,
        idade: idade,
        hobby: hobby,
        datanascimento: datanascimento
    })
    
    return fetch(`http://localhost:3000/developers/${id}`,{
        method: "PUT",
        headers: {
            "Content-type": "application/json"
        },
        body: json
    })
};