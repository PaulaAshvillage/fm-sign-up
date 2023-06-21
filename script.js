const firstName = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");
const eMail = document.querySelector("#email");
const password = document.querySelector("#password");
const inputFields = document.querySelectorAll("input");
const submitBtn = document.querySelector("#btn-trial");

inputFields.forEach((inputField) => {
  inputField.addEventListener("blur", function () {
    inputField.classList.add("touched");
  });
});

submitBtn.addEventListener("click", InputCheck);

function InputCheck() {
  if (firstName.value === "");
  {
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
