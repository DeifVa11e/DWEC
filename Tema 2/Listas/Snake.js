// 1. Clase Nodo, cada uno representa un segmento
class Nodo {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.siguiente = siguiente;
    }
}

// 2. Lista enlazada, la cabeza es el primer nodo, la cola el último
class ListaEnlazada {
    constructor() {
        this.cabeza = null; // Apunta al primer elemento
        this.cola = null; // Apunta al último elemento
        this.longitud = 0; // Cuenta longitud de la serpiente
    }

    // Inserta un nuevo nodo con las coordenadas (x, y) al principio de la lista
    insertarCabeza(x, y) {
        const nuevo = new Nodo(x, y); // 1. Crea el nuevo nodo
        
        if (this.cabeza === null) {
            // 2a. Si la lista está vacia, el nuevo nodo es tanto la cabeza como la cola
            this.cabeza = nuevo;
            this.cola  = nuevo;
        } else {
            // 2b. Si ya hay elementos, el nuevo nodo apunta a la antigua cabeza y la cabeza anterior pasa a ser este nuevo nodo
            nuevo.siguiente = this.cabeza;
            this.cabeza = nuevo;
        }

        this.longitud++; // 3. Incrementa tamaño de la lista
    }

    // Elimina el último nodo
    eliminarCOla() {
        if (this.cabeza === null) return;

        // Si solo existe un nodo, la lista queda completamente vacía
        if (this.cabeza === this.cola) {
            this.cabeza = null;
            this.cola = null;
        } else {
            let actual = this.cabeza;

            while (actual.siguiente !== this.cola) {
                actual = actual.siguiente;
            }

            // Desconectar el último nodo y actualizar la nueva cola
            actual.siguiente = null;
            this.cola = actual;
        }

        // Reducir el contador de tamaño
        this.longitud--;
    }

    // Comprobar si una posición (x, y) ya está ocupada por la serpiente
    contiene(x, y, ignorarCola = false) {
        let actual = this.cabeza;

        while (actual !== null) {
            // Si ignorarCola es true y estamos en la cola, no la contamos como obstáculo
            if (
                !(ignorarCola && actual === this.cola) &&
                actual.x === x &&
                actual.y === y
            ) {
                return true; // ¡Colisión detectada!
            }

            actual = actual.siguiente;
        }

        return false; // Posición libre
    }

    // Vaciar completamente la lista (reiniciar la serpiente)
    vaciar() {
        this.cabeza = null;
        this.cola = null;
        this.longitud = 0;
    }
}

// 3. CONFIGURACIÓN DEL TABLERO
const canvas = document.getElementById("tablero");
const ctx = canvas.getContext("2d");

const CELDA = 20;
const COLUMNAS = canvas.width / CELDA;
const FILAS = canvas.height / CELDA;

const elementoPuntuacion = document.getElementById("puntuacion");
const elementoRecord = document.getElementById("record");
const mensaje = document.getElementById("mensaje");
const botonReiniciar = document.getElementById("reiniciar");

let serpiente;
let manzana;
let direccion;
let siguienteDireccion;
let puntuacion = 0;
let record = Number(localStorage.getItem("snakeRecord")) || 0;

let estado = "inicio";
// Estados: inicio, jugando, pausa, terminado

elementoRecord.textContent = record;

// 4. INICIALIZAR LA PARTIDA
function iniciarJuego() {
    serpiente = new ListaEnlazada();

    // Insertar desde cabeza hasta cola
    serpiente.insertarCabeza(13, 15);
    serpiente.insertarCabeza(14, 15);
    serpiente.insertarCabeza(15, 15); // Cabeza

    // El cuerpo queda a su izquierda
    direccion = { x: 1, y: 0 };
    siguienteDireccion = { x: 1, y: 0 };

    puntuacion = 0;
    elementoPuntuacion.textContent = puntuacion;

    crearManzana();

    estado = "jugando";
    mensaje.classList.add("oculto");

    dibujar();
}

// 5. GENERAR LA MANZANA
function crearManzana() {
    let x;
    let y;

    do {
        x = Math.floor(Math.random() * COLUMNAS);
        y = Math.floor(Math.random() * FILAS);
    } while (serpiente.contiene(x, y));

    manzana = { x, y };
}

