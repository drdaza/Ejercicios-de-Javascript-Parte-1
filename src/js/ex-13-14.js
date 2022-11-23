

export function clickCommonDivisorsButton(){
    let CommonButton = document.getElementById("common-div");
    CommonButton.addEventListener("click", ()=>{
        let firstDivNumber = document.getElementById("first-div-number").value;
        let secondDivNumber = document.getElementById("second-div-number").value;
        let result;
        let less= verifyMin(firstDivNumber, secondDivNumber);
        (less==firstDivNumber) ? result = commonDivisors(secondDivNumber, firstDivNumber): result = commonDivisors(firstDivNumber, secondDivNumber);
        PrintCommonDivisors(result);
    });
}
export function verifyMin(firstnumber, secondnumber){
    firstnumber = parseInt(firstnumber);
    secondnumber = parseInt(secondnumber);
    let less = Math.min(firstnumber, secondnumber);
    console.log(less);
    return less;
}
export function commonDivisors(LargeNumber, smallNumber){
    LargeNumber = parseInt(LargeNumber);
    smallNumber = parseInt(smallNumber);
    let commonDivisors = new Array();
    for (let index = smallNumber-1; index > 0; index--) 
    {
        if(smallNumber % index==0 && LargeNumber % index == 0)
        {
            commonDivisors.push(index);
        } 
        
    }
    return commonDivisors;
}
export function PrintCommonDivisors(array){
    let divisorsCommon = document.getElementById("divisors-common");
    divisorsCommon.innerHTML = ``;
    array.forEach(element => {
        divisorsCommon.innerHTML += `<h4> ${element} is common divisor</h4>`
    });
}