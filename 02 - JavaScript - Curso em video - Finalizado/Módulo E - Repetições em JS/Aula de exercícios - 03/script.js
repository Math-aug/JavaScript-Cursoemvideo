function contar(){
    var ini = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var pas = document.getElementById('passo')

    var res = document.getElementById('res')


    if (ini.value == "") { //verica se o inicio está vazio
        window.alert('Sem ponto de INICIO, por favor digite um número para começar a contagem')
    } else if (fim.value == "") { //Verifica se o fim está vazio
        window.alert('Sem ponto de FIM, por favor digite um número para começar a contagem')
    } else if (pas.value == "") { //Verifica se o passo está vazio
        window.alert('Sem um valor de passo, para essa conta vamos considerar como 1.')
        if ((fim.value - ini.value) > 0) {
            pas.value = 1
        } else {
            pas.value = -1
        }
    } else if ((fim.value - ini.value) > 0 && pas.value < 0) { //Verifica se o passo chega no fim da contagem
        window.alert('Seu passo tende a ir para o lado contrário da contagem, por favor escolha um passo com sinal diferente ')
    } else if ((fim.value - ini.value) < 0 && pas.value > 0) {
        window.alert('Seu passo tende a ir para o lado contrário da contagem, por favor escolha um passo com sinal diferente ')
    } else {
        //Escrever a contagem
        res.innerHTML = 'Contando: <br>'
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number (pas.value)

        if (i < f){
            //Contagem crescente
            for (c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
        } else {
            //Contagem decrescente
            for (c = i; c >= f; c += p) {
                res.innerHTML += ` ${c} \u{1F449}`
            } 
        }
        res.innerHTML += ` \u{1F3C1}`
    } 
}