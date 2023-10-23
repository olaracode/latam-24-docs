# Eventos en Javascript

En JavaScript, los eventos son acciones que ocurren en el navegador, como hacer clic en un botón, mover el cursor sobre un elemento, cargar una página web, etc. Los eventos se pueden capturar y manejar en JavaScript mediante el uso de funciones de controlador de eventos.

Para agregar un controlador de eventos a un elemento en JavaScript, primero debemos seleccionar el elemento en el que queremos agregar el controlador de eventos. Luego, podemos agregar un método llamado "addEventListener" al elemento y establecer el tipo de evento que queremos manejar (por ejemplo, "click") y la función que se ejecutará cuando se produzca el evento.

## Click

```js
const button = document.querySelector("#miBoton");

button.addEventListener("click", function () {
  console.log("Se ha hecho clic en el botón");
});
```

En este ejemplo, hemos seleccionado el botón mediante el método "querySelector" y lo hemos asignado a la variable "button". Luego, hemos agregado un controlador de eventos de clic al botón mediante el método "addEventListener" y hemos especificado la función que se ejecutará cuando se haga clic en el botón.

## Submit

```html
<form id="miFormulario">
  <label>
    Nombre:
    <input type="text" name="nombre" />
  </label>
  <br />
  <label>
    Correo electrónico:
    <input type="email" name="email" />
  </label>
  <br />
  <button type="submit">Enviar</button>
</form>
```

En este ejemplo, hemos creado un formulario HTML simple que contiene campos de entrada para el nombre y el correo electrónico, y un botón de envío. Ahora podemos agregar un controlador de eventos "submit" al formulario utilizando JavaScript puro:

```js
const form = document.querySelector("#miFormulario");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const formData = new FormData(form);
  console.log(formData.get("nombre"));
  console.log(formData.get("email"));
});
```

En este ejemplo, hemos seleccionado el formulario mediante el método "querySelector" y lo hemos asignado a la variable "form". Luego, hemos agregado un controlador de eventos "submit" al formulario mediante el método "addEventListener" y hemos especificado la función que se ejecutará cuando se envíe el formulario.
