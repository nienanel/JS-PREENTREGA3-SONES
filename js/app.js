const start = document.getElementById('start');
const tarjeta = document.getElementById('tarjeta');
const input1 = document.getElementById('Input1');
const input2 = document.getElementById('Input2');
const enviar = document.getElementById('enviar');
const salir = document.getElementById('salir');

// Estilos botón "Start"
Object.assign(start.style, {
    padding: '10px 20px',
    backgroundColor: 'black',
    color: 'white',
    border: 'none',
    borderRadius: '5px'
});

// Estilos ventana emergente
Object.assign(tarjeta.style, {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '400px',
    padding: '20px',
    backgroundColor: 'black',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
    borderRadius: '5px'
});

start.addEventListener('click', function () {
    tarjeta.style.display = 'block';
});

// Agregar evento click al botón "Exit"
salir.addEventListener('click', function () {
    tarjeta.style.display = 'none';
});

// Obtener el array de usuarios del localStorage
let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

// Función para guardar el usuario en el localStorage y redirigir a la segunda página HTML
function guardarUsuario(event) {
    event.preventDefault(); // Evitar que el formulario se envíe y la página se recargue

    const email = input1.value;
    const nombre = input2.value;

    // Guardar el usuario en el array de usuarios
    usuarios.push({
        email,
        nombre
    });

    // Guardar el array de usuarios actualizado en el localStorage
    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    // Redirigir a la segunda página HTML
    window.location.href = '../html/home.html';
}

// Asignar eventos a los botones
start.addEventListener('click', () => {
    tarjeta.style.display = 'block';
});

enviar.addEventListener('click', guardarUsuario);

salir.addEventListener('click', () => {
    tarjeta.style.display = 'none';
});

// Crear la tabla de usuarios
function crearTablaUsuarios() {
    const tabla = document.createElement('table');
    const cabecera = document.createElement('thead');
    const filaCabecera = document.createElement('tr');
    const celdaEmail = document.createElement('th');
    const celdaNombre = document.createElement('th');

    celdaEmail.textContent = 'Email';
    celdaNombre.textContent = 'Nombre';

    filaCabecera.appendChild(celdaEmail);
    filaCabecera.appendChild(celdaNombre);
    cabecera.appendChild(filaCabecera);
    tabla.appendChild(cabecera);

    const cuerpo = document.createElement('tbody');

    usuarios.forEach(usuario => {
        const fila = document.createElement('tr');
        const celdaEmail = document.createElement('td');
        const celdaNombre = document.createElement('td');

        celdaEmail.textContent = usuario.email;
        celdaNombre.textContent = usuario.nombre;

        fila.appendChild(celdaEmail);
        fila.appendChild(celdaNombre);
        cuerpo.appendChild(fila);
    });

    tabla.appendChild(cuerpo);
    const contenedorTabla = document.getElementById('tablaUsuarios');
    contenedorTabla.appendChild(tabla);
}

// Crear la tabla de usuarios al cargar la página
document.addEventListener('DOMContentLoaded', crearTablaUsuarios);



