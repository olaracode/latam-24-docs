# Introducción a Javascript

## ¿Qué es Javascript?

Javascript es un lenguaje de programación que se utiliza principalmente para crear páginas web dinámicas. Una página web dinámica es aquella que tiene elementos que cambian en el tiempo, como por ejemplo un reloj, un contador, un formulario, etc.

Javascript es un lenguaje de programación interpretado, lo que significa que no necesita ser compilado para ser ejecutado. Esto es una gran ventaja, ya que permite que el código se pueda ejecutar en cualquier navegador web sin necesidad de instalar nada adicional.

## Tipos de dato

Javascript es un lenguaje de programación de tipado dinámico, lo que significa que no es necesario declarar el tipo de dato de una variable al momento de crearla. El tipo de dato de una variable se determina automáticamente al momento de asignarle un valor.

Javascript tiene los siguientes tipos de datos:

```javascript
// Números | Integers
let numero = 10;

// Números Decimales | Floats
let decimal = 10.5;

// Cadenas de texto | Strings
let texto = "Hola mundo";

// Booleanos | Booleans
// Solo puede tener dos valores: true o false
let booleano = true;
let booleano = false;

// Arreglos | Arrays
let arreglo = [1, 2, 3, 4, 5];

// Objetos | Objects
let objeto = {
  propiedad: "valor",
  propiedad2: 10,
  propiedad3: true,
  propiedad4: [1, 2, 3, 4, 5],
  propiedad5: {
    propiedad: "valor",
  },
};

// Nulos | Null
// Solo puede tener un valor: null
let nulo = null;

// Indefinidos | Undefined
let indefinido;
let indefinido = undefined; // No recomendado

// Funciones | Functions
function funcion() {
  // ...
}
```

## Variables

Una variable es un espacio en memoria que se utiliza para almacenar un valor. En Javascript, las variables se declaran con la palabra reservada `let` o `var`.

El valor de las variables puede ser asignado al momento de declarar la variable o posteriormente.

> **Nota:** A partir de la versión ES6 de Javascript, se recomienda **no utilizar** var para declarar variables.

```javascript
// Declaración de variables
let variable;

// Asignación de valor a una variable
variable = 10;

// Declaración y asignación de valor a una variable
let variable = 10;
```

Una variable de tipo **constante** o **const** es un tipo de variable cuyo valor no puede ser modificado ni reasignado una vez que ha sido declarada.

```javascript
// Declaración de una constante
const constante = 10;

// Asignación de valor a una constante
constante = 20; // Error
```

## Operadores

Los operadores son símbolos que se utilizan para realizar operaciones entre variables y/o valores.

### Operadores aritméticos

```javascript
let suma = 1 + 1;
let resta = 1 - 1;
let multiplicacion = 1 * 1;
let division = 1 / 1;
let modulo = 1 % 1;
let incremento = 1++;
let decremento = 1--;


```

### Operadores de comparacion

```javascript
// = Asignación
let asignacion = 1;

// == Compara valor
let comparacionBasica = 1 == 1; // -> true

// === Compara valor y tipo de dato
let comparacionAvanzada = 1 === "1"; // -> false
```

### Operadores lógicos

```javascript
// && AND
let and = true && true; // -> true

// || OR
let or = true || false; // -> true

// ! NOT
let not = !true; // -> false
```

## Condicionales | Controles de flujo

Los condicionales son estructuras de control que permiten ejecutar un bloque de código si se cumple una condición.

### if

El **if** nos permite comparar **una** condición y ejecutar un bloque de código si esta se cumple.

```javascript
if (condicion) {
  // Bloque de código
}
```

### if - else

Con if - else podemos ejecutar un bloque de código si se cumple una condición y otro bloque de código si no se cumple.

```javascript
if (condicion) {
  // Bloque de código
} else {
  // Bloque de código
}
```

### if - else if - else

Con if - else if podemos comparar varias condiciones y ejecutar un bloque de código distinto para cada una de ellas.

```javascript
if (condicion) {
  // Bloque de código
} else if (condicion) {
  // Bloque de código
} else {
  // Bloque de código
}
```

## Ciclos | Bucles

Los ciclos o bucles son estructuras de control que permiten ejecutar un bloque de código varias veces.

