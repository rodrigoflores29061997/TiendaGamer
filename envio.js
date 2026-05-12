export default function calcularEnvio(cantidad){

    if(cantidad < 3){
        console.log("No se permiten compras menores a 3 productos");
        return null;
    }

    else if(cantidad <= 10){
        console.log("Costo de envío: $15 USD");
        return 15;
    }

    else{
        console.log("Envío gratis");
        return 0;
    }

}