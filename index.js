const input = document.querySelector(".container__feeld");
const buttonGenerate = document.querySelector(".button-generate");
const buttonCopy = document.querySelector(".button-copy");

function getPassword() {
  const chars =
    "0123456789abcdefghijkmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const passwordLength = 12;
  let randomPassword = "";
  for (let i = 0; i <= passwordLength; i++) {
    const randomNumber = Math.floor(Math.random() * chars.length);
    randomPassword += chars.substring(randomNumber, randomNumber + 1);
  }
  input.value = randomPassword;
}

function copyPassword() {
  input.select();
  input.setSelectionRange(0, 999);
  document.execCommand("copy");
}

buttonGenerate.addEventListener("click", getPassword);
buttonCopy.addEventListener("click", copyPassword);
