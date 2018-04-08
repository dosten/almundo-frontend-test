Almundo Frontend Test
=====================

Demo
----

Se encuentra disponible una versión online de este mismo código corriendo en
Heroku, la cual se puede encontrar [aca](https://almundo-frontend-test.herokuapp.com).

Instalación
-----------

Este proyecto hace uso de Yarn como package manager, por lo cual existe un
`yarn.lock` que define las versiones exactas de las dependencias usadas.
Para instalar las dependencias se debe correr:

```bash
$ yarn install
```

Compilación
-----------

Este proyecto hace uso de Webpack para hacer el build del cliente.
Para hacer el build se debe correr:

```bash
$ NODE_ENV=development yarn run build
```

Nota: Se debe elegir el environment correcto ya que de esto depende que se apliquen
distintas optimizaciones de CSS, JavaScript, etc.

API
---

Para poner online tanto el cliente como la API se debe correr:

```bash
$ MONGODB_URI=mongodb://localhost:27017/almundo PORT=3000 node index.js
```

Esto expone la API, cliente e imágenes de hoteles.

Nota: La variable de ambiente `$PORT` es requerida.

Nota: Se asume que dentro de la base de datos seleccionada existe una colección llamada `hotels`.

Tecnologías Usadas
------------------

- Webpack
- PostCSS
- Babel
- Vue.js
- Express
- Axios
- MongoDB

Notas
-----

- La maquinación fue realizada usando Flexbox por lo cual el soporte esta limitado
  a IE 10+ [(mas info aca)](https://caniuse.com/#feat=flexbox)

- Los assets SVG ya fueron optimizados manualmente fuera del flow de build
  usando SVGO, a pesar de que se podría haber hecho dentro del build seria una
  tarea que consume tiempo y siempre devuelve el mismo resultado por lo que creo
  que lo mejor es subir directamente al repositorio la versión optimizada y no
  el generado por Adobe Illustrator.

Issues
------

- Si estas viendo la web adaptada a teléfonos, ocultas los filtros y volvés a la
  versión desktop, entonces los filtros quedan ocultos y no hay forma de volver
  a mostrarlos, igualmente este es un issue no critico ya que en la vida real es
  poco probable que pase esto, o estas en mobile o estas en desktop.

- Hago uso de algunas dependencias con versiones 0.x las cuales se suponen que no
  están listas para su uso real, pero por motivos de tiempo las use en este examen.

- Hay algunas imágenes de hoteles que existen pero el contenido esta vació, no
  realice ningún manejo de esto ya que considero que es un error del examen.
