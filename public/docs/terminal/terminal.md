# Terminales de Windows

- Powershell
- Cmd(Command Prompt)

# Linux y Mac

- Terminal/Shell/Bash/

Una conexión 1-1

> Ubicación: Lugar de la computadora donde estas posicionado

## Comandos

- ls: Lista los directorios de donde estas parado
- ls -a: Lista todos los directorios(Incluidos los ocultos)
- pwd(Print Working Directory): Nos muestra nuestra ubicación actual
- cd(Change directory): Nos cambiamos de carpeta

```shell
cd .. # Retrocede un paso
cd nombre_carpeta # Avanzamos a esa carpeta
cd ../.. # retrocedo dos pasos
cd ../../.. # Retrocedo tres pasos
```

- mkdir: Crea una carpeta con un nombre dado

```shell
mkdir nueva_carpeta # Crea una carpeta llamada nueva carpeta
```

- rmdir: Remueve una carpeta VACíA

```shell
rmdir nueva_carpeta # Remueve la carpeta nueva_carpeta
```

- rm: Remueve un archivo

```shell
rm index.html # Remueve el archivo index.html

# Para remover una carpeta con archivos
rm -rf nombre_carpeta # Remueve la carpeta nombre_carpeta con todos sus archivos
```

> -rf significa recursivo y forzado. Cuando usamos rm -rf estamos diciendo que queremos remover una carpeta con archivos dentro. Usar con cuidado

- mv(Move): Mover elementos entre carpetas pero tambien para renombrarlas

  - mv para renombrar: Se usa moviendo la carpeta/archivo a la misma direccion
  - mv para mover: Se usa moviendo la carpeta a otra direccion

```shell
mv 4geeks-terminal .. # Mueve a otra carpeta

# ./
mv 4geeks-terminal ./terminal # Renombra la carpeta 4geeks a terminal
```

- Touch: Crear un archivo

```shell
touch styles.css # crea un archivo styles.css
```

- cp: copiar desde la terminal
- clear: Limpia la terminal
