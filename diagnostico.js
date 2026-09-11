// Versión refactorizada: nombres descriptivos
function calcularTotalConDescuento(cantidad, precioUnitario, aplicaDescuento) {
  const DESCUENTO_POR_VOLUMEN = 0.07;

  if (cantidad > 0) {
    let subtotal = cantidad * precioUnitario;
    if (aplicaDescuento === true) {
      subtotal = subtotal * (1 - DESCUENTO_POR_VOLUMEN);
    }
    return subtotal;
  } else {
    return 0;
  }
}

console.log(calcularTotalConDescuento(2, 45.99, true));