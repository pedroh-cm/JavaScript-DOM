/*  
   0 DOMINGO
   1 SEGUNDA FEIRA
   2 TERÇA FEIRA
   3 QUARTA FEIRA
   4 QUINTA FEIRA
   5 SEXTA FEIRA
   6 SABADO
*/  
var agora = new Date();
var diaSem = agora.getDay()

switch (diaSem){
   case 0:
       console.log('domingo !!')
       break
    case 1: 
    console.log('segunda - feira !!')
    break
    case 2:
        console.log('terça - feira !!')
        break
    case 3:
        console.log('quarta - feira !!')
        break     
    case 4:
        console.log('quinta - feira !!')
        break
    case 5:
        console.log('sexta - feira !!')
        break
    case 6:
        console.log('sabado!!')    
        break
    default:
        console.log('Dia invalido')      
}