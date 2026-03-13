//botão do modo escuro

const botaoEsc = document.getElementById ('tema_escuro');

function mudarTema() {
    document.body.classList.toggle ('modo-escuro');
}

botaoEsc.addEventListener ('click', mudarTema);

//botão do formulário

const texto = document.getElementById ('texto');
const email = document.getElementById ('email');
const area = document.getElementById ('area');
const enviar = document.getElementById ('enviar');
const formulario = document.getElementById ('formulario');

formulario.addEventListener ('submit', function(event) {
    if (texto.value === '') {
        event.preventDefault();
        alert('Você esqueceu de digitar o seu nome!')
    }
    else if (email.value === '') {
        event.preventDefault();
        alert('Você esqueceu de digitar o seu e-mail!')
    }
    else if (area.value === '') {
        event.preventDefault();
        alert('Você esqueceu de digitar a sua mensagem!!')
    }
    else {
        alert('Formulário enviado com sucesso!!')
    }
});