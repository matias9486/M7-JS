let costosFijos = ingresarValorNumerico('Ingrese los costos fijos (Valor numérico positivo):');
let precioVenta = ingresarValorNumerico('Ingrese el precio de venta (Valor numérico positivo):');
let costosVariables = ingresarValorNumerico('Ingrese los costos variables (Valor numérico positivo):');

let puntoEquilibrio = calcularPuntoEquilibrio(costosFijos, precioVenta, costosVariables);
alert(`El punto de equilibrio es: ${puntoEquilibrio}`);

function ingresarValorNumerico(mensaje) {
    let valorNumerico;
    do {
        valorNumerico = Number(prompt(mensaje))
    }while(!valorNumerico || valorNumerico < 0);

    return valorNumerico;
}

function calcularPuntoEquilibrio(costosFijos, precioVenta, costosVariables){
    return costosFijos / (precioVenta - costosVariables);
}