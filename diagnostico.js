function calcularTotalConDescuento(cantidad, precioUnitario, aplicaDescuento) {
  const DESCUENTO_POR_VOLUMEN = 0.07;
  const CANTIDAD_MINIMA = 1;

  // Validación: entrada nula o tipo incorrecto
  if (cantidad === null || cantidad === undefined || typeof cantidad !== 'number') {
    return 0;
  }
  if (precioUnitario === null || precioUnitario === undefined || typeof precioUnitario !== 'number') {
    return 0;
  }

  // Validación: cantidad inválida
  if (cantidad < CANTIDAD_MINIMA) {
    return 0;
  }

  const subtotal = cantidad * precioUnitario;

  if (aplicaDescuento !== true) {
    return subtotal;
  }

  return subtotal * (1 - DESCUENTO_POR_VOLUMEN);
}

console.log(calcularTotalConDescuento(2, 45.99, true));
console.log(calcularTotalConDescuento(null, 45.99, true));
console.log(calcularTotalConDescuento("dos", 45.99, true));
console.log(calcularTotalConDescuento(-1, 45.99, true));