// 6. ACTUALIZAR EL JUEGO
function actualizar() {
    if (estado !== "jugando") {
        return;
    }

    direccion = siguienteDireccion;

    const cabeza = serpiente.cabeza;

    const nuevaX = cabeza.x + direccion.x;
    const nuevaY = cabeza.y + direccion.y;

    const comeManzana =
        nuevaX === manzana.x && nuevaY === manzana.y;

    // Comprobar los límites del tablero.
    if (
        nuevaX < 0 ||
        nuevaX >= COLUMNAS ||
        nuevaY < 0 ||
        nuevaY >= FILAS
    ) {
        terminarJuego();
        return;
    }

    // Si no come, la cola abandona su posición.
    // Por eso se puede ignorar la cola al comprobar
    // si la nueva cabeza choca con el cuerpo.
    if (serpiente.contiene(nuevaX, nuevaY, !comeManzana)) {
        terminarJuego();
        return;
    }

    // Añadir la nueva cabeza.
    serpiente.insertarCabeza(nuevaX, nuevaY);

    if (comeManzana) {
        puntuacion += 10;
        elementoPuntuacion.textContent = puntuacion;

        if (puntuacion > record) {
            record = puntuacion;
            elementoRecord.textContent = record;
            localStorage.setItem("snakeRecord", record);
        }

        crearManzana();
    } else {
        // Si no come, mantiene la misma longitud.
        serpiente.eliminarCola();
    }

    dibujar();
}

// 7. DIBUJAR EL TABLERO
function dibujar() {
    // Fondo.
    ctx.fillStyle = "#18252e";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Cuadrícula.
    ctx.strokeStyle = "#24343d";
    ctx.lineWidth = 1;

    for (let x = 0; x <= canvas.width; x += CELDA) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
    }

    for (let y = 0; y <= canvas.height; y += CELDA) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
    }

    // Manzana.
    ctx.fillStyle = "#ff4b5c";
    ctx.beginPath();
    ctx.arc(
        manzana.x * CELDA + CELDA / 2,
        manzana.y * CELDA + CELDA / 2,
        CELDA / 2 - 3,
        0,
        Math.PI * 2
    );
    ctx.fill();

    // Dibujar la serpiente recorriendo
    // la lista enlazada nodo por nodo.
    let actual = serpiente.cabeza;
    let esCabeza = true;

    while (actual !== null) {
        ctx.fillStyle = esCabeza ? "#a4ff70" : "#62e879";

        ctx.fillRect(
            actual.x * CELDA + 1,
            actual.y * CELDA + 1,
            CELDA - 2,
            CELDA - 2
        );

        esCabeza = false;
        actual = actual.siguiente;
    }
}

// 8. CONTROLES DEL TECLADO
document.addEventListener("keydown", function (evento) {
    const tecla = evento.key.toLowerCase();

    const teclasJuego = [
        "arrowup", "arrowdown", "arrowleft", "arrowright",
        "w", "a", "s", "d", " "
    ];

    if (teclasJuego.includes(tecla)) {
        evento.preventDefault();
    }

    if (tecla === " ") {
        if (estado === "jugando") {
            estado = "pausa";
            mostrarMensaje("Juego pausado", "Pulsa espacio para continuar");
        } else if (estado === "pausa") {
            estado = "jugando";
            mensaje.classList.add("oculto");
        } else if (estado === "inicio" || estado === "terminado") {
            iniciarJuego();
        }

        return;
    }

    if (estado !== "jugando") {
        return;
    }

    let nuevaDireccion = null;

    switch (tecla) {
        case "arrowup":
        case "w":
            nuevaDireccion = { x: 0, y: -1 };
            break;

        case "arrowdown":
        case "s":
            nuevaDireccion = { x: 0, y: 1 };
            break;

        case "arrowleft":
        case "a":
            nuevaDireccion = { x: -1, y: 0 };
            break;

        case "arrowright":
        case "d":
            nuevaDireccion = { x: 1, y: 0 };
            break;
    }

    if (nuevaDireccion === null) {
        return;
    }

    // Impedir girar directamente en sentido contrario.
    if (
        nuevaDireccion.x === -direccion.x &&
        nuevaDireccion.y === -direccion.y
    ) {
        return;
    }

    siguienteDireccion = nuevaDireccion;
});

// 9. FINALIZAR LA PARTIDA
function terminarJuego() {
    estado = "terminado";

    mostrarMensaje(
        "¡Game Over!",
        "Puntuación final: " + puntuacion
    );
}

function mostrarMensaje(titulo, texto) {
    mensaje.innerHTML = `
        <h2>${titulo}</h2>
        <p>${texto}</p>
    `;

    mensaje.classList.remove("oculto");
}

// 10. BOTÓN DE NUEVA PARTIDA
botonReiniciar.addEventListener("click", iniciarJuego);

// Mostrar el tablero al cargar la página.
serpiente = new ListaEnlazada();
serpiente.insertarCabeza(15, 15);
serpiente.insertarCabeza(14, 15);
serpiente.insertarCabeza(13, 15);

direccion = { x: 1, y: 0 };
siguienteDireccion = { x: 1, y: 0 };

manzana = { x: 20, y: 15 };

dibujar();

// Actualizar el juego cada 120 milisegundos.
setInterval(actualizar, 120);