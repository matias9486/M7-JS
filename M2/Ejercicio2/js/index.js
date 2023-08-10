/*
1. Solicitar las credenciales del usuario: el login
empieza cuando solicitamos al usuario que se
identiﬁque. Estas credenciales deben validar
que el usuario es quien dice ser, por tal motivo
suelen incluir datos que deba conocer solo el
usuario deseado (como una contraseña).

2. Validación de las credenciales: en este paso
deberíamos veriﬁcar si esas credenciales son
correctas o válidas.

3. Tomar acción respecto a la validez o
invalidez de las credenciales: puede ser un
mensaje de error o de bienvenida.

Para este caso te proponemos solicitar un 
usuario y clave.
El usuario estará validado si es “admin” y su
clave es “1234”.
*/

let usuario;
let password;

iniciarSesion();

function ingresarTexto(mensaje){
    let texto;
    do {
        texto = prompt(mensaje);
    }while(texto.length == 0 || texto.trim().length == 0);

    return texto;    
}

function solicitarCredenciales(){
    usuario = ingresarTexto('Ingrese su usuario:');
    password = ingresarTexto('Ingrese su password');
}

function validarUsuario(usuario){
    return usuario === 'admin';
}

function validarPassword(password){
    return password === '1234';
}

function validarCredenciales(usuario, password){
    let estadoCredenciales = {};

    if (!validarUsuario(usuario)){
        estadoCredenciales.status = 'Fail';
        estadoCredenciales.mensaje = 'Usuario incorrecto.';
        return estadoCredenciales;
    }
    
    if(!validarPassword(password)){
        estadoCredenciales.status = 'Fail';
        estadoCredenciales.mensaje = 'Password incorrecto.';
        return estadoCredenciales;
    }
    
    estadoCredenciales.status = 'Ok';
    estadoCredenciales.mensaje = 'Credenciales correctas.';
    estadoCredenciales.usuario = usuario;
    return estadoCredenciales;
}

function iniciarSesion(){
    solicitarCredenciales();
    let estadoCredenciales = validarCredenciales(usuario, password);
        
    if (estadoCredenciales.status === 'Ok'){
        let sesion = {usuario : estadoCredenciales.usuario};
        alert(`Bienvenido ${sesion.usuario}`);        
    }else{
        alert(estadoCredenciales.mensaje);
    }        
}