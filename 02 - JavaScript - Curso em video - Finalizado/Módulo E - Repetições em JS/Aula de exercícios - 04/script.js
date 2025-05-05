function tabuada() {
    var n = Number(document.getElementById('txtn').value)
    var tab = document.getElementById('seltab')

    if (n == '') {
        window.alert('Nenhum número escrito, por favor escreva uma número para ver a sua TABUADA')
    } else {

        tab.innerHTML = "" //Limpa as opções do seletor antes de adicionar a tabuada
        for (c = 0; c <= 10; c++) {
            var item = document.createElement('option') //Cria uma "opção"
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}` //Número da posição de cada "opção" --> Problema que teria em outras linguagens
            tab.appendChild(item) //Adiciona a novo opção dentro do selector
        }
    }   
}