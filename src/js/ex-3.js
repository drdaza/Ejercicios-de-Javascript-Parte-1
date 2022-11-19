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
*---------
*Escribe un programa que pida una frase y escriba cuantas veces aparece la letra a
* i acces at the space that the phrase was introcing
* i check how many times the vowel "a" are in the word
or phrase 
*print how many times are 
 */
let button = document.getElementById("button-name");
button.addEventListener("click", function(){
    let acces = document.getElementById("text-name").value;
    const vowelA= howManyVowelA(acces);
    console.log(vowelA);
    console.log(acces);
    PrintMessage(acces,vowelA);
});
function PrintMessage(info, param){
    let message = document.getElementById("hi-space");
    message.innerHTML = `
    <h2>Hi ${info}!!</h2>
    <h2> and have ${param} "a" in the word
    `;
}
function howManyVowelA(param){
    let word = param.match(/[a]/gi).length;
    console.log(word);
    return word;
}


