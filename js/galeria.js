document.addEventListener("DOMContentLoaded", function() {
    // Obtener referencia a los elementos del DOM
    const mecanico1Radio = document.getElementById("CheckMec1");
    const mecanico2Radio = document.getElementById("CheckMec2");
    const mecanico3Radio = document.getElementById("CheckMec3");
    const mecanicos = document.getElementById("CheckMecAll");
    const imageHolder = document.getElementById("imageHolder");
    const cards = document.querySelectorAll(".card");

    // Crear un objeto para almacenar los tamaños originales de las cartas
    const originalCardSizes = {};

    // Guardar los tamaños originales de las cartas
    cards.forEach(function(card) {
        originalCardSizes[card.id] = {
            width: card.offsetWidth + "px",
            height: card.offsetHeight + "px"
        };
    });

    // Función para restaurar el formato original de las cartas
    function restaurarFormatoCartas() {
        cards.forEach(function(card) {
            card.style.display = "block";
            card.style.width = originalCardSizes[card.id].width;
            card.style.height = originalCardSizes[card.id].height;
            imageHolder.appendChild(card.parentElement);
        });
    }
        // Función para filtrar las imágenes por mecánico
        function filtrarPorMecanico(mecanico) {
            restaurarFormatoCartas();
            cards.forEach(function(card) {
                if (!card.classList.contains(mecanico)) {
                    card.style.display = "none";
                }
            });
        }

    
    mecanicos.addEventListener("change", function() {
        window.location.reload();
        
    });

    mecanico1Radio.addEventListener("change", function() {
        filtrarPorMecanico("mecanico1");
    });

    mecanico2Radio.addEventListener("change", function() {
        filtrarPorMecanico("mecanico2");
    });

    mecanico3Radio.addEventListener("change", function() {
        filtrarPorMecanico("mecanico3");
    });


});
