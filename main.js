let playing = true
let click = new Audio("http://sonidosmp3gratis.com/sounds/Computer_Mouse_Click_01_Sound_Effect_Mp3_339.mp3");
let wee = new Audio("http://sonidosmp3gratis.com/sounds/mario-bros-woo-hoo.mp3");
let fallo = new Audio("http://sonidosmp3gratis.com/sounds/error-fallo-1.mp3");
let boing = new Audio("http://sonidosmp3gratis.com/sounds/cartoon069.mp3");

const botonImg = document.querySelectorAll(".btnImg");
botonImg.forEach(element=>{
element.addEventListener("click", ejecutar);
});

function ganaste(){
    playing = false;
    wee.pause();
    wee.currentTime = 0; 
    wee.play();
}

function perdiste(){
    playing = false;
    fallo.pause();
    fallo.currentTime = 0; 
    fallo.play();
}

function empate(){
    playing = false;
    boing.pause();
    boing.currentTime = 0; 
    boing.play();
}

function ejecutar(){
    click.play();
    document.getElementById("texto").innerHTML="¡Piedra, papel o tijera!";
    document.getElementById("imagenPl").src = "img/PPT.png";
    document.getElementById("imagenPc").src = "img/PPT.png";
    let inputPPT=this.id;
    setTimeout(alPPT, 1100, inputPPT);
}

function alPPT(inputPPT){
    let player1=Math.floor(Math.random()*3)+1;
    let player2 = 0
    switch(inputPPT){
        case "imagen1":
            document.getElementById("imagenPl").src = "img/Piedra.png";
            player2 = 1;
            break;
        case "imagen2":
            document.getElementById("imagenPl").src = "img/Papel.png";
            player2 = 2;
            break;
        case "imagen3":
            document.getElementById("imagenPl").src = "img/Tijera.png";
            player2 = 3;
            break;
    }

    switch(player1){
        case 1:
            document.getElementById("imagenPc").src = "img/Piedra.png";                
            break;
        case 2:
            document.getElementById("imagenPc").src = "img/Papel.png";
        break;
        case 3:
            document.getElementById("imagenPc").src = "img/Tijera.png";
        break;
    }
    let resultado="";
    if(player1 == player2){
        resultado="EMPATADOS";
        empate();     
    }else{
        if(player1 == 1){
            if(player2 == 2){
                resultado = "GANASTE";
                ganaste();
            }else{
                resultado = "PERDISTE";
                perdiste();
            }
        }
        if(player1==2){
            if(player2==1){
                resultado = "PERDISTE";
                perdiste();
            }else{
                resultado = "GANASTE";
                ganaste();
            }
        }
        if(player1==3){
            if(player2 == 1){
                resultado = "GANASTE";
                ganaste();
            }else{
                resultado = "PERDISTE";
                perdiste();
            }
        }
    }
    document.getElementById("texto").innerHTML=resultado;
}