### for

El ciclo **for** nos permite ejecutar un bloque de código un número determinado de veces.

El ciclo **for** básico tiene tres partes:

1. Inicialización: Se ejecuta una sola vez al inicio del ciclo.
2. Condición: Se evalúa al inicio de cada iteración. Si la condición se cumple, se ejecuta el bloque de código. Si no se cumple, el ciclo termina.
3. Incremento: Se ejecuta al final de cada iteración.

```javascript
for (let i = 0; i < 10; i++) {
  // Bloque de código
}
```

### for...of

El ciclo **for...of** nos permite iterar sobre un arreglo.

```javascript
let arreglo = [1, 2, 3, 4, 5];

for (let elemento of arreglo) {
  // Bloque de código para cada elemento del arreglo
}
```

### for...in

El ciclo **for...in** nos permite iterar sobre un objeto.

```javascript
let objeto = {
  propiedad: "valor",
  propiedad2: 10,
};

for (let propiedad in objeto) {
  // Bloque de código para cada propiedad del objeto
}
```

### while

El ciclo **while** nos permite ejecutar un bloque de código mientras se cumpla una condición. El ciclo **while** evalúa la condición al inicio de cada iteración y si esta se cumple, ejecuta el bloque de código.

> **IMPORTANTE** Es importante tener cuidado con los ciclos **while** ya que si la condición nunca se cumple, el ciclo se ejecutará infinitamente lo que puede causar que el navegador se bloquee o la computadora se congele.

```javascript
while (condicion) {
  // Bloque de código
}
```

### do...while

El ciclo **do...while** es similar al ciclo **while** con la diferencia de que la condición se evalúa al final de cada iteración por lo que siempre se ejecutará al menos una vez

```javascript
do {
  // Bloque de código
} while (condicion);
```

## Funciones

Las funciones son bloques de código que se pueden ejecutar en cualquier momento y que pueden recibir parámetros y retornar un valor.

Las funciones deberían ser lo más pequeñas posible y tener un único propósito. Esto nos permite reutilizarlas en distintas partes de nuestro código.

### Declaración de funciones

Al momento de crear una funcion lo primero que hay que hacer es declararla, esto quiere decir darle un nombre y declarar las instrucciones que va a ejecutar la función.

```javascript
// Declaración de una función
function nombreDeLaFuncion() {
  // Bloque de código
}
```

### Llamada de funciones

Para ejecutar una función, es necesario llamarla. Para llamar una función, se escribe el nombre de la función seguido de paréntesis. Los paréntesis indican que se esta **ejecutando|llamando** la funcion

```javascript
// Llamada de una función
nombreDeLaFuncion();
```

### Parámetros

Los parámetros son valores que se le pueden pasar a una función para que esta los utilice al momento de ejecutarse, de esta manera podemos reutilizar una función para distintos valores.

```javascript
// Declaración de una función con parámetros
function nombreDeLaFuncion(parametro1, parametro2) {
  // Bloque de código
}

// Llamada de una función con parámetros
nombreDeLaFuncion(valor1, valor2);
```

### Retorno de valores

Las funciones pueden o no retornar un valor. Para retornar un valor, se utiliza la palabra reservada `return` seguida del valor que se quiere retornar.

> **IMPORTANTE** la función termina su ejecución en el momento que retorna un valor, por lo que cualquier código que se encuentre después del `return` no se ejecutará.

```javascript
// Declaración de una función con retorno de valor
function nombreDeLaFuncion() {
  // Bloque de código
  return valor;
}

// Llamada de una función con retorno de valor
let resultado = nombreDeLaFuncion(); // Resultado ahora vale lo que retorna la función(valor)

// Ejemplo de un return que termina la ejecución de la función
function nombreDeLaFuncion() {
  // Bloque de código
  return valor;
  // Cualquier código que se encuentre después del return no se ejecutará
}

// Llamada de una función con retorno de valor
let resultado = nombreDeLaFuncion(); // Resultado ahora vale lo que retorna la función(valor)
```

Si una función no retorna ningun valor o no tiene un `return`, esta retornará `undefined`.

```javascript
function nombreDeLaFuncion() {
  // Bloque de código sin return
}

let resultado = nombreDeLaFuncion(); // Resultado ahora vale undefined
```

