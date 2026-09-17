
# Laboratorio 1 — Diagnóstico técnico y flujo colaborativo

**Asignatura:** Fundamentos de Computadores (INF-225)
**Integrantes:** [Tu nombre] y [Nombre de tu compañero]

## Diagnóstico de API

API utilizada: JSONPlaceholder (https://jsonplaceholder.typicode.com)

### Ficha de registro

| Petición | Método | URL usada | Código obtenido | ¿Coincide con lo esperado? |
|----------|--------|-----------|-----------------|----------------------------|
| 1 | GET | https://jsonplaceholder.typicode.com/posts/1 | 200 OK | ✅ Sí |
| 2 | POST | https://jsonplaceholder.typicode.com/posts | 201 Created | ✅ Sí |
| 3 | DELETE | https://jsonplaceholder.typicode.com/posts/1 | 200 OK | ✅ Sí |

### Notas de diagnóstico

- El código **200** indica éxito en la solicitud.
- El código **201** confirma la creación de un recurso nuevo.
- El código **200** en DELETE indica que la operación se procesó correctamente.

## Refactorización aplicada

Se aplicaron los principios de código limpio:
- Nombres descriptivos en variables y funciones.
- Validación de entradas nulas o de tipo incorrecto.
- Constantes con significado (`DESCUENTO_POR_VOLUMEN`).

## Archivo

- `diagnostico.js`: contiene la función refactorizada.


