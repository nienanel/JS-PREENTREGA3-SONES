/// regalo de bienvenida
const log = document.getElementById("log");

log.addEventListener(`click`, (event) => {
    event.preventDefault();

    const modalShown = localStorage.getItem('modalShown');
    if (!modalShown) {
        Swal.fire({
            title: 'Sweet!',
            text: 'te regalamos un traje espacial de bienvenida',
            imageUrl: '../img/tierra-alreves.jpg',
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'Custom image',
        }).then(() => {
            localStorage.setItem('modalShown', true);
            const trajeEspacial = { descripcion: 'Traje espacial', caracteristicas: 'Protección +100', imagen: '../img/item_traje.jpg' };
            agregarItemLog(regalo.descripcion);
            agregarAlInventario(trajeEspacial);
            window.open('inventario.html', '_blank', 'width=300,height=350');
        });
    } else {
        window.open('log.html', '_blank', 'width=300,height=350');
    }
});

/// lo agrega al inventario

function agregarItemLog(item) {
    const log = document.getElementById("log");
    const mensaje = `Se regaló un ${item} de bienvenida.`;
    const nuevoElemento = document.createElement('p');
    nuevoElemento.textContent = mensaje;
    log.appendChild(nuevoElemento);
}

function agregarAlInventario(objeto) {
    const inventario = obtenerInventario();
    inventario.push(objeto);
    guardarInventario(inventario);
}

function obtenerInventario() {
    const inventarioJSON = localStorage.getItem('inventario');
    return inventarioJSON ? JSON.parse(inventarioJSON) : [];
}

function guardarInventario(inventario) {
    const inventarioJSON = JSON.stringify(inventario);
    localStorage.setItem('inventario', inventarioJSON);
}

const linkInventario = document.getElementById("linkInventario");

function abrirVentana(event) {
    event.preventDefault();
    window.open('inventario.html', '_blank', 'width=400,height=400');
}

linkInventario.addEventListener("click", abrirVentana);
