let btn = document.querySelector("#seePass")
let btnConfirm = document.querySelector("#seeConfirm")
let nameSign = document.querySelector("#name")
let labelName = document.querySelector("#labelName")
let username = document.querySelector("#username")
let labelUsername = document.querySelector("#labelUsername")
let password = document.querySelector("#password")
let labelPassword = document.querySelector("#labelPassword")
let confirmPass = document.querySelector("#confirmPass")
let labelConfirmPass = document.querySelector("#labelConfirmPass")
let validName = false
let validUsername = false
let validPassword = false
let validConfirmPass = false

nameSign.addEventListener("keyup", () => {
    if(nameSign.value.length <= 2) 
    {
        labelName.setAttribute("style", "color: red")
        labelName.innerHTML = "Name *Input min of 3 characters"
        nameSign.setAttribute("style", "border-color: red")
        validName = false
    }
    else
    {
        labelName.setAttribute("style", "color: green")
        labelName.innerHTML = "Name"
        nameSign.setAttribute("style", "border-color: green")
        validName = true
    }
})

username.addEventListener("keyup", () => {
    if(username.value.length <= 5) 
    {
        labelUsername.setAttribute("style", "color: red")
        labelUsername.innerHTML = "Username *Input min of 5 characters"
        username.setAttribute("style", "border-color: red")
        validUsername = false
    }
    else
    {
        labelUsername.setAttribute("style", "color: green")
        labelUsername.innerHTML = "Username"
        username.setAttribute("style", "border-color: green")
        validUsername = true
    }
})

password.addEventListener("keyup", () => {
    if(password.value.length <= 6) 
    {
        labelPassword.setAttribute("style", "color: red")
        labelPassword.innerHTML = "Password *Input min of 6 characters"
        password.setAttribute("style", "border-color: red")
        validPassword = false
    }
    else
    {
        labelPassword.setAttribute("style", "color: green")
        labelPassword.innerHTML = "Password"
        password.setAttribute("style", "border-color: green")
        validPassword = true
    }
})

confirmPass.addEventListener("keyup", () => {
    if(password.value != confirmPass.value) 
    {
        labelConfirmPass.setAttribute("style", "color: red")
        labelConfirmPass.innerHTML = "Confirm Password *Input is different from Password field"
        confirmPass.setAttribute("style", "border-color: red")
        validConfirmPass = false
    }
    else
    {
        labelConfirmPass.setAttribute("style", "color: green")
        labelConfirmPass.innerHTML = "Confirm Password"
        confirmPass.setAttribute("style", "border-color: green")
        validConfirmPass = true
    }
})

function signup()
{
    //alert("Button Clicked")
    if(validName && validUsername && validPassword && validConfirmPass)
    {
        alert("Succesfully signed up!")
    }
    else
    {
        alert("Some field is empty or incorrect")
    }
}

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

btnConfirm.addEventListener("click", ()=>{
    let inputConfirm = document.querySelector("#confirmPass")
    if(inputConfirm.getAttribute("type") == "password")
    {
        inputConfirm.setAttribute("type", "text")
    }
    else
    {
        inputConfirm.setAttribute("type", "password")
    }
})