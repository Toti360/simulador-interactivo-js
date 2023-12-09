function calcularCostoProducto(costoProduccion, margenBeneficio) {
    // Verificar que los parámetros son números positivos
    if (typeof costoProduccion !== 'number' || typeof margenBeneficio !== 'number' || costoProduccion <= 0 || margenBeneficio <= 0) {
        return "Los argumentos deben ser números positivos.";
    }

    const costoTotal = costoProduccion + (costoProduccion * (margenBeneficio / 100));

    return costoTotal;
}

// Número de veces que se ejecutará el bucle
const veces = Number(prompt("Ingrese el número de veces que desea calcular el costo del producto"));

// Bucle for para realizar el cálculo múltiples veces
for (let i = 0; i < veces; i++) {
    let costoProduccion = Number(prompt("Ingrese el costo de su producto"));
    let margenBeneficio = Number(prompt("Ingrese el margen de beneficio esperado"));

    const costoTotalProducto = calcularCostoProducto(costoProduccion, margenBeneficio);

    //console.log(`El costo total del producto ${i + 1} es: ${costoTotalProducto}`);  // Muestra el resultado por consola

    alert(`El costo total del producto ${i + 1} es: ${costoTotalProducto}`);
}