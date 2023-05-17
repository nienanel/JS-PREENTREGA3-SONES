
const tipoExoplaneta = document.getElementById("tipoExoplaneta");
const btnBuscarPlanetas = document.getElementById("buscar-planetas");
const planetas = [exo1, exo2, exo3, exo4, exo5, exo6, exo7, exo8, exo9];
const exoplanetaSeleccionado = { nombre: "", masa: 0, distancia: 0, temperatura: 0, hClase: "", duracionAno: 0 };

// Estilo del dropdown
tipoExoplaneta.style.backgroundColor = "black";
tipoExoplaneta.style.color = "#FB2576";

// Estilo de las opciones del dropdown
const opciones = tipoExoplaneta.getElementsByTagName("option");
for (let i = 0; i < opciones.length; i++) {
    opciones[i].style.backgroundColor = "black";
    opciones[i].style.color = "#FB2576";
}

// Efecto del botón buscar planeta
btnBuscarPlanetas.addEventListener("mouseover", () => {
    btnBuscarPlanetas.style.backgroundColor = "#FB2576";
    btnBuscarPlanetas.style.color = "white";
});

btnBuscarPlanetas.addEventListener("mouseout", () => {
    btnBuscarPlanetas.style.backgroundColor = "";
    btnBuscarPlanetas.style.color = "";
});

btnBuscarPlanetas.addEventListener("click", function () {
    const selectTipoExoplaneta = tipoExoplaneta.value;
    const planetasFiltrados = planetas.filter(planeta => planeta.hClase === selectTipoExoplaneta);
    mostrarListaPlanetas(planetasFiltrados);
});

// Función para mostrar la lista de planetas
function mostrarListaPlanetas(planetas) {
    const listaPlanetas = document.getElementById("lista-planetas");
    listaPlanetas.innerHTML = "";

    if (planetas.length === 0) {
        const li = document.createElement("li");
        li.textContent = "No se encontraron resultados";
        listaPlanetas.appendChild(li);
        return;
    }

    planetas.forEach(planeta => {
        const li = document.createElement("li");
        const link = document.createElement("a");
        link.textContent = planeta.nombre;
        link.href = "#";
        link.addEventListener("click", () => mostrarDatosPlaneta(planeta));
        li.appendChild(link);
        listaPlanetas.appendChild(li);
    });
}

// Función para mostrar los datos del planeta seleccionado
function mostrarDatosPlaneta(planeta) {
    const modal = document.getElementById("myModal");
    const closeBtn = document.getElementsByClassName("close")[0];
    const planetaInfo = document.getElementById("planeta-info");

    exoplanetaSeleccionado.nombre = planeta.nombre;
    exoplanetaSeleccionado.masa = planeta.masa;
    exoplanetaSeleccionado.distancia = parseFloat(planeta.distancia);
    exoplanetaSeleccionado.temperatura = parseFloat(planeta.temperatura);
    exoplanetaSeleccionado.hClase = planeta.hClase;
    exoplanetaSeleccionado.duracionAno = parseFloat(planeta.duracionAno);

    planetaInfo.innerHTML = "nombre: " + exoplanetaSeleccionado.nombre + "<br>" +
        "masa: " + exoplanetaSeleccionado.masa + "<br>" +
        "distancia: " + exoplanetaSeleccionado.distancia + "<br>" +
        "temperatura: " + exoplanetaSeleccionado.temperatura + "<br>" +
        "tipo: " + exoplanetaSeleccionado.hClase + "<br>" +
        // ...

        "periodoOrbital: " + exoplanetaSeleccionado.duracionAno;

    modal.style.display = "block";

    closeBtn.onclick = function () {
        modal.style.display = "none";
    };

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
}

// Función para agregar el exoplaneta seleccionado a la tabla de usuarios
function agregarExoplanetaUsuario(exoplaneta) {
    const fila = document.createElement('tr');
    const celdaNacion = document.createElement('td');
    const celdaNombre = document.createElement('td');
    const celdaClase = document.createElement('td');
    const celdaExoplaneta = document.createElement('td');

    // celdaNacion.textContent = "N/A";
    // celdaNombre.textContent = "N/A";
    // celdaClase.textContent = "N/A";
    celdaExoplaneta.textContent = exoplaneta.nombre;

    fila.appendChild(celdaNacion);
    fila.appendChild(celdaNombre);
    fila.appendChild(celdaClase);
    fila.appendChild(celdaExoplaneta);

    const cuerpo = document.querySelector('tbody');
    cuerpo.appendChild(fila);

    // Guardar el exoplaneta seleccionado en localStorage
    localStorage.setItem('exoplanetaSeleccionado', JSON.stringify(exoplaneta));
}

agregarExoplanetaUsuario(exoplanetaSeleccionado);

window.addEventListener('DOMContentLoaded', () => {
    const exoplanetaGuardado = localStorage.getItem('exoplanetaSeleccionado');
    if (exoplanetaGuardado) {
        const exoplaneta = JSON.parse(exoplanetaGuardado);
        agregarExoplanetaUsuario(exoplaneta);
    }
});













