var num = document.getElementById('fnum')
var lista = document.getElementById('flista')
var res = document.getElementById('res')
var valores = []


function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }

}


function inlista(n, l){
    if (l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }

}

function adicionar(){
    if(isNumero(num.value) && !inlista(lista.value, valores)){
        valores.push(Number(num.value))   
        var item = document.createElement('option')   
        item.txt = `O valor ${num.value} adicionado`
        lista.appendChild(item)  

    }else {
        window.alert('Valor Inválido!! ou Já encontrado na lista')
    }
}