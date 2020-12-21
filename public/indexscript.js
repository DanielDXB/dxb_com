const indextypedTextSpan = document.querySelector(".type");

const textArray = [" Welcome! "];
const typigDelay = 200;
let textArrayIndex = 0;
let charIndex = 0;

function type(){
    if(charIndex < textArray[textArrayIndex].length){
        indextypedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typigDelay);
    }
}

type();

