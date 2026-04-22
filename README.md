# ApropiacionDOM

1. ¿Qué elemento del DOM estás seleccionando?
Los elementos del DOM que estoy seleccionando son:
•	Campo de texto (#mensajeInput): Permite al usuario escribir el mensaje que desea registrar.
•	Botón (#btnEnviar): Se asocia a un evento de clic que desencadena la validación y creación del nuevo mensaje.
•	Contenedor de mensajes (#contenedorMensajes): Es el espacio dentro de la página donde se insertan y muestran los mensajes ingresados por el usuario.


2. ¿Qué evento provoca el cambio en la página?
El cambio en la página se produce cuando ocurre el evento de clic sobre el botón identificado como #btnEnviar.
Ese evento (click) es el que dispara la función en JavaScript que:
Valida el contenido del campo de texto.
Crea un nuevo elemento <p>.
Inserta ese elemento dentro del contenedor de mensajes.

3. ¿Qué nuevo elemento se crea?
El nuevo elemento que se crea en la página es un párrafo (<p>).
Cada vez que el usuario hace clic en el botón, el código JavaScript ejecuta document.createElement("p"), lo que genera un nodo de tipo párrafo dentro del DOM. A ese párrafo se le asigna el texto ingresado por el usuario y luego se inserta en el contenedor de mensajes para mostrarse en pantalla.

4. ¿Dónde se inserta ese elemento dentro del DOM?
El nuevo elemento creado, que corresponde a un párrafo <p>, se inserta dentro del contenedor de mensajes identificado con el id #contenedorMensajes. Esto se logra mediante la instrucción contenedor.appendChild(nuevoMensaje), la cual agrega el párrafo como hijo directo del contenedor.

5. ¿Qué ocurre en la página cada vez que repites la acción?
Cada vez que el usuario repite la acción de hacer clic en el botón Enviar, la página crea un nuevo elemento de tipo párrafo <p> y lo inserta dentro del contenedor de mensajes. Como resultado, el DOM se modifica dinámicamente y se agrega un mensaje adicional al listado existente.
Esto significa que, con cada interacción, el espacio destinado a los mensajes se va llenando con nuevos párrafos que reflejan las entradas del usuario, sin necesidad de recargar la página.