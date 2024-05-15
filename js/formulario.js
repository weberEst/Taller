 // Se implementaron 2 cuentas de  emailJS para enviar los correos de verificacion, la primera cuenta(martin) envia un correo al cliente, verificando el contacto con los servicios de Natzi, y la
 // segunda cuenta envia un correo al admin con la informacion de la solicitud(el formulario de contacto)
 document.addEventListener('DOMContentLoaded', function() {
    const btn = document.getElementById('button');

    document.getElementById('form').addEventListener('submit', function(event) {
        event.preventDefault();

        btn.value = 'Enviando...';

        const clientServiceID = 'default_service';
        const clientTemplateID = 'template_92dt7vi';

        // Envía correo electrónico al cliente 
        emailjs.sendForm(clientServiceID, clientTemplateID, this)
            .then(() => {
                btn.value = 'Enviar';
                alert('Mensaje enviado con éxito al cliente!');
            })
            .catch((err) => {
                btn.value = 'Enviar';
                alert("Hubo un error al enviar el mensaje al cliente. Por favor, inténtelo de nuevo más tarde.");
                console.error("Error al enviar el correo electrónico al cliente:", err);
            });

        // Cambio de credenciales para utilizar cuenta de Felipe (ahí esta el template personalizado)
        /// https://dashboard.emailjs.com/sign-in
        
        emailjs.init('lseOVV4yYvhVpXnfN');  // API Public Key cuenta felipe

        const adminServiceID = 'service_nq9tgzu'; // Reemplaza con el Service ID del administrador
        const adminTemplateID = 'template_g334a77'; // Reemplaza con el Template ID del administrador

        // Envía correo electrónico al administrador
        emailjs.sendForm(adminServiceID, adminTemplateID, this)
            .then(() => {
                console.log("Correo electrónico enviado con éxito al administrador");
            })
            .catch((err) => {
                console.error("Error al enviar el correo electrónico al administrador:", err);
            });
    });
});

