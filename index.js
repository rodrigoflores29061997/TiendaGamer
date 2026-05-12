import calcularEnvio from "./envio.js";
import calcularDescuento from "./descuentos.js";
import esVIP from "./vip.js";

let nombre = prompt("Nombre del cliente:");
let cantidad = Number(prompt("Cantidad de productos:"));
let total = Number(prompt("Monto total:"));

console.log("Hola ", nombre);


let totalConDescuento = calcularDescuento(total);

let envio = calcularEnvio(cantidad);


if (envio === null) {
    console.log("Compra no válida");
} else {

    let totalFinal = totalConDescuento + envio;

    console.log("Nuevo total: $" + totalFinal);

    
    esVIP(totalFinal, cantidad);
}





