export default function calcularEnvio (cantidad, Total) {
if(cantidad>=3 && cantidad<=10){
    console.log("Costo de envio +$15USD, con un total de: $15");
}
else if(cantidad>10){
    console.log("envio gratis");
}
else if(cantidad<3){
        console.log("No se permiten compras menores a 3 productos");
}
}