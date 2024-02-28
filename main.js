console.clear();
console.log("Welcome to the login page..");

let loginButton = document.getElementById("login-button");
console.log("Login Button:", loginButton);

loginButton.addEventListener("click", () => {
  console.log("logging in....");

  let usernameData = document.getElementById("username").value;
  let passwordData = document.getElementById("password").value;

  console.log("Username:", usernameData);
  console.log("Password:", passwordData);

  if (usernameData === "Jose" && passwordData === "pt123") {
    console.log("Login successful");
    window.location.href = "./page2.html";
  }
});
