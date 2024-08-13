

const buttonSaludar = document.getElementById("saludar")
const greenDiv = document.getElementById("greenDiv")


greenDiv.addEventListener("click", divMessage);

buttonSaludar.addEventListener("click", (event) => {
    event.stopPropagation();
    buttonMessage()
    });

function divMessage() {
    alert("Hola! Soy el div")
}

function buttonMessage() {
    alert("Hola! Soy el botón")
}













/*
function message1() {
    const buttonClicked = true;
    if (divEnabled===true){
        greenDiv.removeEventListener("click",message2);
        const divEnabled= false
        alert("Hola! Soy el botón");   
    }
    else{
        alert("Hola! Soy el botón");
    }
    if (buttonClicked===true){
        greenDiv.addEventListener("click",message2)
    }
}

function message2() {
    if (divEnabled===true){
        alert("Hola! Soy el div")
    }
    else{
        alert("Hola! Soy el div")
        enableDiv()
    }
}

function enableDiv(){
    const divEnabled = true;
}
 */


