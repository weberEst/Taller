function iniciarMap(){
    var coord = {lat: -33.0336892 , lng: -71.535759};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: coord
    });
    var marker = new google.maps.Marker({
        position: coord,
        map: map
    });
}



class CarritoDeCompras {
    constructor(usuario) {
        this.usuario = usuario;
        this.servicios = [];
        this.descuentos = [];
        this.envio = { costo: 0, metodo: '' };
        this.impuestos = { porcentaje: 0.08, aplicado: false };
    }

    agregarServicio(servicio, cantidad) {
        // Verificar disponibilidad en el inventario
        if (!this.verificarDisponibilidad(servicio, cantidad)) {
            console.log(`Servicio ${servicio.nombre} no disponible en la cantidad solicitada.`);
            return;
        }

        // Agregar servicio al carrito
        const servicioEnCarrito = { servicio, cantidad };
        this.servicios.push(servicioEnCarrito);
        console.log(`Servicio ${servicio.nombre} agregado al carrito.`);
        this.actualizarVistaCarrito();
    }

    eliminarServicio(index) {
        this.servicios.splice(index, 1);
        console.log(`Servicio eliminado del carrito.`);
        this.actualizarVistaCarrito();
    }

    calcularSubtotal() {
        let subtotal = 0;
        this.servicios.forEach(({ servicio, cantidad }) => {
            subtotal += servicio.precio * cantidad;
        });
        return subtotal;
    }

    calcularTotal() {
        let total = this.calcularSubtotal();

        // Aplicar descuentos
        this.descuentos.forEach(descuento => {
            total -= descuento;
        });

        // Aplicar impuestos
        if (!this.impuestos.aplicado) {
            total *= (1 + this.impuestos.porcentaje);
            this.impuestos.aplicado = true;
        }

        // Agregar costo de envío
        total += this.envio.costo;

        return total;
    }

    verificarDisponibilidad(servicio, cantidad) {
        //  para verificaciones futuras
     
        return true;
    }

    procesarPago() {
        // para verificaciones futuras
        console.log('Procesando pago...');
    }

    actualizarVistaCarrito() {
        const cartItemsElement = document.querySelector('.cart-items');
        const cartTotalElement = document.querySelector('.cart-total');
        cartItemsElement.innerHTML = '';
        let total = 0;

        this.servicios.forEach(({ servicio, cantidad }, index) => {
            const li = document.createElement('li');
            li.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
            li.innerHTML = `
                ${servicio.nombre} - $${servicio.precio.toFixed(2)} x ${cantidad}
                <button class="btn btn-danger btn-sm eliminar-servicio" data-index="${index}">Eliminar</button>
            `;
            cartItemsElement.appendChild(li);
            total += servicio.precio * cantidad;
        });

        cartTotalElement.textContent = total.toFixed(2);

        // Agregar eventos de eliminación
        document.querySelectorAll('.eliminar-servicio').forEach(button => {
            button.addEventListener('click', () => {
                const index = button.dataset.index;
                this.eliminarServicio(index);
            });
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const carrito = new CarritoDeCompras('usuario1');

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', () => {
            const servicioElement = button.closest('.card');
            const servicio = {
                id: button.dataset.id,
                nombre: button.dataset.name,
                precio: parseFloat(button.dataset.price)
            };

            carrito.agregarServicio(servicio, 1);
        });
    });
});
