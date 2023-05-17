function mostrarInventario() {
    const inventario = obtenerInventario();
    const inventoryList = document.getElementById('inventory');
    const linkInventario = document.getElementById('linkInventario');
    inventoryList.innerHTML = '';

    inventario.forEach(item => {
        const newItem = document.createElement('li');
        const itemImage = document.createElement('img');
        itemImage.src = item.imagen;
        itemImage.width = 25;
        itemImage.height = 25;
        newItem.appendChild(itemImage);

        const itemName = document.createElement('span');
        itemName.textContent = item.descripcion;
        newItem.appendChild(itemName);

        const itemSpecs = document.createElement('p');
        itemSpecs.textContent = item.caracteristicas;
        newItem.appendChild(itemSpecs);

        inventoryList.appendChild(newItem);
    });

    // Verificar si el inventario no está vacío
    linkInventario.classList.toggle("inventarionovacio", inventario.length > 0);
}

function obtenerInventario() {
    const inventarioJSON = localStorage.getItem('inventario');
    return inventarioJSON ? JSON.parse(inventarioJSON) : [];
}

const venderTodoButton = document.getElementById('venderTodoButton');
venderTodoButton.addEventListener('click', vaciarInventario);

function vaciarInventario() {
    localStorage.removeItem('inventario');
    mostrarInventario();
}

mostrarInventario();