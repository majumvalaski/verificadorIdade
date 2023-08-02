function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    
    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente')
    }else{
        var fsex = document.getElementsByName('sexo')
        var idade = ano - Number(fano.value)
        var sexo = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            sexo = 'Mulher'
            if(idade>=0 && idade<10){
                img.setAttribute('src','criancaMulher.jpg')
            }else if(idade<21){
                img.setAttribute('src','adolescMulher.jpg')
            }else if(idade<60){
                img.setAttribute('src','adultaMulher.jpg')
            }else{
                img.setAttribute('src','idosaMulher.jpg')
            }
        }else if(fsex[1].checked){
            sexo = 'Homem'
            if(idade>=0 && idade<10){
                img.setAttribute('src','criancaHomem.jpg')
            }else if(idade<21){
                img.setAttribute('src','adolescHomem.jpg')
            }else if(idade<60){
                img.setAttribute('src','adultoHomem.jpg')
            }else{
                img.setAttribute('src','idosoHomem.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${sexo} com ${idade} anos.`
        res.appendChild(img)
    }
    
}