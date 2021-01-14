var amigo = {
    nome:'Pedro',
    sexo:'M',
    peso:57.2,
    engordar(p){
        console.log('Engordou')
        this.peso += p
    }

}
amigo.engordar(4)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)