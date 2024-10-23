let edad=18;
const PI=3.1416
const edades=[21,18,25,36]
console.log(edad);
edad=25; //Al ser mutable, puedo reasignar
console.log(edad);
console.log(PI);
if(edad>=18){
    var dui='04747474-7'; //Variable local, existe solo dentro de este bloque
    console.log(dui);
}
edades[0]=25;
console.log(edades);