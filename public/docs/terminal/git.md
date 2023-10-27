# Introducción a Git

## ¿Qué es Git?

Git es un sistema de control de versiones distribuido, gratuito y de código abierto diseñado para manejar todo, desde proyectos pequeños hasta muy grandes, con velocidad y eficiencia.

Git es fácil de aprender y tiene una huella pequeña con un rendimiento increíblemente rápido. Sobresale en proyectos tanto pequeños como grandes, gracias a su velocidad, eficiencia y soporte para tareas distribuidas y no lineales.

## ¿Qué es un sistema de control de versiones?

Un sistema de control de versiones (VCS) es una herramienta que registra los cambios en un archivo o conjunto de archivos a lo largo del tiempo para que pueda recuperar versiones específicas más adelante.

Los sistemas de control de versiones también permiten trabajar en un archivo con varias personas a la vez. Esto es muy útil cuando se trabaja en un proyecto en equipo o cuando se realiza una revisión de código.

## ¿Qué es GitHub?

GitHub es una plataforma de alojamiento de código para control de versiones y colaboración. Le permite a usted y a otros trabajar juntos en proyectos desde cualquier lugar.

## ¿Qué es un repositorio?

Un repositorio es un espacio de almacenamiento para los proyectos de software. A menudo, un repositorio se almacena en un servidor o en una base de datos, pero también puede ser un archivo o una carpeta local.

## ¿Qué es el staging area?

El área de preparación(**staging area**) es un área temporal donde Git almacena los cambios que desea incluir en su próximo commit. Puede pensar en el área de preparación como un área de ensayo para sus commits.

## ¿Qué es un commit?

Un commit es una instantánea de todos los archivos en su directorio de trabajo en un momento dado. Los commits se utilizan para crear puntos de control en su proyecto de Git.

## ¿Qué es un branch?

Un branch es una versión de un repositorio. Los repositorios de Git almacenan su historial de commits, y los branches son una forma de separar el historial de commits de un repositorio en líneas separadas de desarrollo. Por ejemplo, si tiene un repositorio para un sitio web, puede tener un branch para el código de producción y otro branch para el código de desarrollo.

## ¿Qué es un merge?

Un merge es una forma de combinar dos branches de Git. Cuando se fusionan, Git combina los cambios de ambas versiones de un archivo en una sola versión.

## ¿Qué es un pull request?

Un pull request es una forma de proponer cambios en un repositorio. Cuando crea una pull request, está proponiendo sus cambios y solicitando que alguien revise y extraiga su contribución y los fusione en su branch. Las solicitudes de extracción muestran diferencias, o diferencias, de contenido de ambos branches. Las personas que revisan los cambios pueden agregar comentarios y aprobar o rechazar la pull request.

## ¿Qué es un fork?

Un fork es una copia de un repositorio. Los forks le permiten experimentar con cambios sin afectar el proyecto original.

## ¿Qué es un clone?

Un clone es una copia de un repositorio que vive en su computadora en lugar de en un servidor en línea. Los clones de Git incluyen todos los archivos, historial y ramas del proyecto.

## ¿Qué es un push?

Un push es una forma de transferir commits de su repositorio local a un repositorio remoto. También se puede utilizar para actualizar un branch remoto con nuevos commits.

## Flujo de trabajo en Git

1. Crear un repositorio _el repositorio puede ser cualquier carpeta donde tengamos nuestro proyecto_

2. Crear un branch del feature/funcion que vamos a desarrollar

3. Hacer los cambios a los archivos

4. Agregar los cambios al área de preparación

5. Hacer un commit de los cambios

> **Si estamos trabajando solos podemos:**

6. Cambiar a la rama **main** y hacer un merge de la rama **feature/funcion**

7. Hacer un push de los cambios a la rama **main**

> **O si trabajamos en un equipo**

6. Hacer un push de los cambios a la rama **feature/funcion**

7. Crear un pull request de la rama **feature/funcion** a la rama **main** en GitHub

8. Hacer un merge de la rama **feature/funcion** a la rama **main** en GitHub

9. Cambiar a la rama main

10. Hacer git pull para traer los cambios de la rama **main** a nuestro repositorio local

