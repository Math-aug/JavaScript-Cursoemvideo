let list = []
let res = document.getElementById('res')

function analisa() {
    let num = Number(document.getElementById('txtnum').value)
    let tab = document.getElementById('seltab')
    let rep = 0
    let item

    for (c = 0 ; c <= list.length ; c++) { //Verifica se tem numero repitido
        if (num == list[c]) {
            rep++
        }
    }

    if (num == '' || num < 1 || num > 100 || rep > 0) {
        window.alert('Valor inválido, por favor digite outro número')
    } else {
        list.push(num)
        item = document.createElement('option')
        item.text = `O número ${num} foi adicionado a lista`
        tab.appendChild(item)
    }

    res.innerHTML = "" //Limpa os textos do finalizar quando adicona mais numeros
    document.getElementById('txtnum').value = "" //Deixa sempre vazia a caixa de input
    document.getElementById('txtnum').focus() //faz o input estar selecionado diretamente
    
}


function finaliza() {
    let tam = list.length
    list.sort() //Coloca em ordem crescente o vetor, para achar mais fácil o maior e menor número

    if (tam == 0) {
        window.alert('Nenhum número, por favor adcione números na tabela')
    } else {
        let maior = list[tam-1]
        let menor = list[0]
        let soma = 0
        let media = 0

        for(c = 0; c < tam ; c++) {
            soma = soma + list[c]
        }

        media = soma / tam

        res.innerHTML += `<p>Ao todo, temos ${tam} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>` 
        res.innerHTML += `<p>A média dos valores é ${media}.</p>`
    }
}