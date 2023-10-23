# Introducción a Bootstrap

## Documentación

- [Bootstrap](https://getbootstrap.com/)

## Instalación

> **Nota:** Siempre usa los valores de cdn de la ultima versión que esta en la documentación.

```html
<!-- CSS: Va en el <head> -->
<link
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
  rel="stylesheet"
  integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
  crossorigin="anonymous"
/>

<!-- JS: Va al final del body -->
<script
  src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
  integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
  crossorigin="anonymous"
></script>
```

## Contenedores

- `.container`: Contenedor con ancho fijo.
- `.container-fluid`: Contenedor con ancho completo.

## Grid

- `.row`: Fila que contiene columnas.
- `.col`: Columna.
- `.col-`: Columna con ancho automático.
- `.col-{breakpoint}-`: Columna con ancho automático en un breakpoint.
- `.col-{breakpoint}-auto`: Columna con ancho automático en un breakpoint.
- `.col-{breakpoint}-{number}`: Columna con ancho fijo en un breakpoint.
- `.col-{breakpoint}-auto`: Columna con ancho fijo en un breakpoint.

## Breakpoints

- `.col-`: Extra pequeño.
- `.col-sm-`: Pequeño.
- `.col-md-`: Mediano.
- `.col-lg-`: Grande.
- `.col-xl-`: Extra grande.

## Tipografía

- `.fs-1`: Título 2XL.
- `.fs-2`: Título XL.
- `.fs-3`: Título LG.
- `.fs-4`: Título MD.
- `.fs-5`: Título SM.
- `.fs-6`: Título XS.

## Texto

- `.text-`: Texto con alineación automática.
- `.text-start`: Texto alineado a la izquierda.
- `.text-center`: Texto centrado.
- `.text-end`: Texto alineado a la derecha.
- `.text-justify`: Texto justificado.
- `.text-wrap`: Texto con salto de línea.
- `.text-nowrap`: Texto sin salto de línea.

## Colores(Texto)

- `.text-primary`: Texto primario.
- `.text-secondary`: Texto secundario.
- `.text-success`: Texto de éxito.
- `.text-danger`: Texto de peligro.
- `.text-warning`: Texto de advertencia.
- `.text-info`: Texto de información.
- `.text-light`: Texto claro.
- `.text-dark`: Texto oscuro.

## Colores(Fondo)

- `.bg-primary`: Fondo primario.
- `.bg-secondary`: Fondo secundario.
- `.bg-success`: Fondo de éxito.
- `.bg-danger`: Fondo de peligro.
- `.bg-warning`: Fondo de advertencia.
- `.bg-info`: Fondo de información.
- `.bg-light`: Fondo claro.
- `.bg-dark`: Fondo oscuro.

## Botones

- `.btn`: Botón Base.
- `.btn-primary`: Botón primario.
- `.btn-secondary`: Botón secundario.
- `.btn-success`: Botón de éxito.
- `.btn-danger`: Botón de peligro.
- `.btn-warning`: Botón de advertencia.
- `.btn-info`: Botón de información.
- `.btn-light`: Botón claro.
- `.btn-dark`: Botón oscuro.
- `.btn-link`: Botón como enlace.
- `.btn-outline-primary`: Botón primario con borde.
- `.btn-outline-secondary`: Botón secundario con borde.
- `.btn-outline-success`: Botón de éxito con borde.
- `.btn-outline-danger`: Botón de peligro con borde.
- `.btn-outline-warning`: Botón de advertencia con borde.
- `.btn-outline-info`: Botón de información con borde.
- `.btn-outline-light`: Botón claro con borde.
- `.btn-outline-dark`: Botón oscuro con borde.
- `.btn-sm`: Botón pequeño.
