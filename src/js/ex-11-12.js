/* acces the info that the user give it
* divide the number between 2, 3, 5, 7
* capture wich is the divisor of number that the user gives
* print the numbers the are divisors of number
*/
export function verifyDivisors(number){
     let array = divideNumber(number);
     printDivisorNumbers(array);
}
export function divideNumber(number)
{
    let containerNumber= parseInt(number);
    let numberDivisors = new Array();
    let numbers = [2, 3, 5, 7];
    numbers.forEach(element => {
        if(containerNumber % element == 0){
            numberDivisors.push(element);
        } 
    });
    return numberDivisors;
}
export function printDivisorNumbers(array){
    let spaceprint = document.getElementById("prime-respuest");
    array.forEach(element => {
        spaceprint.innerHTML += `<h2>${element} is divisor</h2>`
    });
}