export default function calcularDescuento(total) {

    if (total < 200) {
        let falta = 200 - total;
        console.log("Faltan $" + falta + " para promoción");
        return total;
    }

    if (total >= 200 && total <= 500) {
        console.log("Descuento del 5%");
        return total - (total * 0.05);
    }

    console.log("Descuento del 12%");
    return total - (total * 0.12);
}