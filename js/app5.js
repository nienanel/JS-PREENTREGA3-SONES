const btnObtenerChiste = document.getElementById('btnObtenerChiste');
const chisteElement = document.getElementById('chiste');

btnObtenerChiste.addEventListener('click', () => {
    fetch('https://api.chucknorris.io/jokes/random')
        .then(response => response.json())
        .then(data => {
            chisteElement.textContent = data.value;
        })
        .catch(error => {
            console.error('Error al obtener el chiste:', error);
            chisteElement.textContent = 'Ocurrió un error al obtener el chiste.';
        });
});