## Primer paso: Crear un array para almacenar los nombres
Declaramos la variable que va a ser fundamental para el 
almacenamiento de los nombres "let amigos =[]". 

Todos lo necesario para seguir con este paso fue sacado de el link otorgado en trello:
https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array

![Captura de pantalla 2025-02-03 123234](https://github.com/user-attachments/assets/eef5ed45-6300-49aa-9113-e4e36d0fa1c3)

## Segundo paso: Implementa una función para actualizar la lista de amigos
Crea una función que recorra el array amigos y agregue cada nombre como un elemento lista dentro de una lista HTML. Usa innerHTML para limpiar la lista antes de agregar nuevos elementos.

### Tareas especificas

Obtener el elemento de la lista: Utilizar document.getElementById() o document.querySelector() para seleccionar la lista donde se mostrarán los amigos.

Limpiar la lista existente: Establecer lista.innerHTML = "" para asegurarse de que no haya duplicados al actualizar. <br>

Iterar sobre el arreglo: Usa un bucle for para recorrer el arreglo amigos y crear elementos de lista para cada título.<br>

Agregar elementos a la lista: Para cada amigo, crear un nuevo elemento de lista.

![Captura de pantalla 2025-02-03 130836](https://github.com/user-attachments/assets/78cc47ae-5d45-4cc9-a25c-6383bf87bce1)

### .slice()

### ¿Para que sirve?

.slice() crea una copia superficial del array "amigos"<br>

No modifica el array orginal, sino que devuelve un nuevo array con los mismos <br>
https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/slice

### .sort
Sirve para ordenar el array según el valor de el Unicode(https://es.wikipedia.org/wiki/Unicode)

## Tercer paso: Implementa una función para sortear los amigos

Escribe una función que seleccione de manera aleatoria uno de los nombres almacenados en el array amigos. Usa Math.random() y Math.floor() para obtener un índice aleatorio. <br>

Validar que haya amigos disponibles: Antes de sortear, comprobar si el array amigos no está vacío.<br>

Generar un índice aleatorio: Usar Math.random() y Math.floor() para seleccionar un índice aleatorio del arreglo.<br>

Obtener el nombre sorteado: Utilizar el índice aleatorio para acceder al nombre correspondiente en el arreglo.<br>

Mostrar el resultado: Actualizar el contenido del elemento de resultado utilizando document.getElementById()  e innerHTML para mostrar el amigo sorteado.

![Captura de pantalla 2025-02-03 131535](https://github.com/user-attachments/assets/030f8c4c-366d-4f0f-aa0b-ffb77744781f)

## Cuarto paso: Implementa una función para agregar amigos
Desarrolla una función, que permita al usuario ingresar un nombre en el campo de texto y añadirlo a la lista de amigos creada anteriormente.

### Tareas específicas:
 
Capturar el valor del campo de entrada: Utilizar document.getElementById o document.querySelector para obtener el texto ingresado por el usuario.<br>

Validar la entrada: Implementar una validación para asegurarse de que el campo no esté vacío. Si está vacío, mostrar un alert con un mensaje de error: "Por favor, inserte un nombre."<br>

Actualizar el array de amigos: Si el valor es válido, añadirlo al arreglo que almacena los nombre de amigos usando el método.push().<br>

Limpiar el campo de entrada: Después de añadir el nombre, restablecer el campo de texto a una cadena vacía.

![Captura de pantalla 2025-02-03 185635](https://github.com/user-attachments/assets/539772f5-c05c-4e26-84bf-722ddda4e1cf)<br>

Aqui les dejo mi Trello por si les interesa verlo: <br>

https://trello.com/invite/b/679d4ab9bdb90edc04e129b0/ATTIf55df7ceee67fc2638cbc9b702cfe1ee8FD16E66/trello-challenge-amigo-secreto-esp