11. Volver al paso uno

## Comandos de git

### git init

> **Cuidado al momento de usar git init**. Si ya existe un repositorio en el directorio actual, git init lo sobrescribirá o dara error. Si crea un repositorio en el directorio equivocado, puede sobrescribir accidentalmente cosas que no quería.

El comando `git init` crea un nuevo repositorio de Git. Puede usarlo para convertir un directorio existente en un repositorio de Git o crear un nuevo directorio y un repositorio de Git en él.

### git clone

El comando `git clone` crea una copia de un repositorio existente. Para clonar un repositorio, necesita un enlace al repositorio. El comando `git clone` toma un argumento obligatorio que es el enlace al repositorio que desea clonar.

```shell
git clone hhttps://github.com/4GeeksAcademy/4GeeksAcademy
```

### git add

El comando `git add` agrega un archivo al área de preparación. Le dice a Git que incluya las actualizaciones de un archivo en el próximo commit. Sin embargo, `git add` no afecta realmente al repositorio de Git de ninguna manera significativa, solo actualiza el área de preparación.

```shell
# Agregar un archivo específico
git add <file>

# Agregar todos los archivos
git add .
```

### git commit

El comando `git commit` crea un commit, que es como un punto de control en el historial de su proyecto de Git. Los commits son la base de su historial de proyectos en Git.

```shell
git commit -m "Mensaje del commit"
```

### git remote

El comando `git remote` le permite crear, ver y eliminar conexiones a otros repositorios. Los repositorios remotos son versiones de su proyecto que se almacenan en Internet o en un servidor de red de algún tipo. Puede tener varios repositorios remotos, cada uno de los cuales puede ser diferente.

```shell
# Ver los repositorios remotos
git remote -v

# Agregar un repositorio remoto
git remote add <nombre> <url>

# Eliminar un repositorio remoto
git remote remove <nombre>
```

### git push

El comando `git push` carga los commits de la rama local de Git a la rama remota de Git. Utiliza el nombre de la rama actual para determinar qué rama remota cargar.

```shell
# Si es la primera vez que hacemos un push
git push -u origin main # -u origin main vincula nuestro repositorio local con el repositorio remoto

# Si ya hemos hecho un push anteriormente
git push origin main
```

### git pull

El comando `git pull` obtiene los commits de la rama remota de Git y los guarda en la rama local de Git. Utiliza el nombre de la rama remota para determinar qué rama remota obtener.

```shell
# Si es la primera vez que hacemos un pull
git pull origin main

# Si ya hemos hecho un pull anteriormente
git pull
```

### git branch

El comando `git branch` le permite crear, ver y eliminar ramas. Cuando trabaja en un proyecto de Git, puede tener varias ramas para ayudarlo a realizar un seguimiento de su trabajo.

```shell
# Ver las ramas
git branch

# Crear una rama
git branch <nombre>

# Cambiar a una rama
git checkout <nombre>

# Crear una rama y cambiar a ella
git checkout -b <nombre>

# Eliminar una rama
git branch -d <nombre>
```

### git merge

El comando `git merge` le permite tomar las líneas de desarrollo independientes creadas por `git branch` y fusionarlas en una sola línea de desarrollo, generalmente para incorporar los cambios realizados en una rama en la rama principal.

```shell
# Cambiar a la rama main
git checkout main

# Hacer un merge de la rama feature/funcion a la rama main
git merge feature/funcion
```

### git status

El comando `git status` muestra el estado de los archivos en el directorio de trabajo y el área de preparación. Le permite ver qué cambios se han confirmado, cuáles están en el área de preparación y cuáles no se han rastreado.

```shell
git status
```

### git log

El comando `git log` muestra una lista de commits en una rama junto con los detalles necesarios para comprender y referenciarlos.

```shell
# Ver los commits de la rama actual
git log

# Ver los commits de todas las ramas
git log --all
```

### git checkout

El comando `git checkout` le permite cambiar entre las ramas de Git existentes. También se puede usar para crear ramas nuevas.

```shell
# Cambiar a la rama main
git checkout main

# Crear una rama y cambiar a ella
git checkout -b <nombre>
```
