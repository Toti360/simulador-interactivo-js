document.addEventListener('DOMContentLoaded', function () {
    const apiKey = '7d91fc85788a4d37b192b0edf5cae988';
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=ar&apiKey=${apiKey}`; //Modificar la API, de acuerdo a la documentación para que fueran noticias de Argentina

    // Obtener artículos de la API
    const obtenerArticulos = async () => {
        try {
            const respuesta = await fetch(apiUrl);
            const datos = await respuesta.json();

            // Verificar si la respuesta es exitosa
            if (respuesta.ok) {
                mostrarArticulos(datos.articles);
            } else {
                console.error('Error al obtener los artículos:', datos.message);
            }
        } catch (error) {
            console.error('Error al conectarse a la API:', error);
        }
    };

    // Mostrar los artículos en el contenedor
    const mostrarArticulos = (articulos) => {
        const contenedorArticulos = document.getElementById('articulos');

        // Limpiar el contenedor antes de agregar nuevos artículos
        contenedorArticulos.innerHTML = '';

        // Iterar sobre los artículos y agregarlos al contenedor
        articulos.forEach((articulo) => {
            const nuevoArticulo = document.createElement('div');
            nuevoArticulo.innerHTML = `
                <a href="${articulo.url}" target="_blank">
                    <img src="${articulo.urlToImage}" alt="${articulo.title}">
                </a>
                <p>${articulo.title}</p>
            `;
            contenedorArticulos.appendChild(nuevoArticulo);
        });
    };

    // Llamar a la función para obtener los artículos al cargar la página
    obtenerArticulos();
});
// Hacer el menú hamburguesa
document.addEventListener('DOMContentLoaded', function () {
    const burgerMenu = document.querySelector('.burger-menu');
    const navLinks = document.querySelector('.nav-links');

    burgerMenu.addEventListener('click', function () {
        navLinks.classList.toggle('show');
    });
});
