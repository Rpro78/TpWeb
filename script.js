document.addEventListener("DOMContentLoaded", function() {
    // Array para almacenar los comentarios (en localStorage si hay comentarios previos)
    const comentarios = JSON.parse(localStorage.getItem("comentarios")) || [];

    // Referencias a los elementos del DOM
    const formComentario = document.getElementById("formComentario");
    const comentarioInput = document.getElementById("comentarioInput");
    const listaComentarios = document.getElementById("listaComentarios");

    // Función para mostrar los comentarios en la página
    function mostrarComentarios() {
        listaComentarios.innerHTML = ""; // Limpiar lista antes de agregar nuevos comentarios
        comentarios.forEach((comentario) => {
            const li = document.createElement("li");
            li.textContent = comentario; // Coloca el texto del comentario
            listaComentarios.appendChild(li); // Agrega el comentario a la lista
        });
    }

    // Mostrar los comentarios guardados cuando se carga la página
    mostrarComentarios();

    // Evento para agregar un comentario
    formComentario.addEventListener("submit", function(e) {
        e.preventDefault(); // Evita que la página se recargue al enviar el formulario

        const nuevoComentario = comentarioInput.value.trim(); // Recoger el comentario del input

        if (nuevoComentario) {
            comentarios.push(nuevoComentario); // Agregar el comentario al array
            localStorage.setItem("comentarios", JSON.stringify(comentarios)); // Guardar el array actualizado en localStorage
            mostrarComentarios(); // Actualizar la lista de comentarios en la página
            comentarioInput.value = ""; // Limpiar el campo de texto
        }
    });
});
