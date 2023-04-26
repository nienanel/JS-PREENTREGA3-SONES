const start = document.getElementById('start');
const tarjeta = document.getElementById('tarjeta');
const input1 = document.getElementById('Input1');
const input2 = document.getElementById('Input2');
const enviar = document.getElementById('enviar');
const salir = document.getElementById('salir');

// Estilos botón "Start"
start.style.padding = '10px 20px';
start.style.backgroundColor = 'black';
start.style.color = 'white';
start.style.border = 'none';
start.style.borderRadius = '5px';

// Estilos ventana emergente
tarjeta.style.position = 'fixed';
tarjeta.style.top = '50%';
tarjeta.style.left = '50%';
tarjeta.style.transform = 'translate(-50%, -50%)';
tarjeta.style.width = '400px';
tarjeta.style.padding = '20px';
tarjeta.style.backgroundColor = 'black';
tarjeta.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';
tarjeta.style.borderRadius = '5px';

// Asignar eventos a los botones
start.addEventListener('click', () => {
    tarjeta.style.display = 'block';
});

enviar.addEventListener('click', guardarUsuario);

salir.addEventListener('click', () => {
    tarjeta.style.display = 'none';
});


// Obtener el array de usuarios del localStorage
let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

// Función para guardar el usuario en el localStorage y redirigir a la segunda página HTML
function guardarUsuario(event) {
    event.preventDefault(); 

    const nacion = input1.value;
    const nombre = input2.value;

    // Guardar el usuario en el array de usuarios
    usuarios.push({
        nacion,
        nombre
    });

    // Guardar el array de usuarios actualizado en el localStorage
    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    // Redirigir a la segunda página HTML
    window.location.href = '../html/home.html';
}


// Crear la tabla de usuarios
function crearTablaUsuarios() {
    const tabla = document.createElement('table');
    const cabecera = document.createElement('thead');
    const filaCabecera = document.createElement('tr');
    const celdaNacion = document.createElement('th');
    const celdaNombre = document.createElement('th');

    celdaNacion.textContent = 'nacionalidad';
    celdaNombre.textContent = 'Nombre';

    filaCabecera.appendChild(celdaNacion);
    filaCabecera.appendChild(celdaNombre);
    cabecera.appendChild(filaCabecera);
    tabla.appendChild(cabecera);

    const cuerpo = document.createElement('tbody');

    usuarios.forEach(usuario => {
        const fila = document.createElement('tr');
        const celdaNacion = document.createElement('td');
        const celdaNombre = document.createElement('td');

        celdaNacion.textContent = usuario.nacion;
        celdaNombre.textContent = usuario.nombre;

        fila.appendChild(celdaNacion);
        fila.appendChild(celdaNombre);
        cuerpo.appendChild(fila);
    });

    tabla.appendChild(cuerpo);
    const contenedorTabla = document.getElementById('tablaUsuarios');
    contenedorTabla.appendChild(tabla);
}

// Crear la tabla de usuarios al cargar la página
document.addEventListener('DOMContentLoaded', crearTablaUsuarios);



