let inputBox = document.getElementById("inputBox")
let copyLogo = document.getElementById("copyLogo")
let lengthValue = document.getElementById("lengthValue")
let inputRange = document.getElementById("inputRange")
let UPPERCASE = document.getElementById("UPPERCASE")
let LOWERCASE = document.getElementById("LOWERCASE")
let NUMBERS = document.getElementById("NUMBERS")
let SYMBOLS = document.getElementById("SYMBOLS")
let genButton = document.getElementById("genButton")

//  we r looking for input range and length value euality.

lengthValue.textContent = inputRange.value
inputRange.addEventListener('input', () => {
    lengthValue.textContent = inputRange.value
})

copyLogo.addEventListener('click', () => {
    if (inputBox.value != 0 || inputBox.value.length >= 1) {
        navigator.clipboard.writeText(inputBox.value)
        copyLogo.title = ("PASSWORD COPIED")
    }
})

genButton.addEventListener('click', () => {
    inputBox.value = passwrd()
})




let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lower = "abcdefghijklmnopqrstuvwxyz";
let num = "0123456789";
let sym = `!"#$%&'()*+,-./:;<=>?@[]^_{|}~`;

function passwrd() {


    let totalPass = "";
    let allChars = "";

    allChars += UPPERCASE.checked ? upper : "";
    allChars += LOWERCASE.checked ? lower : "";
    allChars += NUMBERS.checked ? num : "";
    allChars += SYMBOLS.checked ? sym : "";


    let i = 1;
    while (i <= inputRange.value) {
        totalPass += allChars[Math.floor(Math.random() * allChars.length)]
        i++;
    }
    return totalPass
}





let checkboxes = document.querySelectorAll('input[type="checkbox"]');
let boxes = document.querySelectorAll('.box');

for (let i = 0; i < checkboxes.length; i++) {
  checkboxes[i].addEventListener('change', function() {
    let checkedCount = 0;
    for (let j = 0; j < checkboxes.length; j++) {
      if (checkboxes[j].checked) {
        checkedCount++;
      }
    }
    for (let k = 0; k < boxes.length; k++) {
      if (k < checkedCount) {
        boxes[k].style.backgroundColor = 'green';
      } else {
        boxes[k].style.backgroundColor = '#18171F';
      }
    }
  });
}// box1.style.color='red'