let tipoExoplaneta = document.getElementById("tipoExoplaneta");
let btnBuscarPlanetas = document.getElementById("buscar-planetas");
const planetas = [exo1, exo2, exo3, exo4, exo5, exo6, exo7, exo8, exo9]
const opciones = tipoExoplaneta.getElementsByTagName("option");

/// style del drowpdown
tipoExoplaneta.style.backgroundColor = "black";
tipoExoplaneta.style.color = "#FB2576";

for (let i = 0; i < opciones.length; i++) {
    opciones[i].style.backgroundColor = "black";
    opciones[i].style.color = "#FB2576";
}

/// efecto bton buscar planeta
btnBuscarPlanetas.addEventListener("mouseover", () => {
    btnBuscarPlanetas.style.backgroundColor = "#FB2576";
    btnBuscarPlanetas.style.color = "white";
});

btnBuscarPlanetas.addEventListener("mouseout", () => {
    btnBuscarPlanetas.style.backgroundColor = "";
    btnBuscarPlanetas.style.color = "";
});

btnBuscarPlanetas.addEventListener("click", function () {
    let selectTipoExoplaneta = tipoExoplaneta.value;
    const planetasFiltrados = planetas.filter(function (planeta) {
        return planeta.hClase === selectTipoExoplaneta;
    });

    mostrarListaPlanetas(planetasFiltrados);
});

// Función para mostrar la lista de planetas
function mostrarListaPlanetas(planetas) {
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







