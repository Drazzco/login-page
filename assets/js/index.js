if (localStorage.getItem("token") == null) {
    alert("You need be logged in to access this page");
    window.location = "./assets/html/signin.html";
}

let userLoggedIn = JSON.parse(localStorage.getItem("userLoggedIn"));

let loggedIn = document.querySelector("#loggedIn");
console.log(userLoggedIn)
loggedIn.innerHTML = "Hi, " + userLoggedIn.nameSign

function exit() {
    localStorage.removeItem("token");
    localStorage.removeItem("userLoggedIn");
    window.location.href = "./assets/html/signin.html";
}
