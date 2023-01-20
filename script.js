const form = document.getElementById('form')
const nome = document.getElementById('nome')
const email = document.getElementById('email')
const tel = document.getElementById('tel')
const cpf = document.getElementById('cpf')
const senha = document.getElementById('senha')

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
})

function checkInputs () {
    const nomeValue = nome.value
    const emailValue = email.value
    const telValue = tel.value
    const cpfValue = cpf.value
    const senhaValue = senha.value

    if (nomeValue === '') {
        document.getElementById('nomeObrigatorio').innerHTML = "'Campo Obrigatório'"
        document.getElementById('obrigatorioButton').innerHTML = "Campos obrigatórios não registrados"
    } else {
        document.getElementById('nomeObrigatorio').innerHTML = ""
        document.getElementById('obrigatorioButton').innerHTML = ""
    }

    if (emailValue === '') {
        document.getElementById('emailObrigatorio').innerHTML = "'Campo Obrigatório'"
        document.getElementById('obrigatorioButton').innerHTML = "Campos obrigatórios não registrados"
    } else {
        document.getElementById('emailObrigatorio').innerHTML = ""
        document.getElementById('obrigatorioButton').innerHTML = ""
    }
    
    if (telValue === '') {
        document.getElementById('telObrigatorio').innerHTML = "'Campo Obrigatório'"
        document.getElementById('obrigatorioButton').innerHTML = "Campos obrigatórios não registrados"
    } else {
        document.getElementById('telObrigatorio').innerHTML = ""
        document.getElementById('obrigatorioButton').innerHTML = ""
    }

    if (cpfValue === '') {
        document.getElementById('cpfObrigatorio').innerHTML = "'Campo Obrigatório'"
        document.getElementById('obrigatorioButton').innerHTML = "Campos obrigatórios não registrados"
    } else {
        document.getElementById('cpfObrigatorio').innerHTML = ""
        document.getElementById('obrigatorioButton').innerHTML = ""
    }

    if (senhaValue === '') {
        document.getElementById('senhaObrigatorio').innerHTML = "'Campo Obrigatório'"
        document.getElementById('obrigatorioButton').innerHTML = "Campos obrigatórios não registrados"
    } else {
        document.getElementById('senhaObrigatorio').innerHTML = ""
        document.getElementById('obrigatorioButton').innerHTML = ""
    }

    if (telValue === '' | emailValue === '' | nomeValue === '' | senhaValue === '' | cpfValue === '') {
        document.getElementById('obrigatorioButton').innerHTML = "Campos obrigatórios não registrados"
    } else {
        document.getElementById('obrigatorioButton').innerHTML = "sucesso"
        document.getElementById('obrigatorioButton').style.color = '#0F7B0F'
    }
}
