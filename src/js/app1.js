/*
* Crear un programa Escribe un programa que escriba en la pantalla un texto de tipo <h1> que diga “Hello Javascript”.
* Crear mi archivo html donde va a estár el programa
++ Crear un archivo css
++ Vincula mi archivo css a mi archivo html
++ Añadir un poco de estilo
* Crear el espacio donde debe ir el texto de tipo <h1>
* Vincular mi archivo JavaScript con mi archivo html
* Acceder al espacio donde estará el texto de tipo <h1>
++ probar si funciona el vinculo del archivo y el acceso al espacio.
* Crear el texto que voy a introducir en el espacio
* Asignar ese texto al espacio donde debe estar
*/

import { checkIsPrimeNumber, clickPrimeButton, divideFirstPrimeNumbers, printRespuest, squareRootCheck, valideDireferent} from "./ex-11-15.js";
import { clickResultButton } from "./ex-4.js";
import { clickButtonVowels } from "./ex-7-10.js";


function app(){
    WriteHelloJavascrit();
    clickResultButton();
    clickButtonVowels();
    clickPrimeButton();
}
app();

/*para aññadir codigo al html son esta `` comillas no las dobles ni la simples */
function WriteHelloJavascrit(){
    let acces = document.getElementById("title");
    console.log(acces);
    let message = `<h1>Hello JavaScript </h1>`;
    acces.innerHTML = message;
}
