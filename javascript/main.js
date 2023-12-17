/*
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
*/

// Mismo proyecto, pero usando Objetos con `class` y con su constructor
// Número de veces que se ejecutará el bucle
const veces = Number(prompt("Ingrese el número de veces que desea calcular el costo del producto"));

// Defino una función constructora para el objeto Producto
class Producto {
    constructor(costoProduccion, margenBeneficio) {
        this.costoProduccion = costoProduccion;
        this.margenBeneficio = margenBeneficio;
    }

    // Método para calcular el costo total del producto
    calcularCostoTotal() {
        if (typeof this.costoProduccion !== 'number' || typeof this.margenBeneficio !== 'number' || this.costoProduccion <= 0 || this.margenBeneficio <= 0) {
            return "Los parámetros deben ser números positivos mayores a cero.";     // Verificar que los parámetros son números mayores a cero
        }

        const costoTotal = this.costoProduccion + (this.costoProduccion * (this.margenBeneficio / 100));

        return costoTotal;
    };
}

// Bucle for para realizar el cálculo múltiples veces
for (let i = 0; i < veces; i++) {
    // Crear una instancia del objeto Producto utilizando el constructor con ingreso de datos por `prompt`
    const miProducto = new Producto(Number(prompt(`Ingrese el costo de su producto ${i + 1} ` )), Number(prompt("Ingrese el margen de beneficio esperado")));
    // Utilizar el método calcularCostoTotal de la instancia miProducto
    const costoTotalProducto = miProducto.calcularCostoTotal();
    // Mostrar el resultado con alert
    alert(`El costo total del producto ${i + 1} es: ${costoTotalProducto}`);

}