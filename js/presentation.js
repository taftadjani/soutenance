const textArray = ["pour votre attention", "pour tous!", "à tous!"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000;
let textArrayIndex = 0;
let charIndex = 0;
const typedTextSpan = document.querySelector('.typed-txt');
const cursorSpan = document.querySelector('.cursor');

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        if (!cursorSpan.classList.contains('typing')) {
            cursorSpan.classList.add('typing');
        }
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } else {
        cursorSpan.classList.remove('typing');
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        if (!cursorSpan.classList.contains('typing')) {
            cursorSpan.classList.add('typing');
        }
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    } else {
        cursorSpan.classList.remove('typing');
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) {
            textArrayIndex = 0;
        }
        setTimeout(type, typingDelay + 1100);
    }
}
window.onload = _ => {
    if (document.getElementById('d2166e55b5438f4ca71888bdf84d068e').classList.contains('present')) {
        if (textArray.length) {
            textArrayIndex = 0;
            charIndex = 0;
            setTimeout(() => {
                setTimeout(type, 0);
            }, 7000);
        }
    } else {
        typedTextSpan.textContent = "";
    }

}