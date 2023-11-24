let btn = document.querySelector(".fa-eye")

btn.addEventListener("click", ()=>{
    let inputPass = document.querySelector("#password")
    if(inputPass.getAttribute("type") == "password")
    {
        inputPass.setAttribute("type", "text")
    }
    else
    {
        inputPass.setAttribute("type", "password")
    }
})

function login()
{
    let username = document.querySelector("#username")
    let labelUsername = document.querySelector("#labelUsername")
    let password = document.querySelector("#password")
    let labelPassword = document.querySelector("#labelPassword")
    let msgError = document.querySelector("#msgError")
    let userList = []
    let validUser = {
        nameSign: "",
        username: "",
        password: ""
    }
    userList = JSON.parse(localStorage.getItem("userList"))
    //console.log(userList)
    userList.forEach((item) => {
        if(username.value == item.usernameSignUp && password.value == item.passwordSignUp)
        {
            validUser = {
                nameSign: item.nameSignUp,
                username: item.usernameSignUp,
                password: item.passwordSignUp
            }
        }
    });
    //console.log(validUser)
    if(username.value == validUser.username && password.value == validUser.password)
    {
        //alert("Logged in successfully")
        window.location.href = "../../index.html"
        let token = Math.random().toString(16).substring(2) + Math.random().toString(16).substring(2)
        //console.log(token) before substring
        localStorage.setItem("token", token) //localStorage aceita apenas strings
        localStorage.setItem("userLoggedIn", JSON.stringify(validUser))
    }
    else
    {
        labelUsername.setAttribute("style", "color: red");
        username.setAttribute("style", "border-color: red");
        labelPassword.setAttribute("style", "color: red");
        password.setAttribute("style", "border-color: red");
        msgError.setAttribute("style", "display: block");
        msgError.innerHTML = "<strong>Invalid username or password!</strong>";
        username.focus()
    }
}