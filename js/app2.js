const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

// Función para crear la tabla de usuarios
function crearTablaUsuarios() {
    const tabla = document.createElement('table');
    const cabecera = document.createElement('thead');
    const filaCabecera = document.createElement('tr');
    const celdaNacion = document.createElement('th');
    const celdaNombre = document.createElement('th');

    celdaNacion.textContent = 'nacion';
    celdaNombre.textContent = 'Nombre';

    filaCabecera.appendChild(celdaNacion);
    filaCabecera.appendChild(celdaNombre);
    cabecera.appendChild(filaCabecera);
    tabla.appendChild(cabecera);

    const cuerpo = document.createElement('tbody');

    // Agregar cada usuario a la tabla
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

// Generar la tabla al cargar la página
document.addEventListener('DOMContentLoaded', crearTablaUsuarios);