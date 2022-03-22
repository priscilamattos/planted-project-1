//To get user's input - submit button
function getUserMessage(event) {
  event.preventDefault();

  const userName = document.getElementById("name").value;
  const userEmail = document.getElementById("email").value;
  const userMessage = document.getElementById("message").value;
  const emailReg = "/^([w-.]+@([w-]+.)+[w-]{2,4})?$/";

  if (userName === "" || userEmail === "" || userMessage === "") {
    alert("Please fill all fields!");
    return false;
  } else if (validateEmail(userEmail)) {
    alert("Please use a valid email address.");
    return false;
  }

  document.getElementById("confirmName").innerText = userName;
  document.getElementById("confirmEmail").innerText = userEmail;
  document.getElementById("confirmMessage").innerText = userMessage;

  // show modal after validation
  document.getElementById("modal").style.display = "block";
}
// To validade user's email
const validateEmail = (email) => {
  const validEmail = /^\S+@\S+\.\S+$/.test(email);
  return !validEmail;
};

// Click 'confirm' to exit a form
function closeModal() {
  document.getElementById("modal").style.display = "none";
  showSnackbar();
  const inputs = document.querySelectorAll(
    "#name, #email, #message, #confirmName, #confirmEmail, #confirmMessage"
  );
  console.log(inputs);
  inputs.forEach((input) => {
    input.value = "";
    input.innerText = "";
  });
}

//   Click 'cancel' to exit modal
function cancelModal() {
  document.getElementById("modal").style.display = "none";
}

// Snackbar
function showSnackbar() {
  document.getElementById("snackbar").style.display = "block";
  setTimeout(function () {
    document.getElementById("snackbar").style.display = "none";
  }, 3000);
}
