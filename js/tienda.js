const tienda = [
    {
        nombre: "Botas Espaciales",
        descripcion: "Botas especiales para caminar en gravedad cero.",
        imagen: "../img/botas-andromeda.jpg",
        precio: 50,
        especificaciones: "proteccion +40"
    },
    {
        nombre: "Armas de Energía",
        descripcion: "Poderosas armas de energía para defenderse en el espacio.",
        imagen: "../img/blaster.jpg",
        precio: 100,
        especificaciones: "distancia + 80"
    },
    {
        nombre: "medikit",
        descripcion: "Restaura la salud +100.",
        imagen: "../img/med-kit.jpg",
        precio: 20,
        especificaciones: "salud +50"
    }
];

function mostrarModal(item) {
    Swal.fire({
        title: 'Agregar al inventario',
        text: `¿Deseas comprar "${item.nombre}" por $${item.precio}?`,
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Comprar',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if (result.isConfirmed) {
            let inventario = JSON.parse(localStorage.getItem('inventario')) || [];
            inventario.push(item);
            localStorage.setItem('inventario', JSON.stringify(inventario));
            Swal.fire('Comprado', `"${item.nombre}" ha sido agregado al inventario.`, 'success');
        }
    });
}

function mostrarTienda() {
    const storeList = document.getElementById('store');
    storeList.innerHTML = '';

    tienda.forEach(item => {
        const newItem = document.createElement('li');
        const itemImage = document.createElement('img');
        itemImage.src = item.imagen;
        itemImage.alt = item.nombre;
        itemImage.classList.add('item-image');

        // Agregar event listener al pasar el mouse sobre la imagen
        itemImage.addEventListener('mouseover', () => {
            itemImage.style.transform = 'scale(1.2)';
        });

        // Agregar event listener al quitar el mouse de la imagen
        itemImage.addEventListener('mouseout', () => {
            itemImage.style.transform = 'scale(1)';
        });

        const itemInfo = document.createElement('div');
        const itemName = document.createElement('h3');
        const itemDescription = document.createElement('p');
        const itemPrice = document.createElement('p');
        const itemSpecs = document.createElement('p');

        itemSpecs.textContent = item.especificaciones;
        newItem.appendChild(itemSpecs);
        itemName.textContent = item.nombre;
        itemDescription.textContent = item.descripcion;
        itemPrice.textContent = `$${item.precio}`;

        itemInfo.appendChild(itemName);
        itemInfo.appendChild(itemDescription);
        itemInfo.appendChild(itemPrice);

        newItem.appendChild(itemImage);
        newItem.appendChild(itemInfo);

        newItem.addEventListener('click', () => {
            mostrarModal(item);
        });

        storeList.appendChild(newItem);
    });
}

mostrarTienda();
