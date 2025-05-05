function verificar() {
    var data = new Date() //pegar a data do computador
    var ano = data.getFullYear() // pegar os 4 digitos do ano da data
    var fano = document.getElementById('txtano') //salva o ano digitado pelo usuário
    var res = document.querySelector('div#res') //salva a resposta do genero selecionado

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente') 
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img') //é como se criasse a tag "img" no HTML
        img.setAttribute('id', 'foto') // E aqui atribui um id = foto
        if (fsex[0].checked) {
            genero = 'Homem'
            //Descobrindo se é criança, jovem, adulto ou idoso:
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src','01homemCrianca.png')
            } else if (idade < 21){
                //Jovem
                img.setAttribute('src', '02homemJovem.png')
            } else if (idade < 50){
                //Adulto
                img.setAttribute('src', '03homemAdulto.png')
            } else {
                //Idoso
                img.setAttribute('src', '04homemIdoso.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            //Descobrindo se é criança, jovem, adulta ou idosa:
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', '01mulherCrianca.png')
            } else if (idade < 21){
                //Jovem
                img.setAttribute('src', '02mulherJovem.png')
            } else if (idade < 50){
                //Adulta
                img.setAttribute('src', '03mulherAdulta.png')
            } else {
                //Idosa
                img.setAttribute('src', '04mulherIdosa.png')
            }
        }   
        res.style.textAlign = 'center' //Coloca o texto no meio pelo JS
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img) //adiciona um item no final
    }
}