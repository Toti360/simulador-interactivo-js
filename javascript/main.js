document.addEventListener('DOMContentLoaded', function () {

    localStorage.removeItem('historialCalculos');

    const calcularButton = document.getElementById('calcularButton');
    const costoProduccionInput = document.getElementById('costoProduccion');
    const margenBeneficioInput = document.getElementById('margenBeneficio');
    const resultadoContainer = document.getElementById('resultado');
    const historialContainer = document.getElementById('historial');
    const estadisticasContainer = document.getElementById('estadisticas');

    // Cargar datos previos desde localStorage
    const historialCalculos = JSON.parse(localStorage.getItem('historialCalculos')) || [];

    // Función para actualizar el historial en localStorage
    const actualizarHistorial = () => {
        localStorage.setItem('historialCalculos', JSON.stringify(historialCalculos));
    };

    // Función para mostrar el historial en la página
    const mostrarHistorial = () => {
        historialContainer.innerHTML = '<h2>Historial de Cálculos</h2>';

        if (historialCalculos.length === 0) {
            historialContainer.innerHTML += '<p>No hay cálculos en el historial.</p>';
            return;
        }

        historialCalculos.forEach((calculo, index) => {
            historialContainer.innerHTML += `
                <p>Calculo ${index + 1}: Costo de Producción: $${calculo.costoProduccion.toFixed(2)}, Margen de Beneficio: ${calculo.margenBeneficio}%, Costo Total: $${calculo.costoTotal.toFixed(2)}</p>
            `;
        });
    };

    calcularButton.addEventListener('click', function () {
        const costoProduccion = parseFloat(costoProduccionInput.value);
        const margenBeneficio = parseFloat(margenBeneficioInput.value);

        if (isNaN(costoProduccion) || isNaN(margenBeneficio) || costoProduccion <= 0 || margenBeneficio <= 0) {
            alert("Ingrese valores válidos para el costo de producción y el margen de beneficio.");
            return;
        }

        const costoTotal = costoProduccion + (costoProduccion * (margenBeneficio / 100));

        // Agregar el nuevo cálculo al historial
        const nuevoCalculo = {
            costoProduccion,
            margenBeneficio,
            costoTotal
        };

        historialCalculos.push(nuevoCalculo);
        actualizarHistorial();

        // Mostrar el resultado actual
        resultadoContainer.textContent = `El costo total es: $${costoTotal.toFixed(2)}`;

        // Mostrar el historial actualizado
        mostrarHistorial();

        // Calcular y mostrar estadísticas
        calcularEstadisticas();
    });

    // Función para calcular y mostrar estadísticas
    const calcularEstadisticas = () => {
        if (historialCalculos.length === 0) {
            estadisticasContainer.innerHTML = '<h2>Estadísticas</h2><p>No hay suficientes datos para calcular estadísticas.</p>';
            return;
        }

        const costosTotales = historialCalculos.map(calculo => calculo.costoTotal);
        const costoPromedio = costosTotales.reduce((sum, costo) => sum + costo, 0) / costosTotales.length;
        const costoMaximo = Math.max(...costosTotales);
        const costoMinimo = Math.min(...costosTotales);

        // Encontrar el producto más económico
        const productoMasEconomico = historialCalculos.find(calculo => calculo.costoTotal === costoMinimo);

        estadisticasContainer.innerHTML = `
            <h2>Estadísticas</h2>
            <p>Costo Promedio: $${costoPromedio.toFixed(2)}</p>
            <p>Costo Máximo: $${costoMaximo.toFixed(2)}</p>
            <p>Costo Mínimo: $${costoMinimo.toFixed(2)}</p>
            <p>Producto Más Económico: Costo Total: $${productoMasEconomico.costoTotal.toFixed(2)}</p>
        `;
    };
});

