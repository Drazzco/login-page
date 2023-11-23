let btn = document.querySelector("#seePass")

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

let btnConfirm = document.querySelector("#seeConfirm")

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