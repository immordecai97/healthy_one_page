document.getElementById('formulario-comentario').addEventListener('submit', function(event) {
    event.preventDefault();

    // Capturar los valores del formulario
    let name = document.getElementById('nombre').value;
    let email = document.getElementById('correo').value;
    let photo = document.getElementById('foto').files[0];
    let gender = document.getElementById('sexo').value;
    let comment = document.getElementById('comentario').value;

    // Validar la longitud del comentario
    const maxCommentLength = 100; // Establecer el máximo de caracteres permitidos
    if (comment.length > maxCommentLength) {
        alert("El comentario excede el límite de caracteres permitidos (" + maxCommentLength + " caracteres).");
        return; // Detener el envío del formulario
    }

    // Validar los saltos de línea en el comentario
    if (comment.includes("\n")) {
        alert("El comentario no puede contener saltos de línea.");
        return; // Detener el envío del formulario
    }

    // Crear el elemento de comentario
    let commentElement = document.createElement('div');
    commentElement.classList.add('comentario');

    // Agregar contenido al comentario
    commentElement.innerHTML = `
        <div title="${name}">
            <img src="${URL.createObjectURL(photo)}" alt="Foto de perfil de ${name}">
        </div>
        <div>
            <h3>${name}</h3>
            <p class = "email">${email}</p>
            <p class = "sexo">${gender}</p>
            <p> ${comment} </p>
        </div>
    `;

    // Agregar el comentario al contenedor
    let commentsContainer = document.getElementById('caja-comentarios');
    commentsContainer.appendChild(commentElement);

    // Restablecer el formulario
    document.getElementById('formulario-comentario').reset();
});

// Obtener el elemento del contador de caracteres
let contadorCaracteres = document.getElementById('contador-caracteres');

// Obtener el elemento del campo de comentario
let campoComentario = document.getElementById('comentario');

// Escuchar el evento de entrada en el campo de comentario
campoComentario.addEventListener('input', function() {
    let comment = campoComentario.value;
    const maxCommentLength = 100; // Establecer el máximo de caracteres permitidos
    let remainingCharacters = maxCommentLength - comment.length;
    contadorCaracteres.textContent = remainingCharacters;

    if (remainingCharacters === 0) {
        alert("Se ha alcanzado el máximo de caracteres para el comentario.");
        campoComentario.value = campoComentario.value.slice(0, maxCommentLength);
    }
});

// Escuchar el evento de pulsación de tecla en el campo de comentario
campoComentario.addEventListener('keydown', function(event) {
    if (event.key === "Enter") {
        alert("No se permiten saltos de línea en el comentario.");
        event.preventDefault();
    }
});
