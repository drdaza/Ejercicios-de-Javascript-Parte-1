/* 4.Escribe un programa que pida dos números y escriba “La suma de <numero-uno> con <numero-dos> es <resultado>”
5. Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
6.Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
*create the space for both numbers that will operate
*create the space for the result
*access at the numbers that have entered
*Operate with the numbers
*acces at the space of result
*print the result
in this js i am doing the three exersises with numbers
beacuse all of them have the same logic.
  */
 export function clickResultButton(){
    let buttonResult = document.getElementById("result-button");
    buttonResult.addEventListener("click", ()=>{
        let numberContainer = accesNumbers();
        let operationContainer = operateNumbers(numberContainer);
        let moreThan = whoisMorethan(numberContainer);
        printResult(operationContainer, moreThan);

    });
 }
 export function accesNumbers(){
    let firstNumber = document.getElementById("first-num").value;
    let secondNumber = document.getElementById("second-num").value;
    let thirdNumber = document.getElementById("third-num").value;
    let numbers = [firstNumber,secondNumber,thirdNumber]
    console.log(numbers);
    return numbers;
 }
 export function whoisMorethan(numbers){
    let test = [parseInt(numbers[0]), parseInt(numbers[1]), parseInt(numbers[2])];
    return Math.max(test[0], test[1],test[2]);
 }
 export function operateNumbers(numbers){
    console.log(typeof numbers[0]);
    let test = parseInt(numbers[0])+parseInt(numbers[1]);
    return test;
 }
 export function printResult(param1, param2){
    let result = document.getElementById("result");
    result.innerHTML = `
    <h2>The result is: ${param1}</h2>
    <h2>The largest number is: ${param2}</h2>`;
 }
