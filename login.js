// Step 1 set event
const login = document.getElementById("login");
login.addEventListener("click", function () {
  // check if working
  //   console.log("login clicked");
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  //   console.log(email, password);
  if (!email) {
    alert("Please provide email");
    return;
  } else if (!password) {
    alert("Please provide password");
    return;
  } else {
    console.log(email);
    // Check if login info correct
    if (email !== "programminghero@gmail.com") {
      alert("Wrong email and enter the correct email");
      return;
    } else if (password !== "12345") {
      alert("Wrong password");
      return;
    } else {
      window.location.href = "depositewithdraw.html";
    }
  }
  console.log("login success");
});
