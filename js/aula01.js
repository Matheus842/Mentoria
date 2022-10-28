var tipo = 'Somar'

var checkbox = document.querySelector('#theme')
checkbox.addEventListener('change', function(){
    if(this.checked){
        document.documentElement.setAttribute('data-theme', 'light')
    } else {
        document.documentElement.setAttribute('data-theme', 'dark')
    }
})

function oper(){
    let num_um = document.querySelector('#num_um').value
    let num_dois = document.querySelector('#num_dois').value
    let res = document.querySelector('#res')

    num_um = parseFloat(num_um)
    num_dois = parseFloat(num_dois)

    if (num_um == NaN || num_um == undefined || num_um == ''){
        num_um = 0
    }

    if (num_dois == NaN || num_dois == undefined || num_dois == ''){
        num_dois = 0
    }

    switch (tipo) {
        case "Somar":
            return res.innerText = num_um + num_dois
    
        case "Subtrair":
            return res.innerText = num_um - num_dois
        
        default:
            break;
    }
}

function evento(){
    let soma = document.querySelector('#soma')
    let somar = document.querySelector('#somar')
    let sub = document.querySelector('#sub')
    let subs = document.querySelector('#subs')

    if (soma.checked){

        somar.classList.add('ativo')
        subs.classList.remove('ativo')
        tipo = 'Somar'

    } else if (sub.checked) {

        somar.classList.remove('ativo')
        subs.classList.add('ativo')
        tipo = 'Subtrair'

    }

    oper()
}

function limpar(){
    document.querySelector('#num_um').value = 0
    document.querySelector('#num_dois').value = 0

    oper()
}

evento()

console.log(document.querySelectorAll('input[type=radio]'))