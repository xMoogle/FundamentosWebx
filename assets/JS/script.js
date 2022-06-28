let nome = window.document.getElementById("nome")
let email = window.document.getElementById("email")
let assunto = window.document.getElementById("assunto")

nome.style.width = "10%"
email.style.width = "10%"

function validaNome()
{
    let txt = document.querySelector("#txtnome")
    if (nome.value.length <= 2)
    {
        txt.innerHTML = "Nome invalido"
        txt.style.color = "red"
    }
    else 
    {
        txt.innerHTML = "Nome válido"
        txt.style.color = "green"
    }
}

function validaInputMinChar(input, minChar)
{ 
    let coringa = "#txt" + input.id
    let txt = document.querySelector(coringa)
    if (input.value.length <= minChar)
    {
        txt.innerHTML = (input.id + " inválido")
        txt.style.color = "red"
    }
    else 
    {
        txt.innerHTML = (input.id + " válido")
        txt.style.color = "green"
    }
}

function validaEmail()
{
    let txt = document.querySelector("#txtemail")
    {

    if(email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1)
    {
        txt.innerHTML = ("Email inválido")
        txt.style.color = "red"
    }
    else
    {
       txt.innerHTML = ("Email válido")
       txt.style.color = "green"
    }
}
}