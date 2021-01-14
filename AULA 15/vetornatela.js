var valores = [5 , 2 , 3 , 4]
valores.sort() // Colocar em ordem
valores.push(6) // Adicionar no ultimo elemento
for(var pos in valores){ // Percuso de vetores com for in 
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}


/*valores.push(9)
for(var pos = 0; pos <= valores.length; pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/