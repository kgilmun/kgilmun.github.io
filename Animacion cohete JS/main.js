// OBTENIENDO LOS ELEMENTOS DEL HTML:

const cohete = document.getElementById("cohete");

const fondoMain = document.getElementById("main");

const texto = document.getElementById("lore");

const modal = document.getElementById("container-modal");

// ARRAY CREADO PARA LA INTRODUCCION DE LA MISIÓN:

const introduccion = "LA MISIÓN ESPACIAL HA COMENZADO!!: Lanzar el cohete hacia la luna. Si quieres ver su destino, intenta clickear encima de él. Mucho ánimo!";

// OBTENIENDO IMAGENES:

const coheteDespega = "img/cohete-despega-200px.png"



// FUNCIONES:

// cambia la imagen del cohete

function cambiarImagen() { 
    cohete.src = coheteDespega;
    despegar();
}



// hace que la animación se ponga en marcha

function despegar() { 
    cohete.style.animationPlayState = "running";
}



// parar animación:

function parar() { 
    cohete.style.animationPlayState = "paused";
    cambioPagina();
}



// muestra por pantalla lo que hay en el array
let i = 0;
function textoArray() { 
    texto.innerHTML += introduccion[i];
    i++;
    if (i < introduccion.length) {
        textoIntroduccion();
    }
        
}

function textoIntroduccion() {
    setTimeout(textoArray, 55);
}



// cierra la ventana modal

function cerrar() {
    modal.style.display = "none";
}



// deberia cambiar de pagina

function cambioPagina() {
    window.open("luna.html");
    
}


function ventanaModal() {
    modal.style.display = "flex";
    modal.style.justifyContent = "center";
    modal.style.alignItems = "center";
}

setTimeout(ventanaModal, 600);

//---------------------------------------------------------------------

const mision = document.getElementById("mision");

const mensaje = "Has completado la misión, buen trabajo!!";

let j = 0;


function message () {
    
    mision.innerHTML += mensaje[j];
    j++

    if (j < mensaje.length) {
        misionCumplida();
    }

}

function misionCumplida () {
    setTimeout(message, 60);
}

setTimeout(misionCumplida, 500);