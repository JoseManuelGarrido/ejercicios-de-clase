function puntosColores(puntosJuego){
    if(puntosJuego > 0){
        document.getElementById("puntos-juego").textContent = puntosJuego;
        document.getElementById("puntos-juego").style.color = "green";
    }
    else if(puntosJuego < 0){
        document.getElementById("puntos-juego").textContent = puntosJuego;
        document.getElementById("puntos-juego").style.color = "red";
    }
    else{
        document.getElementById("puntos-juego").textContent = puntosJuego;
        document.getElementById("puntos-juego").style.color = "yellow";
    }
}

function puntuacionJugador(puntosJuego){
    if(puntosJuego == "muerte"){
        puntosJugador = -500;
    }
    else{
        puntosJugador += puntosJuego;
    }
}

function puntuacionMaquina(puntosJuego){
    if(puntosJuego == "muerte"){
        puntosMaquina = -500;
    }
    else{
        puntosMaquina += puntosJuego;
    }
}

function colorJugador(puntosJugador){
    if(puntosJugador > 0){
        document.getElementById("puntos-jugador").style.color = "green";
    }
    else if(puntosJugador < 0){
        document.getElementById("puntos-jugador").style.color = "red";
    }
    else{
        document.getElementById("puntos-jugador").style.color = "white";
    }
}

function colorMaquina(puntosMaquina){
    if(puntosMaquina > 0){
        document.getElementById("puntos-maquina").style.color = "green";
    }
    else if(puntosMaquina < 0){
        document.getElementById("puntos-maquina").style.color = "red";
    }
    else{
        document.getElementById("puntos-maquina").style.color = "white";
    }
}

function comparacion(jugador){
    const resultado = document.getElementById('parrafo');
    var maquina = Math.floor(Math.random()*3);
    var opciones = ["piedra", "papel", "tijeras"];
    

    if(maquina == 0){
        maquina = opciones[0];
        choiceMachine.textContent = opciones[0];
        document.getElementById("maquina").innerHTML = '<img src="piedra.png" width="160px" border-radius="60px">';
    }
    else if(maquina == 1){
        maquina = opciones[1];
        choiceMachine.textContent = opciones[1];
        document.getElementById("maquina").innerHTML = '<img src="papel.png" width="160px" border-radius="60px">';
    }
    else{
        maquina = opciones[2];
        choiceMachine.textContent = opciones[2];
        document.getElementById("maquina").innerHTML = '<img src="tijeras.png" width="160px" border-radius="60px">';
    }

    //COMPARAMOS ELECCION JUGADOR CON ELECCION MAQUINA
    if(jugador == maquina){
        resultado.textContent = "Empate";
        empates++;
    }
    else if(jugador == "piedra" && maquina == "papel"){
        resultado.textContent = "Gana la máquina";
        victoriasMaquina++;
        document.getElementById("victorias-maquina").textContent = victoriasMaquina;
        puntuacionMaquina(puntosJuego);
        document.getElementById("puntos-maquina").textContent = puntosMaquina;
        colorMaquina(puntosMaquina);
    }
    else if(jugador == "piedra" && maquina == "tijeras"){
        resultado.textContent = "Gana el jugador";
        victoriasJugador++;
        document.getElementById("victorias-jugador").textContent = victoriasJugador;
        puntuacionJugador(puntosJuego);
        document.getElementById("puntos-jugador").textContent = puntosJugador;
        colorJugador(puntosJugador);
    }
    else if(jugador == "papel" && maquina == "piedra"){
        resultado.textContent = "Gana el jugador";
        victoriasJugador++;
        document.getElementById("victorias-jugador").textContent = victoriasJugador;
        puntuacionJugador(puntosJuego);
        document.getElementById("puntos-jugador").textContent = puntosJugador;
        colorJugador(puntosJugador);
    }
    else if(jugador == "papel" && maquina == "tijeras"){
        resultado.textContent = "Gana la máquina";
        victoriasMaquina++;
        document.getElementById("victorias-maquina").textContent = victoriasMaquina;
        puntuacionMaquina(puntosJuego);
        document.getElementById("puntos-maquina").textContent = puntosMaquina;
        colorMaquina(puntosMaquina);
    }
    else if(jugador == "tijeras" && maquina == "piedra"){
        resultado.textContent = "Gana la máquina";
        victoriasMaquina++;
        document.getElementById("victorias-maquina").textContent = victoriasMaquina;
        puntuacionMaquina(puntosJuego);
        document.getElementById("puntos-maquina").textContent = puntosMaquina;
        colorMaquina(puntosMaquina);
    }
    else{
        resultado.textContent = "Gana el jugador";
        victoriasJugador++;
        document.getElementById("victorias-jugador").textContent = victoriasJugador;
        puntuacionJugador(puntosJuego);
        document.getElementById("puntos-jugador").textContent = puntosJugador;
        colorJugador(puntosJugador);
    }

}

const botonPiedra = document.querySelector('.boton-piedra');
const botonPapel = document.querySelector('.boton-papel');
const botonTijeras = document.querySelector('.boton-tijeras');
const eleccion = document.getElementById("jugador");
const choiceMachine = document.getElementById("maquina");
const puntos = [-10, 10, 50, 10, -20, 20, 10, 100, -50, -10, 10, 10, 250, 10, -20, -10, 20, 50, 10, 10, 
                20, -200, 10, 500, "muerte", 1000, -100, -10, -20, -50, 10, -200, 250, 20, 20, 10, 50, 
                -10, -20, 50, -20, 20, -50, 100, 10, -10, 50, 20, -100];
var victoriasJugador = 0;
var victoriasMaquina = 0;
var puntosJugador = 0;
var puntosMaquina = 0;
var puntosAleatorios = Math.floor(Math.random()*puntos.length-1);
var puntosJuego = puntos[puntosAleatorios];
var empates = 0;
var jugador = "";

puntosColores(puntosJuego);

botonPiedra.addEventListener('click', () =>{
    console.log("pulsaste piedra");
    eleccion.textContent = "piedra";
    jugador = "piedra";
    document.getElementById("jugador").innerHTML = '<img src="piedra.png" width="160px" border-radius="60px">';
    comparacion(jugador);

    puntosAleatorios = Math.floor(Math.random()*puntos.length-1);
    puntosJuego = puntos[puntosAleatorios];
    puntosColores(puntosJuego);
});

botonPapel.addEventListener('click', function(){
    console.log("pulsaste papel");
    eleccion.textContent = "papel";
    jugador = "papel";
    document.getElementById("jugador").innerHTML = '<img src="papel.png" width="160px" border-radius="60px">';
    comparacion(jugador);

    puntosAleatorios = Math.floor(Math.random()*puntos.length-1);
    puntosJuego = puntos[puntosAleatorios];
    puntosColores(puntosJuego);
});

botonTijeras.addEventListener('click', () => {
    console.log("pulsaste tijeras");
    eleccion.textContent = "tijeras";
    jugador = "tijeras";
    document.getElementById("jugador").innerHTML = '<img src="tijeras.png" width="160px" border-radius="60px">';
    comparacion(jugador);

    puntosAleatorios = Math.floor(Math.random()*puntos.length-1);
    puntosJuego = puntos[puntosAleatorios];
    puntosColores(puntosJuego);
});