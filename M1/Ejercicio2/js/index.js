/*50% para los gastos necesarios,
30% para gastos opcionales y un 20% para
ahorro e inversión.

Diseñar un programa en JavaScript que reciba el 
ingreso total y muestre el monto a dedicar a 
cada una de esas categorías (gastos necesarios,
gastos opcionales, ahorro e inversión).
*/

const PORCENTAJE_GASTOS_NECESARIOS = 0.5;
const PORCENTAJE_GASTOS_OPCIONALES = 0.3;
const PORCENTAJE_AHORRO_INVERSION = 0.2;

let ingresoTotal = ingresarValorNumerico('Ingrese el Ingreso Total( Valor numérico positivo):');

let gastosNecesarios = calcularPorcentaje(PORCENTAJE_GASTOS_NECESARIOS, ingresoTotal);
let gastosOpcionales = calcularPorcentaje(PORCENTAJE_GASTOS_OPCIONALES, ingresoTotal);
let ahorroInversion = calcularPorcentaje(PORCENTAJE_AHORRO_INVERSION, ingresoTotal);

alert(`El ingreso total ($${ingresoTotal}) fue distribuido de la siguiente manera:\n-Gastos Necesarios: $${gastosNecesarios}.\n-Gastos Opcionales: $${gastosOpcionales}.\n-Ahorro e Inversion: $${ahorroInversion}.`);

function ingresarValorNumerico(mensaje) {
    let valorNumerico;
    do {
        valorNumerico = Number(prompt(mensaje))
    }while(!valorNumerico || valorNumerico < 0);

    return valorNumerico;
}

function calcularPorcentaje(porcentaje, total){
    return porcentaje * total;
}