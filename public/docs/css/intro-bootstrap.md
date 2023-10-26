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

## Diseño Responsive usando Bootstrap

El diseño responsive es una técnica de diseño web que busca la correcta visualización de una misma página en distintos dispositivos. Desde ordenadores de escritorio a tablets y móviles.

Cuando usamos bootstrap tenemos que usar la grilla de bootstrap para que nuestro sitio sea responsive.

### Grilla de Bootstrap

La grilla de bootstrap esta compuesta por 12 columnas, y cada fila puede tener un máximo de 12 columnas.

Para usar la grilla de bootstrap tenemos que usar las clases `row` y `col-XX` donde `XX` es el numero de columnas que queremos que ocupe el elemento.

```html
<div class="row">
  <div class="col-12">Columna 1</div>
  <div class="col-12">Columna 2</div>
  <div class="col-12">Columna 3</div>
</div>
```

### Breakpoints

Los breakpoints son los puntos de quiebre donde se cambia el diseño de la pagina para adaptarse a distintos tamaños de pantalla.

Bootstrap tiene 5 breakpoints:

- `xs`: Extra small
- `sm`: Small
- `md`: Medium
- `lg`: Large
- `xl`: Extra large

Para usar los breakpoints tenemos que usar las clases `col-XX-YY` donde `XX` es el breakpoint y `YY` es el numero de columnas que queremos que ocupe el elemento. El breakpoint por defecto es xs lo que quiere decir que `col-xs-12` es lo mismo que `col-12`.

```html
<div class="row">
  <div class="col-12 col-md-6 col-lg-4 col-xl-3">Columna 1</div>
</div>
```

En este ejemplo la columna 1 va a ocupar 12 columnas en pantallas extra pequeñas, 6 columnas en pantallas medianas, 4 columnas en pantallas grandes y 3 columnas en pantallas extra grandes.

## Componentes de Bootstrap

Bootstrap tiene muchos componentes que podemos usar para crear sitios web. En esta sección vamos a ver algunos de los mas usados.

- Navbar
- Cards
- Forms
- Buttons
- Alerts
- Modals
- Dropdowns

## Personalizar Bootstrap

Cuando usamos bootstrap tambien podemos utilizar css para personalizar el diseño de nuestro sitio.

Para personalizar bootstrap tenemos que crear un archivo css y agregarlo a nuestro sitio.

```html
<link rel="stylesheet" href="css/style.css" />
```

En este archivo podemos sobreescribir los estilos de bootstrap.

> **Importante:** sobreescribir las clases de bootstrap puede traer problemas.

```css
/* Cambiar el color de fondo del navbar */
.navbar {
  background-color: #000;
}
```

**O preferiblemente** creamos clases personalizadas y las agregamos a los elementos que queremos personalizar.

```css
/* Agregar un borde a los botones */
.btn-custom {
  border: 1px solid #000;
}
```

```html
<button class="btn btn-custom">Boton custom</button>
```

En este ejemplo utilizamos tanto la clase btn de bootstrap como nuestra clase personalizada.

```

```
