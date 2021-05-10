let lista = [];
function Saludar(p1,p2,p3){
    console.log(lista);
    return `Hola ${p1} ${p2} como estas tu edad es: ${p3}`;
}
console.log(Saludar.call(null, "Ludwing","Pinto",27));
console.log(Saludar.apply(null, ["Ludwing","Pinto",27]));
let ejecutar = Saludar.bind(null, "Ludwing","Pinto",27);
lista.push("datos");
console.log(ejecutar());