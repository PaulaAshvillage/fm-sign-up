const firstName = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");
const eMail = document.querySelector("#email");
const password = document.querySelector("#password");

const submitBtn = document.querySelector("#btn-trial");

submitBtn.addEventListener("click", InputCheck);

function InputCheck() {
  if (firstName.value === "");
  {
    firstName.className = "input-error";
  }

  if (lastName.value === "");
  {
    console.log("falsch");
  }

  if (eMail.value === "" /*&&regex*/);
  {
    console.log("falsch");
    //Regex
  }
  if (password.value === "");
  {
    console.log("falsch");
  }
}
//Farbe input
//label/svg Lösung
//regex email
