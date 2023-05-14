///regalo de bienvenida
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
            agregarItemLog('Traje espacial');
            agregarAlInventario('Traje espacial');
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

function agregarAlInventario(item) {
    const inventario = obtenerInventario();
    inventario.push(item);
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