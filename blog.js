const postButton = document.getElementById("postComment");
postButton.addEventListener("click", function (event) {
  event.preventDefault();

  //get user insformation
  const userName = document.getElementById("newName").value;
  const userEmail = document.getElementById("newEmail").value;
  const userComment = document.getElementById("newComment").value;

  //create a new div, date, name, image and comment
  const newBox = document.createElement("div");
  newBox.classList.add("blogComments");

  newBox.innerHTML = `
  <figure>
    <img
      src="./images/profile-image-${randomImage()}.jpg"
      alt="User Profile Image"
    />
  </figure>
  <div class="comment">
    <h4>${getDate()} by ${userName}</h4>
    <p>
      ${userComment}
    </p>
  </div>
`;

  //get comment from textarea
  const postedComment = document.getElementById("newCommentBox");
  postedComment.append(newBox);
  console.log({ postedComment });
});

//get a long date format
function getDate() {
  const dateOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const today = new Date();
  return today.toLocaleDateString("en-US", dateOptions);
}

//get a random image
function randomImage(min = 1, max = 3) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
