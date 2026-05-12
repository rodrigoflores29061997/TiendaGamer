export default function esVIP(total, cantidad) {
    if (cantidad > 20 && total > 1000) {
        console.log("Eres VIP");
    }
    else{
    console.log("No eres VIP");
    }
}