import calcularEnvio from "./envio.js";
import calcularDescuento from "./descuentos.js";
import vip from "./vip.js";

let nombre= "Nadia";
let cantidad= 5;
let Total= 250;

calcularEnvio (cantidad, Total);
calcularDescuento(Total);
vip(Total,cantidad);






