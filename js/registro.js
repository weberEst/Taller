$(document).ready(function() {
    // Capturamos el evento de envío del formulario
    $('#loginForm').submit(function(event) {
        // Evitamos que el formulario se envíe automáticamente
        event.preventDefault();
        
        // Obtenemos los valores de los campos del formulario
        var email = $('#inputEmail').val();
        var password = $('#inputContrasena').val();
        var confirmPassword = $('#inputConfirmarContrasena').val();
        var direccion = $('#inputDireccion').val();
        var region = $('#selectRegion').val();
        var ciudad = $('#inputCiudad').val();
        var termsAccepted = $('#gridCheck').prop('checked');

        // Creamos un objeto con los datos del formulario
        var formData = {
            email: email,
            password: password,
            confirmPassword: confirmPassword,
            direccion: direccion,
            region: region,
            ciudad: ciudad,
            termsAccepted: termsAccepted
        };

        // Verificamos si todos los campos están completos
        if (!email || !password || !confirmPassword || !direccion || !region || !ciudad || !termsAccepted) {
            alert("Por favor, completa todos los campos del formulario");
            return;
        }

         // validaciones
        var passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

        if (!passwordRegex.test(password)) {
            alert("La contraseña debe contener al menos 8 caracteres, una letra minúscula, una letra mayúscula y un número");
            return;
        }

        if (password !== confirmPassword) {
            alert("La contraseña y la confirmación de contraseña no coinciden");
            return;
        }

        var direccionRegex = /^[a-zA-Z\s]+\d+$/;

        if (!direccionRegex.test(direccion)) {
            alert("El formato de la dirección es inválido. Debe ser texto seguido de números (por ejemplo: 'Gabriela Mistral 833')");
            return;
        }

        if (!termsAccepted) {
            alert("Debes aceptar los términos y condiciones para registrarte");
            return;
        }

        // Si todas las validaciones pasan, mostramos un mensaje de registro exitoso
        alert("¡Registro exitoso! Gracias por registrarte.");

    });
});
