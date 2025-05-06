let j = 0;

const controlInput = () => {
      //controle regex sur input id=name
      if (inputName) {
            //let regexName = /\b[A-Z][a-z]{1,}\b/;

            if (!regexName.test(inputName.value)) {
                  document.getElementById("controlName").innerText =
                        "Le nom d'utilisateur doit contenir la première lettre en majuscule et 2 caractères minimum sans chiffre";
            }

            if (inputName.value == "") {
                  document.getElementById("controlName").innerText = "";
            }

            if (regexName.test(inputName.value))
                  document.getElementById("controlName").innerText = "";
      }

      //controle regex sur input id=mail
      if (inputMail) {
            //let regexMail = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;

            if (!regexMail.test(inputMail.value)) {
                  document.getElementById("controlMail").innerText =
                        "Votre email n'est pas valide";
            }

            if (inputMail.value == "") {
                  document.getElementById("controlMail").innerText = "";
            }

            if (regexMail.test(inputMail.value))
                  document.getElementById("controlMail").innerText = "";
      }

      //controle regex sur input id=mdp
      if (inputPassword) {
            //let regexPsd = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).{8,}$/;

            if (!regexPsd.test(inputPassword.value)) {
                  document.getElementById("controlMdp").hidden = false;
                  document.getElementById("mdp").style.backgroundColor = "";
            }

            if (inputPassword.value == "") {
                  document.getElementById("controlMdp").hidden = true;
                  document.getElementById("mdp").style.backgroundColor = "";
            }

            if (regexPsd.test(inputPassword.value)) {
                  document.getElementById("controlMdp").hidden = true;

                  if (inputPassword.value.length < 9)
                        document.getElementById("mdp").style.backgroundColor = "red";
                  if (inputPassword.value.length == 9)
                        document.getElementById("mdp").style.backgroundColor = "orange";
                  if (inputPassword.value.length > 9)
                        document.getElementById("mdp").style.backgroundColor = "green";
            }
      }
};

const submit = (event) => {
      event.preventDefault();

      if (
            regexName.test(inputName.value) &&
            regexMail.test(inputMail.value) &&
            regexPsd.test(inputPassword.value)
      ) {
            const userNumber = localStorage.length;
            localStorage.setItem(
                  "user" + (userNumber + 1),
                  JSON.stringify(inputName.value)
            );

            inputName.value = "";
            inputMail.value = "";
            inputPassword.value = "";
      }
};

let inputName = document.getElementById("name");
let inputMail = document.getElementById("mail");
let inputPassword = document.getElementById("mdp");
let submitForm = document.getElementById("formRegister");

let regexName = /\b[A-Z][a-z]{1,}\b/;
let regexMail = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
let regexPsd = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).{8,}$/;

inputName.addEventListener("keyup", controlInput);
inputMail.addEventListener("keyup", controlInput);
inputPassword.addEventListener("keyup", controlInput);
submitForm.addEventListener("submit", submit);
