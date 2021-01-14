var num = [5 , 2 , 8 , 9 , 3]
num.push(1)
num.sort()
console.log(num)
num.length
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
var pos = num.indexOf(3)
if(pos == -1){
    console.log(`O valor não foi encontrado!!`)
}else {
    console.log(`O vetor está na posição ${pos}`)
}


