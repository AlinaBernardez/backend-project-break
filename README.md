# Backend - Tienda de ropa

Estructura y funcionamiento backend para una tienda de ropa online:
Backend MVC creado con Node.js y Express, utilizando MongoDB como base de datos y Firebase para autenticación de administrador.
<a href='https://backend-project-break-dev-gegh.1.ie-1.fl0.io/products'>TIENDA</a>
- Los usuarios no logueados podrán acceder a todos los productos y el detalle de cada uno.
- Formulario de registro de administrador y de login del mismo.
- Los usuarios registrados y logueados podrán acceder a un listado de todos los productos y dispondrán de las siguientes acciones:
  - Añadir productos
  - Eliminar productos
  - Editar productos
 
     
## Índice

  - [Stack](#stack)
  - [Estructura de archivos](#estructura-de-archivos)
  - [Setup](#setup)
  - [Endpoints](#endpoints)
  - [Recursos](#recursos)



## Stack

[![npm][npm.js]][npm-url] [![Node][Node.js]][Node-url] [![Express][Express.js]][Express-url] [![Mongo][Mongo.js]][Mongo-url] [![Fire][Fire.js]][Fire-url]

## Estructura de archivos 

```
.
├── src
│   ├── config
│   │   ├── db.js
│   │   └── firebase.js
|   |   |__ multer.js
│   ├── controllers
│   │   ├── productController.js
│   │   └── authController.js
│   ├── models
│   │   └── Product.js
│   ├── routes
│   │   └── productRoutes.js
│   │   └── authRoutes.js
│   ├── middlewares
│   │   └── authMiddleware.js
│   └── index.js
├── test
│   └── productController.test.js
├── public
│   ├── styles.css
│   └── images
├── .env
└── package.json

```

## Setup

1. Clona el repostorio
   ```sh
   git clone https://github.com/AlinaBernardez/backend-project-break.git
   ```
2. Instala dependencias
   ```sh
   npm install
   ```
3. Crea un archivo `.env`

<p align="right">(<a href="#indice">Arriba</a>)</p>


## Endpoints

Estas son las rutas CRUD para las operaciones del backend de la tienda:

### Rutas accesibles por usuarios:
- GET /products: Devuelve todos los productos. Cada producto tendrá un enlace a su página de detalle.
- GET /products/:productId/detail: Devuelve el detalle de un producto.
- GET /products/:category: Devuelve los productos filtrados por categoría.

### Rutas accesibles por administrador:
- GET /dashboard: Devuelve el dashboard del administrador, en el que aparecen todos los artículos que se hayan subido, con la opción de editarlos o eliminarlos.
- GET /dashboard:category: Devuelve el dashboard del administrador, en el que aparecen todos los artículos que se hayan subido, filtrados por categoría.
- GET /dashboard/new: Devuelve el formulario para subir un artículo nuevo.
- POST /dashboard: Crea un nuevo producto.
- POST /dashboard/:productId/addImage: Añade una imagen al producto. Si este paso se salta, se añadirá una imagen por defecto.
- GET /dashboard/:productId/detail: Devuelve el detalle de un producto en el dashboard.
- GET /dashboard/:productId/edit: Devuelve el formulario para editar un producto.
- POST /dashboard/:productId: Actualiza un producto.
- POST /dashboard/:productId/delete: Elimina un producto.

### Funcionamiento y documentación con [![Swagger][Swagger.js]][Swagger-url]

<a href='https://backend-project-break-dev-gegh.1.ie-1.fl0.io/api-docs/'>Ver docs</a>

## Recursos
 
[npm.js]: https://img.shields.io/badge/npm-grey?style=for-the-badge&logo=npm
[npm-url]: https://www.npmjs.com/
[Node.js]: https://img.shields.io/badge/Node.js-grey?style=for-the-badge&logo=nodedotjs
[Node-url]: https://nodejs.org/en
[Express.js]: https://img.shields.io/badge/Express-grey?style=for-the-badge&logo=express
[Express-url]: https://expressjs.com/es/
[Mongo.js]: https://img.shields.io/badge/MongoDB-grey?style=for-the-badge&logo=mongodb
[Mongo-url]: https://www.mongodb.com/es
[Swagger.js]: https://img.shields.io/badge/Swagger-grey?style=for-the-badge&logo=swagger
[Swagger-url]: https://backend-project-break-dev-gegh.1.ie-1.fl0.io/api-docs/
[Fire.js]: https://img.shields.io/badge/Firebase-grey?style=for-the-badge&logo=firebase
[Fire-url]: https://firebase.google.com/?hl=es


