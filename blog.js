//To get user's input - post comment button
function postUserComment(event) {
  event.preventDefault();

  const commentAuthor = document.getElementById("newName").value;
  const emailAuthor = document.getElementById("newEmail").value;
  const authorComment = document.getElementById("newComment").value;

  if (commentAuthor === "" || emailAuthor === "" || authorComment === "") {
    alert("Please fill all field to post a comment");
    return false;
  } else if (validateEmail(userEmail)) {
    alert("Please use a valid email address.");
    return false;
  }
}

// To validade user's email
const validateEmail = (email) => {
  const validEmail = /^\S+@\S+\.\S+$/.test(email);
  return !validEmail;
};
