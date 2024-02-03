document.addEventListener('DOMContentLoaded', function () {

    // Limpiar el localStorage cuando cierro la página
    localStorage.clear('historialCalculos');

    const calcularButton = document.getElementById('calcularButton');
    const costoProduccionInput = document.getElementById('costoProduccion');
    const margenBeneficioInput = document.getElementById('margenBeneficio');
    const costosAdicionalesInput = document.getElementById('costosAdicionales');
    const porcentajeIVAInput = document.getElementById('porcentajeIVA')
    const resultadoContainer = document.getElementById('resultado');
    const historialContainer = document.getElementById('historial');
    const estadisticasContainer = document.getElementById('estadisticas');

    // Cargar datos desde localStorage
    const historialCalculos = JSON.parse(localStorage.getItem('historialCalculos')) || [];

    // Actualizar el historial en localStorage
    const actualizarHistorial = () => {
        localStorage.setItem('historialCalculos', JSON.stringify(historialCalculos));
    };

    // Mostrar el historial en la página
    const mostrarHistorial = () => {
        historialContainer.innerHTML = '<h2>Historial de Cálculos</h2>';

        if (historialCalculos.length === 0) {
            historialContainer.innerHTML += '<p>No hay cálculos en el historial.</p>';
            return;
        }

        historialCalculos.forEach((calculo, index) => {
            historialContainer.innerHTML += `
                <p>Calculo ${index + 1}: Costo del Producto: $${calculo.costoProduccion.toFixed(2)}, Margen de Beneficio: ${calculo.margenBeneficio}%, Precio de Venta: $${calculo.precioConIVA.toFixed(2)}</p>
            `;
        });
    };

    calcularButton.addEventListener('click', function () {
        const costoProduccion = parseFloat(costoProduccionInput.value);
        const margenBeneficio = parseFloat(margenBeneficioInput.value);
        const costosAdicionales = parseFloat(costosAdicionalesInput.value);
        const porcentajeIVA = parseFloat(porcentajeIVAInput.value);


        if (isNaN(costoProduccion) || isNaN(margenBeneficio) || isNaN(porcentajeIVA) || isNaN(costosAdicionales) || costoProduccion <= 0 || margenBeneficio <= 0 || porcentajeIVA < 0) {
            alert("Ingrese valores válidos para el costo del producto, el margen de beneficio y el porcentaje de IVA");
            return;
        }

        const precioSinIVA = costoProduccion + (costoProduccion * (margenBeneficio / 100)) + costosAdicionales;
        const precioConIVA = precioSinIVA + (precioSinIVA * (porcentajeIVA / 100));

        // Agregar el nuevo cálculo al historial
        const nuevoCalculo = {
            costoProduccion,
            margenBeneficio,
            precioConIVA
        };

        historialCalculos.push(nuevoCalculo);
        actualizarHistorial();

        // Mostrar el resultado actual
        resultadoContainer.textContent = `EL PRECIO DE VENTA ES: $${precioConIVA.toFixed(2)}`;
        resultadoContainer.classList.add('resultadoEstilos');

        // Mostrar el historial actualizado
        mostrarHistorial();

        // Calcular y mostrar estadísticas
        calcularEstadisticas();
    });

    // Calcular y mostrar estadísticas
    const calcularEstadisticas = () => {
        if (historialCalculos.length === 0) {
            estadisticasContainer.innerHTML = '<h2>Estadísticas</h2><p>No hay suficientes datos para calcular estadísticas.</p>';
            return;
        }

        const costosTotales = historialCalculos.map(calculo => calculo.precioConIVA);
        const costoPromedio = costosTotales.reduce((sum, costo) => sum + costo, 0) / costosTotales.length;
        const costoMaximo = Math.max(...costosTotales);
        const costoMinimo = Math.min(...costosTotales);

        // Encontrar el producto más económico
        const productoMasEconomico = historialCalculos.find(calculo => calculo.precioConIVA === costoMinimo);
        const productoMasCostoso = historialCalculos.find(calculo => calculo.precioConIVA === costoMaximo);

        estadisticasContainer.innerHTML = `
            <h2>Estadísticas</h2>
            <p>Precio Promedio: $${costoPromedio.toFixed(2)}</p>
            <p>Precio Máximo: $${costoMaximo.toFixed(2)}</p>
            <p>Precio Mínimo: $${costoMinimo.toFixed(2)}</p>
            <p>Producto Más Económico: Precio de Venta: $${productoMasEconomico.precioConIVA.toFixed(2)}</p>
            <p>Producto Más Costoso: Precio de Venta: $${productoMasCostoso.precioConIVA.toFixed(2)}</p>
        `;
    };
});
// Hacer el menú hamburguesa
document.addEventListener('DOMContentLoaded', function () {
    const burgerMenu = document.querySelector('.burger-menu');
    const navLinks = document.querySelector('.nav-links');

    burgerMenu.addEventListener('click', function () {
        navLinks.classList.toggle('show');
    });
});