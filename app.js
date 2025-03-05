//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];

console.log(amigos);

function adicionarAmigo() {
    const nome = document.getElementById("amigo").value.trim();
    if(nome == "") {
        alert("Por favor, insira um nome.");
        return;
    }
    if(nome.includes(["0","1","2","3","4","5","6","7","8","9"])) {
        alert("O campo 'Digite um nome' não pode conter números");
        return;
    }
    if(amigos.includes(nome)) {
        alert("Um amigo com esse nome já foi adicionado");
        return;
    }
    amigos.push(nome);
    console.log(amigos);
    document.getElementById("amigo").value = "";
    // atualizarAmigos();
}

// function atualizarAmigos()