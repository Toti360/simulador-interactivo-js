const veces = Number(prompt("Ingrese el número de veces que desea calcular el costo del producto"));
const productos = []; // Array para almacenar los productos

class Producto {
    constructor(costoProduccion, margenBeneficio) {
        this.costoProduccion = costoProduccion;
        this.margenBeneficio = margenBeneficio;
        this.costoTotal = 0;
    }

    calcularCostoTotal() {
        if (Number.isNaN(this.costoProduccion) || Number.isNaN(this.margenBeneficio) || this.costoProduccion <= 0 || this.margenBeneficio <= 0) {
            return "Los parámetros deben ser números positivos mayores a cero.";
        }

        this.costoTotal = this.costoProduccion + (this.costoProduccion * (this.margenBeneficio / 100));

        return this.costoTotal;
    }
}

for (let i = 0; i < veces; i++) {
    const costoProduccion = Number(prompt(`Ingrese el costo de su producto ${i + 1} `));
    const margenBeneficio = Number(prompt("Ingrese el margen de beneficio esperado"));

    const miProducto = new Producto(costoProduccion, margenBeneficio);
    const costoTotalProducto = miProducto.calcularCostoTotal();

    // Subo cada producto al array productos
    productos.push({
        index: i + 1,
        costoProduccion,
        margenBeneficio,
        costoTotal: costoTotalProducto
    });
}

console.log("Lista de Productos:", productos);

// Calculo estadísticas de costos
const costosTotales = productos.map(producto => producto.costoTotal);
const costoPromedio = costosTotales.reduce((sum, costo) => sum + costo, 0) / costosTotales.length;
const costoMaximo = Math.max(...costosTotales);
const costoMinimo = Math.min(...costosTotales);

console.log("Costos Totales:", costosTotales);
console.log("Costo Promedio:", costoPromedio);
console.log("Costo Máximo:", costoMaximo);
console.log("Costo Mínimo:", costoMinimo);

// Busco el producto más económico utilizando el método find
const productoMasEconomico = productos.find(producto => producto.costoTotal === costoMinimo);

alert("Lista de Productos:\n\n" + JSON.stringify(productos, null, 2));

alert("Estadísticas de Costos:\n\n" +
    "Costo Promedio: " + costoPromedio + "\n" +
    "Costo Máximo: " + costoMaximo + "\n" +
    "Costo Mínimo: " + costoMinimo +
    "\n\nProducto Más Económico:\n" +
    `Producto ${productoMasEconomico.index} - Costo Total: ${productoMasEconomico.costoTotal}`);
    