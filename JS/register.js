
let j= 0;

const controlInput = () => {
    //controle regex sur input id=name
    if(inputName) {
        let regexName = /\b[A-Z][a-z]{1,}\b/;

        if (!regexName.test(inputName.value)) {
                document.getElementById("controlName").innerText = "Le nom d'utilisateur doit contenir la première lettre en majuscule et 2 caractères minimum sans chiffre";
        }
            
        if (inputName.value == '') {
                document.getElementById("controlName").innerText = "";
        } 

        if(regexName.test(inputName.value))  document.getElementById("controlName").innerText = "";
    }

    if(inputMail) {
        let regexMail = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;

        if (!regexMail.test(inputMail.value)) {
            document.getElementById("controlMail").innerText = "Le nom d'utilisateur doit contenir la première lettre en majuscule et 2 caractères minimum sans chiffre";
    }
        
    if (inputMail.value == '') {
            document.getElementById("controlMail").innerText = "";
    } 

    if(regexMail.test(inputMail.value))  document.getElementById("controlMail").innerText = "";
    }
}


let inputName = document.getElementById("name");
let inputMail = document.getElementById("mail");
let inputPassword = document.getElementById("mdp");

inputName.addEventListener("keyup", controlInput);
inputMail.addEventListener("keyup", controlInput);
inputPassword.addEventListener("keyup", controlInput);

