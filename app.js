// Función para validar la entrada
function validarEntrada() {
    const textoEntrada = document.getElementById("textoEntrada").value;
    const regex = /^[a-z\s]*$/; // Solo letras minúsculas y espacios

    if (!regex.test(textoEntrada)) {
        alert("Por favor, ingresa solo letras minúsculas sin acentos.");
        document.getElementById("textoEntrada").value = textoEntrada.replace(/[^a-z\s]/g, ""); // Elimina caracteres no permitidos
    }

    // Habilita o deshabilita los botones en función de si hay texto en la entrada
    const botonesHabilitados = document.getElementById("textoEntrada").value.length > 0;
    document.getElementById("botonEncriptar").disabled = !botonesHabilitados;
    document.getElementById("botonDesencriptar").disabled = !botonesHabilitados;
}



// Función para encriptar el texto
function encriptarTexto() {
    let texto = document.getElementById("textoEntrada").value;
    let textoEncriptado = texto.replace(/e/g, "enter").replace(/i/g, "imes")
                               .replace(/a/g, "ai").replace(/o/g, "ober")
                               .replace(/u/g, "ufat");

    mostrarResultado(textoEncriptado);
}

// Función para desencriptar el texto
function desencriptarTexto() {
    let texto = document.getElementById("textoEntrada").value;
    let textoDesencriptado = texto.replace(/ai/g, "a").replace(/enter/g, "e")
                                  .replace(/imes/g, "i").replace(/ober/g, "o")
                                  .replace(/ufat/g, "u");

    mostrarResultado(textoDesencriptado);
}

// Función para mostrar el resultado en la salida
function mostrarResultado(texto) {
    document.getElementById('botonCopiar').removeAttribute('style');
    const contenedorSalida = document.getElementById("contenedorSalida");
    const mensajeSalida = document.getElementById("mensajeSalida");

    // Borra cualquier resultado previo
    const resultadoPrevio = document.querySelector(".texto__resultado");
    if (resultadoPrevio) {
        resultadoPrevio.remove();
    }

    // Esconde la imagen y el mensaje inicial
    mensajeSalida.style.display = "none";

    // Muestra el texto encriptado/desencriptado
    const textoSalida = document.createElement("p");
    textoSalida.textContent = texto;
    textoSalida.className = "texto__resultado";
    contenedorSalida.appendChild(textoSalida);

    // Habilita el botón de copiar
    document.getElementById("botonCopiar").disabled = false;
}

// Función para copiar el texto al portapapeles
function copiarTexto() {
    const textoSalida = document.querySelector(".texto__resultado").textContent;
    navigator.clipboard.writeText(textoSalida)
        .then(() => alert("Texto copiado al portapapeles"))
        .catch(() => alert("Error al copiar el texto"));
}

