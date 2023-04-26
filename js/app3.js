let tipoExoplaneta = document.getElementById("tipoExoplaneta");
const btnBuscarPlanetas = document.getElementById("buscar-planetas");
const planetas = [exo1, exo2, exo3, exo4, exo5, exo6, exo7, exo8, exo9]

btnBuscarPlanetas.addEventListener("click", function () {
    let selectTipoExoplaneta = tipoExoplaneta.value;
    const planetasFiltrados = planetas.filter(function (planeta) {
        return planeta.hClase === selectTipoExoplaneta;
    });

    mostrarListaPlanetas(planetasFiltrados);
});

/// funcion para mostrar lista de planetas y navegar entre distintos objetos del array.
function mostrarDatosPlaneta(planeta) {
    const modal = document.getElementById("myModal");
    const closeBtn = document.getElementsByClassName("close")[0];
    const planetaInfo = document.getElementById("planeta-info");

    planetaInfo.innerHTML = "nombre: " + planeta.nombre + "<br>" +
        "masa: " + planeta.masa + "<br>" +
        "distancia: " + parseFloat(planeta.distancia) + "<br>" +
        "temperatura: " + parseFloat(planeta.temperatura) + "<br>" +
        "tipo: " + planeta.hClase + "<br>" +
        "periodoOrbital: " + parseFloat(planeta.duracionAno);

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
function mostrarListaPlanetas(planetas) {
    const listaPlanetas = document.getElementById("lista-planetas");
    listaPlanetas.innerHTML = "";

    if (planetas.length === 0) {
        listaPlanetas.innerHTML = "<li>No se encontraron resultados</li>";
        return;
    }

    planetas.forEach(function (planeta) {
        const li = document.createElement("li");
        const link = document.createElement("a");
        link.textContent = planeta.nombre;
        link.href = "#";
        link.addEventListener("click", function () {
            mostrarDatosPlaneta(planeta);
        });
        li.appendChild(link);
        listaPlanetas.appendChild(li);
    });
}