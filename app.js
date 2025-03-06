//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

const amigos = [];

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
    atualizarAmigos();
}

function atualizarAmigos() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    // for(let i = 0; i < amigos.length; i++) {
    //     const li = document.createElement("li");
    //     li.innerHTML = amigos[i];
    //     lista.appendChild(item);
    // }
    amigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.innerHTML = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if(amigos.length <= 0) {
        alert("Adicione amigos para sortear");
        return;
    }
    const numeroAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[numeroAleatorio];
    document.getElementById("resultado").innerHTML = amigoSorteado;
}