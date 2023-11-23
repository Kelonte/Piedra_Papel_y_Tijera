const botonImg = document.querySelectorAll(".btnImg");
botonImg.forEach(element=>{
element.addEventListener("click", ejecutar);
});

function ejecutar(){
    document.getElementById("texto").innerHTML="¡Piedra, papel o tijera!";
    document.getElementById("imagenPl").src = "";
    document.getElementById("imagenPc").src = "";
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
    }else{
        if(player1 == 1){
            if(player2 == 2){
                resultado = "GANASTE";
            }else{
                resultado = "PERDISTE";
            }
        }
        if(player1==2){
            if(player2==1){
                resultado = "PERDISTE";
            }else{
                resultado = "GANASTE";
            }
        }
        if(player1==3){
            if(player2 == 1){
                resultado = "GANASTE";
            }else{
                resultado = "PERDISTE";
            }
        }
    }
    document.getElementById("texto").innerHTML=resultado;
}