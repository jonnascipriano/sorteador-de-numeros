function sortear(){
    let quantidade = Number(document.querySelector('input#quantidade').value)
    let de = Number(document.querySelector('input#de').value)
    let ate = Number(document.querySelector('input#ate').value)

    let sorteados = []
    let numeros;

    if (quantidade == '' || de == '' || ate == ''){
        alert('Preencha todos os campos!')
    } else if (quantidade >= (ate - de + 1)){
        alert('Quantidade maior ou igual que o intervalo entre os números selecionados!\nDigite um valor válido!')
        esvaziarCampos()
    } else if (quantidade > ate){
        alert('Quantidade maior que o número final!\nDigite um valor válido!')
        esvaziarCampos()
    } else if(de >= ate){
        alert('O número inicial precisa ser maior que o final!\nDigite um valor válido!')
        esvaziarCampos()
    } else {
        for(let i = 0; i < quantidade; i++){
        numeros = obterNumeroAleatorio(de, ate)
        while(sorteados.includes(numeros)){
            numeros = obterNumeroAleatorio(de, ate)
        }
        sorteados.push(numeros)
        }

        if(document.querySelector('#btn-rein')){
            document.querySelector('#btn-rein').classList.remove('button_desativado')
            document.querySelector('#btn-rein').classList.add('button_ativado')
        }

        document.querySelector('#resultado').innerHTML = `Os ${quantidade} número(s) sorteado(s): <mark>${sorteados}</mark>`
    }    
}

function esvaziarCampos(){
    document.querySelector('input#quantidade').value = ''
    document.querySelector('input#de').value = ''
    document.querySelector('input#ate').value = ''
}

function obterNumeroAleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function reiniciar(){
    esvaziarCampos()

    if(document.querySelector('#btn-rein')){
        document.querySelector('#btn-rein').classList.remove('button_ativado')
        document.querySelector('#btn-rein').classList.add('button_desativado')
    }

    document.querySelector('#resultado').innerHTML = ''
}