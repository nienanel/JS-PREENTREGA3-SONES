
function mostrarInventario() {
    const inventario = obtenerInventario();
    const inventoryList = document.getElementById('inventory');
    inventoryList.innerHTML = '';

    inventario.forEach(item => {
        const newItem = document.createElement('li');
        const itemImage = document.createElement('img');
        itemImage.src = item.imagen;
        itemImage.width = 25;
        itemImage.height = 25;
        newItem.appendChild(itemImage);

        const itemName = document.createElement('span');
        itemName.textContent = item.nombre;
        newItem.appendChild(itemName);

        const itemSpecs = document.createElement('p');
        itemSpecs.textContent = item.especificaciones;
        newItem.appendChild(itemSpecs);

        inventoryList.appendChild(newItem);
    });
}

/// obtencion del invenario con json
function obtenerInventario() {
    const inventarioJSON = localStorage.getItem('inventario');
    return inventarioJSON ? JSON.parse(inventarioJSON) : [];
}

///vaciado de inventario
const venderTodoButton = document.getElementById('venderTodoButton');
venderTodoButton.addEventListener('click', vaciarInventario);

function vaciarInventario() {
    localStorage.removeItem('inventario');
    mostrarInventario();
}

mostrarInventario();