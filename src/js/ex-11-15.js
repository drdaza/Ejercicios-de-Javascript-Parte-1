/* Escribir un programa que nos diga si un número dado es primo (no es divisible por ninguno otro número que no sea él mismo o la unidad)
*access the space of the number that was introducet
*check that the entered number cannot be split between the first three prime numbers.
* (if is true stop the algoritm)
* check the check the square root of the number 
* (if is exact stop the algoritm)
* divide the number between the prime numbers less than your square root
(if is true stop the algoritm)
* print if is prime number or not
(Things for added)
* if is not a prime number, print wich is it divisor 
(with list that within her has a respuest of the PrimeNumber and the number if is not) 
*/

import { verifyDivisors } from "./ex-11-12.js";

export function clickPrimeButton(){
    let PrimeButton = document.getElementById("prime-button");
    PrimeButton.addEventListener("click", ()=>
    {
        let number = document.getElementById("prime-number").value;
        printRespuest(number);
        verifyDivisors(number);
    });
}
export function divideFirstPrimeNumbers(number){
    let parseNumber = parseInt(number);
    let primeNumbers = [2, 3, 5];
    let isPrime = true;
    primeNumbers.forEach(element => {
        /* (parseNumber % element==0) ? isPrime = false : isPrime = true; */
        if(parseNumber % element==0){
            console.log("entra");
            isPrime = false;
            return isPrime;
        }
    });
    return isPrime;
}
export function squareRootCheck(number){
    let isPrime = false;
    if(divideFirstPrimeNumbers(number))
    {   
        let squareRoot = Math.sqrt(number);
        console.log(squareRoot);
        (Number.isInteger(squareRoot)) ? isPrime = false : isPrime = true;
    }
    /* if(Number.isInteger(squareRoot)){
        isPrime = false;
    } */
    return isPrime;
}
export function checkIsPrimeNumber(number){
    let isPrime = false;
    if(squareRootCheck(number))
    {
        console.log(number);
        let primeNumbersOneTothirtyOne = [7, 11, 13, 17, 19, 23, 29, 31];
        primeNumbersOneTothirtyOne.forEach(element => {
            (ModNumbers(number, element)&& number != element) ? isPrime = false : isPrime = true; 
        });
    }
    return isPrime;
}
export function printRespuest(number)
{
    (checkIsPrimeNumber(number) || !valideDireferent(number)) ? printIsPrime() : printNoPrime();
}
export function ModNumbers(param, divider)
{
    let valider;
    let isExact = param % divider;
    (isExact==0) ? valider = true : valider = false;
    return valider;
}
export function valideDireferent(number){
    return (number!=5 && number != 7 && number != 3 && number != 2) ? true : false;
}
export function printIsPrime(){
    let printer = document.getElementById("prime-respuest");
    printer.innerHTML = `<h2>yes, is a prime number</h2>`
}
export function printNoPrime(){
    let printer = document.getElementById("prime-respuest");
    printer.innerHTML = `<h2>No, is not a prime number</h2>`
}