const start = document.getElementById('start');
const tarjeta = document.getElementById('tarjeta');
const input1 = document.getElementById('Input1');
const input2 = document.getElementById('Input2');
const input3 = document.getElementById('Input3');
const input4 = document.getElementById('Input4');
const input5 = document.getElementById('Input5');
const enviar = document.getElementById('enviar');
const salir = document.getElementById('salir');


// Asignar eventos a los botones
start.addEventListener('click', () => {
    tarjeta.style.display = 'block';
});

start.addEventListener(`mouseover`,() => {
    start.style.color = `#FB2576`; 
})

enviar.addEventListener('click', guardarUsuario);

salir.addEventListener('click', () => {
    tarjeta.style.display = 'none';
});


// Obtener el array de usuarios del localStorage
let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

// Función para guardar el usuario en el localStorage y redirigir a la segunda página HTML
function guardarUsuario(event) {
    event.preventDefault();
    const select = document.querySelector('.seleccionClase');
    const clasesSeleccionadas = select.selectedOptions;
    const nacion = input1.value;
    const nombre = input2.value;
    const clase1 = clasesSeleccionadas[0] ? clasesSeleccionadas[0].value : '';
    const clase2 = clasesSeleccionadas[1] ? clasesSeleccionadas[1].value : '';
    const clase3 = clasesSeleccionadas[2] ? clasesSeleccionadas[2].value : '';

    // Guardar el usuario en el array de usuarios
    usuarios.push({
        nacion,
        nombre,
        clase1, clase2, clase3
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
    const celdaClase = document.createElement('th');

    celdaNacion.textContent = 'nacionalidad';
    celdaNombre.textContent = 'Nombre';
    celdaClase.textContent = `clase`
    filaCabecera.appendChild(celdaNacion);
    filaCabecera.appendChild(celdaNombre);
    cabecera.appendChild(filaCabecera);
    tabla.appendChild(cabecera);

    const cuerpo = document.createElement('tbody');

    usuarios.forEach(usuario => {
        const fila = document.createElement('tr');
        const celdaNacion = document.createElement('td');
        const celdaNombre = document.createElement('td');
        const celdaClase = document.createElement(`tr`)

        celdaNacion.textContent = usuario.nacion;
        celdaNombre.textContent = usuario.nombre;
        celdaClase.textContent = `${usuario.clase1}, ${usuario.clase2}, ${usuario.clase3}`;

        fila.appendChild(celdaNacion);
        fila.appendChild(celdaNombre);
        fila.appendChild(celdaClase)
        cuerpo.appendChild(fila);
    });

    tabla.appendChild(cuerpo);
    const contenedorTabla = document.getElementById('tablaUsuarios');
    contenedorTabla.appendChild(tabla);
}

// Crear la tabla de usuarios al cargar la página
document.addEventListener('DOMContentLoaded', crearTablaUsuarios);



