document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que el formulario se envíe antes de las validaciones

    // Obtiene los valores del formulario de registro
    var email = document.getElementById("inputEmail").value;
    var password = document.getElementById("inputContrasena").value;
    var confirmPassword = document.getElementById("inputConfirmarContrasena").value;
    var direccion = document.getElementById("inputDireccion").value;
    var region = document.getElementById("selectRegion").value;
    var ciudad = document.getElementById("inputCiudad").value;
    var termsAccepted = document.getElementById("gridCheck").checked;

    // Verifica si algún campo del formulario está vacío
    if (!email || !password || !confirmPassword || !direccion || !region || !ciudad || !termsAccepted) {
        alert("Por favor, completa todos los campos del formulario");
        return; // Detiene la ejecución del script si algún campo está vacío
    }

    // Expresión regular para validar la contraseña: al menos 8 caracteres, una letra minúscula, una letra mayúscula y un número
    var passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

    // Verifica si la contraseña cumple con los criterios
    if (!passwordRegex.test(password)) {
        alert("La contraseña debe contener al menos 8 caracteres, una letra minúscula, una letra mayúscula y un número");
        return;
    }

    // Verifica si la contraseña coincide con la confirmación de contraseña
    if (password !== confirmPassword) {
        alert("La contraseña y la confirmación de contraseña no coinciden");
        return; // Detiene la ejecución del script si las contraseñas no coinciden
    }

    // Expresión regular para validar el formato de la dirección: texto seguido de números (por ejemplo: "Gabriela Mistral 833")
    var direccionRegex = /^[a-zA-Z\s]+\d+$/;

    // Verifica si la dirección cumple con el formato
    if (!direccionRegex.test(direccion)) {
        alert("El formato de la dirección es inválido. Debe ser texto seguido de números (por ejemplo: 'Gabriela Mistral 833')");
        return;
    }

    // Verifica si se han aceptado los términos y condiciones
    if (!termsAccepted) {
        alert("Debes aceptar los términos y condiciones para registrarte");
        return; 
    }

    alert("Registro exitoso");

     

   
    window.location.href = "Registroexitoso.html";
});
