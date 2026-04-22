// 1. Obtener referencias a los elementos usando querySelector
const inputMensaje = document.querySelector("#mensajeInput");
const botonEnviar = document.querySelector("#btnEnviar");
const contenedor = document.querySelector("#contenedorMensajes");

// 2. Asociar evento al botón con función flecha
botonEnviar.addEventListener("click", () => {
  
  // 3. Validar que el campo no esté vacío o con solo espacios
  const texto = inputMensaje.value.trim();
  
  if (texto.length === 0) {
    alert("El campo no puede estar vacío. Por favor escribe un mensaje.");
    return; // Detener ejecución si está vacío
  }
  
  // 4. Crear un nuevo elemento
  const nuevoMensaje = document.createElement("p");
  
  // 5. Agregar contenido al elemento
  nuevoMensaje.textContent = texto;
  
  // 6. Insertar el nuevo elemento en la página
  contenedor.appendChild(nuevoMensaje);
  
  // 7. Limpiar el campo de texto
  inputMensaje.value = "";
});
