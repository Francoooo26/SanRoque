var caja2 = document.querySelector('#Opinioness');
var caja3 = document.querySelector('#Opinionesss');

function mostrarCaja2() {
    caja2.style.display = 'block'; 
}

function mostrarCaja3() {
    caja3.style.display = 'block'; 
    caja3.style.backgroundColor = "rgba(198, 198, 199, 0.91)";
}

function mostrarPreguntas() {
    var opcion = prompt("Elige un número del 1 al 5 para seleccionar un género musical:\n1 - Electrónica\n2 - Cuarteto\n3 - Cumbia\n4 - Rock\n5 - Reguetón");

    if (opcion == "1") {
        alert("Seleccionaste Electrónica. ¡Prepárate para bailar!");
        cargarImagen("imagenes/electronica.jpg");
    } else if (opcion == "2") {
        alert("Seleccionaste Cuarteto. ¡A disfrutar del ritmo clásico!");
        cargarImagen("imagenes/cuarteto.jpg");
    } else if (opcion == "3") {
        alert("Seleccionaste Cumbia. ¡El baile nunca falta!");
        cargarImagen("imagenes/cumbia.jpg");
    } else if (opcion == "4") {
        alert("Seleccionaste Rock. ¡Listo para la energía eléctrica!");
        cargarImagen("imagenes/rock.jpg");
    } else if (opcion == "5") {
        alert("Seleccionaste Reguetón. ¡A mover el cuerpo!");
        cargarImagen("imagenes/regueton.jpg");
    } else {
        alert("Por favor, selecciona un número válido del 1 al 5.");
    }
}

function cargarImagen(rutaImagen) {
    var imagen = document.querySelector('#imagenElegida'); 
    imagen.src = rutaImagen; 
    imagen.style.display = 'block'; 
}