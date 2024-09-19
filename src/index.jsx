function confirmRegisterForm(){
    const screenName = document.getElementById("screen-name")
    const name = document.getElementById("user-name")
    const surname = document.getElementById("user-surname")
    const email = document.getElementById("user-email")
    const pass = document.getElementById("user-pass")
    const repPass = document.getElementById("user-repPass")
    if(
        name.value.trim() === "" ||
        surname.value.trim === "" ||
        email.value.trim === "" ||
        pass.value.trim() === "" ||
        repPass.value.trim() === ""
    ){
        console.log("Pasa por aca")
    }else {
        screenName.innerText = "Inicio"
        confirm("Tus datos no fueron guiardados ya que la consigna lo pedía.")
    }
    
}

function goToRegister(){
    const screenName = document.getElementById("screen-name")
    console.log("Va a la pantalla de registro")
    screenName.innerText = "Registro de usuario"
}
