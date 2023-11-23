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