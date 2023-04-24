const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

// Función para crear la tabla de usuarios
function crearTablaUsuarios() {
  // Crear la tabla y sus elementos
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

  // Agregar cada usuario a la tabla
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

// Generar la tabla al cargar la página
document.addEventListener('DOMContentLoaded', crearTablaUsuarios);