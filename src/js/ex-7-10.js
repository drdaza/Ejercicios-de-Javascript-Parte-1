/* Escribe un programa que pida una frase y escriba cuántas veces aparecen cada una de las vocales
* i access at the space that give the phrase
* get how many vowels that has the phrase
* count how many appear each vowel
* count how many times appear each vowel
* print the number of the vowels that has the phrase
* print how many times appear each one of that vowels
*/
export function clickButtonVowels(){
    let ButtonVowels = document.getElementById("vowels-button");
    ButtonVowels.addEventListener("click" ,()=>{
        let phrase = document.getElementById("phrase").value;
        printInfoVowels(phrase);
    })
}
export function howManyVowels(phrase){
    let listVowels= phrase.match(/[aeiou]/gi);
    return listVowels;
}
export function HowManyTimesVowel(arrayVowels){
    let listVowels = [0,0,0,0,0];
    arrayVowels.forEach(element => {
        if(element==="a")
        {
            listVowels[0]++;
        }
        if(element==="e")
        {
            listVowels[1]++;
        }
        if(element==="i")
        {
            listVowels[2]++;
        }
        if(element==="o")
        {
            listVowels[3]++;
        }
        if(element==="u")
        {
            listVowels[4]++;
        }
    });
    return listVowels;
}
export function printInfoVowels(param){
    let spacePrint = document.getElementById("how-many-vowels-space");
    let listVowels = howManyVowels(param);
    let howManytimes = HowManyTimesVowel(listVowels);
    spacePrint.innerHTML = `
        <h2> the phrase have ${listVowels.length} vowels </h2>
        <h2> "a": ${howManytimes[0]}</h2>
        <h2> "e": ${howManytimes[1]}</h2>
        <h2> "i": ${howManytimes[2]}</h2>
        <h2> "o": ${howManytimes[3]}</h2>
        <h2> "u": ${howManytimes[4]}</h2>

    `
}