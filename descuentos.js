export default function calcularDescuento(Total){
    if(Total>200 && Total<500){
        let pagoFinal= Total-(Total*0.05);
        console.log("Aplica descuento del 5% y su Nuevo total: $" +pagoFinal)
    }else if(Total<200){
        console.log("Para descuento te falta :" + (200-Total))
    }else if(Total>500){
        let pagoFinal= Total-(Total*0.12)

            console.log("Aplica descuento del 12% y su nuevo total: $" +pagoFinal);
    }
}