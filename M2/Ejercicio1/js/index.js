let edad = ingresarValorNumerico('Ingrese su edad (Entero positivo hasta 100):');
alert(validarMayorEdad(edad));

function ingresarValorNumerico(mensaje) {
    let valorNumerico;
    do {
        valorNumerico = Number.parseInt(prompt(mensaje))
    }while(!valorNumerico || valorNumerico < 0 || valorNumerico > 100);

    return valorNumerico;
}

function validarMayorEdad(edad){
    return edad>18?'Bienvenido.':'Ud es menor de edad.';
}