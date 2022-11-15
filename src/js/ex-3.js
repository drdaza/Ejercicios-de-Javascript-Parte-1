/*
*Escribe un programa que pida el nombre del usuario con un input y escriba un texto que diga “Hola <nombre-de-usuario>”
* Crear el espacio donde debe ir el texto que pedieré al usuario y donde irá el texto de regreso
* Crear un boton para poder desarrollar la accion de recibir el nombre y que el programa te salude
* Vincular mi archivo JavaScript con mi archivo html
* Acceder al espacio donde estará el texto 
++ probar si funciona el vinculo del archivo y el acceso al espacio.
* Crear un evento para que al clickar el boton reciba la informacion del nombre
* Atrapar nombre que dio el usuario
* Hacer que el programa imprima el "hola <nombre>"
 */
let button = document.getElementById("button-name");
button.addEventListener("click", function(){
    let acces = document.getElementById("text-name").value;
    console.log(acces);
    PrintMessage(acces);
});
function PrintMessage(info){
    let message = document.getElementById("hi-space");
    message.innerHTML = `<h2>Hi ${info}!!</h2>`;
}


