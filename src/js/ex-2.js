/*
*Escribe un programa que escriba en la pantalla “La suma de 3 + 5 es <resultado>”
* Crear mi archivo html donde va a estár el programa
++ Crear un archivo css
++ Vincula mi archivo css a mi archivo html
++ Añadir un poco de estilo
* Crear el espacio donde debe ir Mi suma y el texto
* Vincular mi archivo JavaScript con mi archivo html
* Acceder al espacio donde estará mi suma y el texto
++ probar si funciona el vinculo del archivo y el acceso al espacio.
* Crear el texto que voy a introducir en el espacio
* Hacer la operacion matematica que me pide el ejercicio
* crear el texto que voy a introducir junto con el resultado de la operación 
* Asignar el texto y la operacion matematica a su espacio correspondiente
*/
function WriteOperationMat(){
    let acces = document.getElementById("suma");
    acces.innerHTML = `<h2>La suma de 3 + 5: ${add()}</h2>`;
}
function add(){
    return 3+5;
}
WriteOperationMat();