//Iniciar el juego
alert("!Bienvenido, juguemos piedra, papel o tijera!")
alert("Elige un número")

let numUsuario = parseInt(prompt("Elije una opción: \n 0.Piedra. \n 1.Papel. \n 2.Tijera"));
let numEnemigo = Math.round(Math.random() * 2);

function solicitarNumero(){
    if (numUsuario === 0){
        alert("Elegiste piedra")
    } else if(numUsuario == 1){
        alert("Elegiste papel")
    } else if(numUsuario == 2){
        alert("Elegiste tijera")
    }
}
function numeroElegidoEnemigo() {
    if (numEnemigo === 0){
        alert("El enemigo eligió piedra")
    } else if(numEnemigo == 1){
        alert("El enemigo eligió papel")
    } else if(numEnemigo == 2){
        alert("El enemigo eligió tijera")
    }
}
function resultado() {
    if (numUsuario == numEnemigo){
        alert("EMPATE :!")
    } else if (numUsuario == 0 && numEnemigo == 2) {
        alert("!GANASTE! :)")
    } else if (numUsuario == 1 && numEnemigo == 0) {
         alert("!GANASTE! :)")
    } else if (numUsuario == 2 && numEnemigo == 1) {
         alert("!GANASTE! :)")
    } else {
         alert("!PERDISTE! La computadora es mas inteligente que tú :(")
    }
}
while (isNaN(numUsuario) || numUsuario < 0 || numUsuario > 2) {
    alert("¡Debes ingresar un número válido entre 0 y 2!");
    numUsuario = parseInt(prompt("Elige una opción:\n0. Piedra\n1. Papel\n2. Tijera"));
  }

solicitarNumero();
numeroElegidoEnemigo();
resultado();









