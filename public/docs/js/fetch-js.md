# Fetch

**fetch** es una función incorporada de JavaScript que permite hacer solicitudes HTTP desde el navegador. Al usar fetch, puedes enviar solicitudes HTTP como GET, POST, PUT, DELETE, etc. y recibir respuestas en diferentes formatos como JSON, texto, etc.

## fetch con async/await

Para usar fetch con async/await, primero debemos envolver nuestra función fetch en una función async que devolverá una promesa. Luego, usaremos await para esperar la respuesta de la solicitud HTTP antes de procesarla. Veamos un ejemplo:

```jsx
async function fetchData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await response.json();
  console.log(data);
}

fetchData();
```

En este ejemplo, la función fetchData hace una solicitud HTTP a https://jsonplaceholder.typicode.com/todos/1. Usamos await para esperar la respuesta de la solicitud y luego la convertimos en un objeto JSON usando el método json(). Finalmente, imprimimos el objeto JSON en la consola.

## fetch con .then()

Para usar fetch con .then(), simplemente llamamos a la función fetch y encadenamos el método .then() para procesar la respuesta. El método .then() recibe una función de devolución de llamada que se ejecutará una vez que la respuesta de la solicitud esté lista. Veamos un ejemplo:

```jsx
function fetchData() {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((data) => console.log(data));
}

fetchData();
```

En este ejemplo, la función fetchData hace una solicitud HTTP a https://jsonplaceholder.typicode.com/todos/1. Encadenamos el método .then() dos veces: el primero convierte la respuesta en un objeto JSON y el segundo imprime el objeto JSON en la consola

## Diferencias entre fetch con async/await y con .then()

La principal diferencia entre fetch con async/await y con .then() es la sintaxis. Con async/await, podemos escribir nuestro código como si fuera síncrono, lo que lo hace más fácil de leer y entender. Por otro lado, con .then(), nuestro código puede volverse bastante anidado y difícil de seguir si encadenamos muchos métodos .then().

Otra diferencia importante es que con async/await, podemos manejar errores usando bloques try/catch. Por otro lado, con .then(), debemos manejar errores dentro de cada método .then().
