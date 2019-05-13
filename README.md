# **Data Lovers**

##  * WIKIKANTO *


### **Índice**

* Introducción " wikiKanto "
* Descripción del Proyecto
* Objetivos de Aprendizaje
* Definición del Producto
* Historia de Usuarios
   * Encuestas 
* Diseño de la interfaz de Usuario
   * Prototipo de baja Fidelidad
   * Prototipo de alta Fidelidad
   * Testeo de Usabilidad
* Pruebas Unitarias
* Consideraciones Tecnicas
* Contenido de Referencia
   * Herramientas 


***

## **Introducción**

Pokémon GO es un videojuego de realidad aumentada basado en la localización desarrollado por Niantic, Inc.para dispositivos iOS y Android. Es un videojuego gratuito pero contiene microtransacciones.El juego consiste en buscar y capturar personajes de la saga Pokémon escondidos en ubicaciones del mundo real y luchar con ellos, lo que implica desplazarse físicamente por las calles de la ciudad para progresar. La aplicación comporta un elemento de interacción social, ya que promueve reuniones físicas de los usuarios en distintas ubicaciones de sus poblaciones.
(https://pokemongolive.com/es/).

\* Puedes ver el datalle de la data en este [link (https://github.com/Laboratoria/SCL009-data-lovers/blob/master/src/data/pokemon/pokemon.json)


## ** Descripción del proyecto**

En este proyecto **construiremos  una página web para visualizar un
conjunto (set) de datos que se adecúe a lo que descubramos en la necesidad de los usuarios.

En este proyecto nos enforcaremos en realizar una pagina web interartiva, donde usuarios ,tanto principiantes(en el cual esta enfocado principalmente el desarrollo de nuestra paguina) y usuarios expertos, puedan realizar una busqueda mas eficientes ,para conocer los tipos de pokemon que  extisten, ordenarlos por nombre  y de esa forma desarrollar una busqueda mas adecuada a lo que cada usuario necesita y de esta manera desarrollar una nueva experiencia en cada una de sus busquedas y sus batallas con los contrincantes.

Como entrega final,tendremos una pagina que permitira visualizar la data,filtrar por tipo de pokemon,tambien se podra realizar un orden alfabetico por nombre .


## ** Objetivos de aprendizaje**

El objetivo principal de este proyecto sera basado diseñar y construir una
interfaz web donde se pueda visualizar y manipular data, entendiendo lo que el
usuario necesite.

Aprendizajes a desarrollar:

* Aplicar y profundizar todo lo aprendido en el proyecto anterior.
* Crear historias de usuarios.
* Escribir y trabajar con **historias de usuario**, sus definiciones 
  (_definition of done_) en la organización y planificación del proyecto.
* Definir qué data y de qué forma mostrarla en el producto, basándote en
  tu **entendimiento del usuario**.
* Crear productos que sigan los **principios básicos de diseño visual** y
  las **heurísticas de usabilidad**.
* Iterar el diseño del producto, basándote en los resultados de los
  **tests de usabilidad**.
* Manipular **_arreglos_ (_arrays_) y _objetos_ (_objects_)**.
* **Manipular el DOM** (agregar elementos dinámicamente basados en la data).
* **Manejar eventos del DOM** para permitir interacción con el usuario
  (filtrado, ordenado).
* Entender los beneficios y complejidades de **trabajar en equipo** en un
  ambiente de incertidumbre.


### ** Definición del producto**

El proceso de diseño se desarrollo analizando los resultados de encuestas realizadas a través de internet y en Parque Forestal a diferentes grupos de usuarios.
El producto final resuelve problemas a usuarios tanto como principiantes y expertos,es decir,lograran conocer los diversos tipos de Pokemon que existen,tambien conocer sus nombres y poder ordenarlos . El usuario al manejar esta informacion podra tambien saber mas sobre ellos y cual es una  mejora para poder desarrollar sus batallas en los  gimnasios con distintos contrincantes.



### ** Historias de usuario**


Nuestra Historias de usuarios, se desarrollo basandose encuentas realizadas a traves de internet y en el Parque Forestal.
Se encuesto un total de 98 usuarios.
Algunas preguntas realizadas fueron:

¿ Por que jugaban ?
Tiempo aproximado que llevaban jugando
Nivel de jugador
Horas semales de juego
¿Si recien empezaran a jugar, queles hubiese gustado saber ?
Se saben todos los tipos de Pokemon
Se saben todos los nombres de Pokemon
¿ Cuanto tiempo se demora en nacer un Pokemon?
¿ Que estrategias conoces?

Con toda la informacion que recolectamos , nuestra historia de usuario es la siguiente:

* `COMO     =     JUGADOR`
* `QUIERO   =     APRENDER NOMBRES Y TIPOS DE POKEMON`
* `PARA     =     DESAFIAR A OTROS JUGADORES, PARA GANAR BATALLAS Y TENER UN GIMNASIO`

##  * Criterios de Aceptación *

* Buscar por tipo cada Pokemon
* Buscar un tipo en especial
* Lista de Pokemones del mismo tipo
* Seleccionar Pokemon de su gusto
* Que aparesca informacion (id,imagen,nombre,tipo,debilidades,altura,peso)
* Escoger Pokemon seleccionado o buscar otro

* Ordenar por nombre los Pokemones de la lista


### ** Diseño de la Interfaz de Usuario**

#### Prototipo de baja fidelidad

Durante el trabajo se realizaron varios sketches de nuestro prototipo usando papel y lapiz.
<a href="https://ibb.co/2vSs0LG"><img src="https://i.ibb.co/rx3cKLD/DSC-0049.jpg" alt="DSC-0049" border="0"></a>


<a href="https://ibb.co/NSLtg7d"><img src="https://i.ibb.co/HdrBLXf/DSC-0050.jpg" alt="DSC-0050" border="0"></a>


Los prototipos de baja fidelidad, fueron utilizados en la primera entrevista, siendo de gran utilidad para poder realizar los primeros cambios en el proyecto.


#### Prototipo de alta fidelidad

En diseño de alta fidelidad, se realizaron los cambios que los usuarios recomendaron.
<a href="https://ibb.co/02BVyrB"><img src="https://i.ibb.co/Gps3QRs/DSC-0083.jpg" alt="DSC-0083" border="0"></a>

#### Testeos de usabilidad


Se realizaron varios tests de usabilidad con distintos usuarios, en distintos fases del proyecto y con los resultados obtenidos, se realizo una mejora importante en la propuesta final del proyecto, se incluyo, mas imformacion de los Pokemones, se mejora los botones, se realizo un cambio de imagen de la pantalla principal.








### ** Pruebas unitarias**

Se realizaron varias puebas unitarias , teniendo en consideracion los siguientes datos:

* `filterData(data, condition)`: esta función `filter` o filtrar recibiría la
  data, y nos retornaría aquellos datos que sí cumplan con la condición.

* `sortData(data, sortBy, sortOrder)`: esta función `sort` u ordenar
  recibe tres parámetros.
  El primer parámetro, `data`, nos entrega los datos.
  El segundo parámetro, `sortBy`, nos dice con respecto a cuál de los campos de
  la data se quiere ordenar.
  El tercer parámetro, `sortOrder`, indica si se quiere ordenar de manera
  ascendente o descendente.

* `computeStats(data)`: la función `compute` o calcular, nos permitirá hacer
  cálculos estadísticos básicos para ser mostrados de acuerdo a la data
  proporcionada.




## ** Consideraciones técnicas**

La lógica del proyecto  esta implementada completamente en JavaScript
(ES6), HTML y CSS. 


El _boilerplate_ contiene una estructura de archivos como punto de partida así
como toda la configuración de dependencias:

```text
.
├── package.json
├── README.md
├── src
│   ├── data
│   │   ├
│   │   │   
│   │   │   
│   │   │ 
│   │   │  
│   │   │   
│   │   ├── pokemon
│   │     ├── pokemon.js
│   │      └── pokemon.json
│   │   
│   │    
│   │   
│   │   
│   │       
│   │       
│   ├── data.js
│   ├── index.html
│   ├── main.js
│   └── style.css
└── test
    └── data.spec.js

8 directories, 17 files
```

### `src/index.html`

Al igual que en el proyecto anterior, existe un archivo `index.html`. Es la página que se mostrará al usuario. También nos sirve para indicar qué scripts usaremos y unir todo lo que hemos hecho.

En este archivo encontraremos una serie de _etiquetas_ (_tags_) `<script>`
_comentadas_. Para _cargar_ las diferentes fuentes. Cada uno estos scripts asignará una variable
global con la data correspondiente a esa fuente de datos.

Nosotros descomentamos la siguiente línea:

```html
<!-- <script src="./data/pokemon/pokemon.js"></script> -->
```

La línea quedara así:

```html
<script src="./data/pokemon/pokemon.js"></script>
```

Y ahora tendremos la variable global `POKEMON` disponible en nuestros otros
scripts (como `src/data.js` o `src/main.js`).

### `src/main.js`

Usamos `src/main.js` para todo nuestro código que tenga que ver con
mostrar los datos en la pantalla. Con esto nos referimos básicamente a la
interacción con el DOM. Operaciones como creación de nodos, registro de
manejadores de eventos (_event listeners_ o _event handlers_), ....


### `src/data.js`

La parte principal de nuestro proyecto esta en la manipulacion de los datos a traves de arreglos y objetos.En este archivo la idea es contener toda la funcionalidad que corresponda a obtener, procesar y manipular datos.


### `src/data`

En esta carpeta están los datos de nuestra fuentes. Encontrarems una
carpeta por cada fuente, y dentro de cada carpeta dos archivos: uno con la
extensión `.js` y otro `.json`. Ambos archivos contienen la misma data; la
diferencia es que el `.js` lo usaremos a través de una etiqueta `<script>`,
mientras que el `.json` está ahí para opcionalmente cargar la data de forma
asíncrona con [`fetch()`](https://developer.mozilla.org/es/docs/Web/API/Fetch_API)


### `test/data.spec.js`

Tendrás también que completar las pruebas unitarias de las funciones
implementadas en el archivo `data.js`.

En esta carpeta realizamos los pre test
En esta carpeta realizamos el test,para verficar que nuestros funciones y datos ingresados esten en forma 
correcta.


### **Contenido de Referencia **


* Diseño de experiencia de usuario (User Experience Design)
* Investigación con usuario
* Principios de diseño visual
* Desarrollo Front-end
* Unidad de testing en curso de JavaScript en LMS
* Unidad de arreglos en curso de JavaScript en LMS
* Unidad de objetos en curso de JavaScript en LMS
* Unidad de funciones en curso de JavaScript en LMS
* Unidad de DOM en curso de Browser JavaScript en LMS
* Array en MDN
* Array.sort en MDN
* Array.map en MDN
* Array.filter en MDN
* Array.reduce en MDN
* Array.forEach en MDN
* Object.keys en MDN
* Object.entries en MDN
* Fetch API en MDN
* json.org

## Herramientas
* Git
* GitHub
* GitHub Pages
* Node.js
* Visual studio code



