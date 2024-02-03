document.addEventListener('DOMContentLoaded', function () {
    const registrationForm = document.getElementById('registrationForm');

    registrationForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Guardar datos en localStorage
        const userData = {
            username,
            email,
        };

        // Convertir el objeto a cadena JSON y guardarlo en localStorage
        localStorage.setItem('userData', JSON.stringify(userData));

        // Mostrar un mensaje de éxito con SweetAlert2
        Swal.fire({
            icon: 'success',
            title: '¡Registro exitoso!',
            text: `Usuario: ${username}  -  Email: ${email}`,
        });

    });
});
// Hacer el menú hamburguesa
document.addEventListener('DOMContentLoaded', function () {
    const burgerMenu = document.querySelector('.burger-menu');
    const navLinks = document.querySelector('.nav-links');

    burgerMenu.addEventListener('click', function () {
        navLinks.classList.toggle('show');
    });
});
