

// PIDO A USUARIO QUE INGRESE CANTIDAD DE RONDAS QUE DESEA JUGAR
let rondas = +prompt("Ingresa el número de rondas que quieres jugar");

// A CONTINUACIÓN VAN DENTRO DE UN MISMO CICLO: LA SELECCIÓN DEL USUARIO, LA SELECCIÓN RANDOM  
// DE LA MÁQUINA, SE DEFINA UN RESULTADO Y QUE EL CICLO SE REPITA SEGÚN RONDAS ELEGIDAS HASTA TERMINAR AL 
// LLEGAR A 0


// ALERT EN CASO DE QUE INGRESE 0, O NO INGRESE NINGÚN VALOR EN RONDAS
if (rondas === "" || rondas === 0) {
    alert("Debes ingresar un número mayor a 0");
// EN CASO DE QUE HAYA INGRESADO UN NÚMERO VÁLIDO
} else {
// INICIO EN 0, ITERO MIENTRAS i SEA MENOR AL NÚMERO DE RONDAS SELECCIONADO POR USUARIO Y SUMO OTRA RONDA
    for (let i = 0; i < rondas; i++) {
// PIDO AL USUARIO QUE INGRESE SU JUGADA ESCRIBIÉNDOLA
        let jugadaU = prompt("Escribe tu jugada: piedra, papel o tijera").toLowerCase();
// DEFINO QUE LA JUGADA DE LA MÁQUINA ES EL RESULTADO DE RANDOM
        let jugadaM = random();
// ESTABLEZCO QUE EL RESULTADO ES LA SELECCIÓN DE JUGADOR Y LA SELECCIÓN DE LA MÁQUINA
        resultado(jugadaU, jugadaM);
    }
}
// CIERRO CICLO

// DEFINO FUNCIÓN RANDOM PARA QUE ME ENTREGUE NÚMEROS 1, 2 Y 3
function random() {
    return Math.ceil(Math.random() * 3);
}

// ASOCIO EL NÚMERO DE RANDOM A UNA JUGADA
function resultado(jugadaU, jugadaM) {
    let jugadaMR;
    if (jugadaM === 1) {
        jugadaMR = 'piedra';
    } else if (jugadaM === 2) {
        jugadaMR = 'papel';
    } else if (jugadaM === 3) {
        jugadaMR = 'tijera';
    }

// DEFINO LOS RESULTADOS SEGÚN JUGADA DE USUARIO VS JUGADA DE MÁQUINA RANDOM
    if (jugadaU === jugadaMR) {
        alert("Empate!");
    } else if (jugadaU === 'piedra') {
        if (jugadaM === 2) alert (`Perdiste! Elegiste ${jugadaU} y la máquina eligió papel`);
        if (jugadaM === 3) alert (`Ganaste! Elegiste ${jugadaU} y la máquina eligió tijera`);
    } else if (jugadaU === 'papel') {
        if (jugadaM === 1) alert (`Ganaste! Elegiste ${jugadaU} y la máquina eligió piedra`);
        if (jugadaM === 3) alert (`Perdiste! Elegiste ${jugadaU} y la máquina eligió tijera`);
    } else if (jugadaU === 'tijera') {
        if (jugadaM === 1) alert (`Perdiste! Elegiste ${jugadaU} y la máquina eligió piedra`);
        if (jugadaM === 2) alert (`Ganaste! Elegiste ${jugadaU} y la máquina eligió papel`);
    }
}

// PERDÓN TANTO COMENTARIO, PERO ME AYUDAN AL ORDEN Y ME SIRVEN PARA DESPUÉS :)