function contar() {
   let incio = document.getElementById('txti')
   let fim = document.getElementById('txtf')
   let passo = document.getElementById('txtp')
   let res = document.getElementById('res')

   if(incio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
    res.innerHTML = `Impossivel contar`   
    window.alert('[ERRO]Faltam Dados !!')
       
   }else{
       res.innerHTML = `Contando: <br>`
       let i = Number(incio.value)
       let f = Number(fim.value)
       let p = Number(passo.value)
       if(p == 0){
           window.alert('Passo Inválido! Considerando passo 1')
           p = 1
       }
       //CONTAGEM CRESCENTE
        if( i < f){
            for(let c = i; c <= f; c+= p){
                res.innerHTML += ` ${c} \u{1f449} `
        }  
         
        } else {
            //CONTAGEM REGRESIVA
            for(let c = i; c >= f; c -= p){
                res.innerHTML += ` ${c} \u{1f449}`
            }
        }res.innerHTML += `\u{1f3c1}`
   } 
}