## Objetos

Los objetos son estructuras de datos que nos permiten almacenar distintos valores en una sola variable.

Los objetos se declaran utilizando llaves `{}` y dentro de estas se declaran las propiedades del objeto.

```javascript
let objeto = {
  propiedad: "valor",
  propiedad2: 10,
  propiedad3: true,
  propiedad4: [1, 2, 3, 4, 5],
  propiedad5: {
    propiedad: "valor",
  },
};
```

### Acceder a las propiedades de un objeto

Para acceder a las propiedades de un objeto, se utiliza la notación de punto `.` seguida del nombre de la propiedad.

```javascript
let objeto = {
  propiedad: "valor",
  propiedad2: 10,
};

let propiedad = objeto.propiedad; // propiedad ahora vale "valor"

let propiedad2 = objeto.propiedad2; // propiedad2 ahora vale 10
```

### Modificar las propiedades de un objeto

Para modificar las propiedades de un objeto, se utiliza la notación de punto `.` seguida del nombre de la propiedad y el nuevo valor.

```javascript
let objeto = {
  propiedad: "valor",
  propiedad2: 10,
};

objeto.propiedad = "nuevo valor"; // La propiedad ahora vale "nuevo valor"
```

### Agregar propiedades a un objeto

Para agregar una propiedad a un objeto, se utiliza la notación de [] y se escribe el nombre de la propiedad entre comillas `""` o sin comillas [si el nombre de la propiedad no tiene espacios](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Trabajando_con_objectos#nombres_de_propiedades_validos).

```javascript
let objeto = {
  propiedad: "valor",
  propiedad2: 10,
};

objeto["propiedad3"] = true; // Se agrega la propiedad "propiedad3" al objeto
```

### Eliminar propiedades de un objeto

Para eliminar una propiedad de un objeto, se utiliza la palabra reservada `delete` seguida de la notación de punto `.` y el nombre de la propiedad.

```javascript
let objeto = {
  propiedad: "valor",
  propiedad2: 10,
};

delete objeto.propiedad; // La propiedad "propiedad" ya no existe en el objeto
```

## Arreglos

Los arreglos son estructuras de datos que nos permiten almacenar varios valores en una sola variable.

Los arreglos se declaran utilizando corchetes `[]` y dentro de estos se declaran los valores del arreglo.

```javascript
let arreglo = [1, 2, 3, 4, 5];
```

### Acceder a los valores de un arreglo

Para acceder a los valores de un arreglo, se utiliza la notación de corchetes `[]` seguida del índice del valor que se quiere acceder. Los índices de los arreglos empiezan en 0.

```javascript
let arreglo = [1, 2, 3, 4, 5];

let valor = arreglo[0]; // valor ahora vale 1
```

### Modificar los valores de un arreglo

Para modificar los valores de un arreglo, se utiliza la notación de corchetes `[]` seguida del índice del valor que se quiere modificar y el nuevo valor. Los índices de los arreglos empiezan en 0.

```javascript
let arreglo = [1, 2, 3, 4, 5];

arreglo[0] = 10; // El primer valor del arreglo ahora vale 10
```

### Agregar valores a un arreglo

Para agregar un valor a un arreglo, se utiliza el metodo `push` seguido del valor que se quiere agregar.

```javascript
let arreglo = [1, 2, 3, 4, 5];

arreglo.push(6); // Se agrega el valor 6 al final del arreglo
```

### Eliminar valores de un arreglo

Para eliminar un valor de un arreglo, se utiliza el metodo `splice` seguido del índice del valor que se quiere eliminar y la cantidad de valores que se quieren eliminar.

```javascript
let arreglo = [1, 2, 3, 4, 5];

arreglo.splice(0, 1); // Se elimina el primer valor del arreglo
```

## Métodos de los arreglos

Los arreglos tienen varios métodos que nos permiten realizar distintas operaciones con ellos.

### forEach

El método **forEach** nos permite ejecutar una función para cada elemento del arreglo.

```javascript
let arreglo = [1, 2, 3, 4, 5];

arreglo.forEach(function (elemento) {
  // Bloque de código para cada elemento del arreglo
});
```
