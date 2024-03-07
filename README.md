# Backend - Tienda de ropa

Estructura y funcionamiento backend para una tienda de ropa online:
Backend MVC creado con Node.js y Express, utilizando MongoDB como base de datos y Firebase para autenticación de administrador.
<a href='https://backend-project-break-dev-gegh.1.ie-1.fl0.io/products'>TIENDA</a>

<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Node.js</title><path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z"/></svg>

## Índice

  - [Estructura de archivos](#estructura-de-archivos)
  - [Creación de base de datos](#creación-de-base-de-datos)
  - [Creación del servidor](#creación-del-servidor)
  - [Creación de modelos](#creación-de-modelos)
  - [Creación de rutas](#creación-de-rutas)
  - [Creación de controladores](#creación-de-controladores)
  - [Despliegue](#despliegue)
  - [Documentación](#documentación)
  - [Tests](#tests)
  - [Autenticación con Firebase](#autenticación-con-firebase)
  - [API y documentación con Swagger](#api-y-documentación-con-swagger)
  - [Recursos](#recursos)

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

<p align="right">(<a href="#readme-top">Arriba</a>)</p>




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

## Creación de controladores

A continuación crearemos el controlador de productos. Este controlador se dedicará a manejar las solicitudes CRUD de los productos. Devolverá las respuestas en formato HTML.
Para ello, crearemos algunas funciones auxiliares que nos ayudarán a devolver las vistas con SSR.

Las funciones principales del controlador serán:

- showProducts: Devuelve la vista con todos los productos.
- showProductById: Devuelve la vista con el detalle de un producto.
- showNewProduct: Devuelve la vista con el formulario para subir un artículo nuevo.
- createProduct: Crea un nuevo producto. Una vez creado, redirige a la vista de detalle del producto o a la vista de todos los productos del dashboard.
- showEditProduct: Devuelve la vista con el formulario para editar un producto.
- updateProduct: Actualiza un producto. Una vez actualizado, redirige a la vista de detalle del producto o a la vista de todos los productos del dashboard.
- deleteProduct: Elimina un producto. Una vez eliminado, redirige a la vista de todos los productos del dashboard.

Las funciones showProducts y showProductById pueden devolver respuestas ligeramente distintas si se llega desde el dashboard o desde la vista principal. Por ejemplo, si se llega desde el dashboard, se mostrará un enlace para editar o eliminar el producto. Para ello podemos utilizar la url de la petición o pasar al controlador un parámetro extra que indique si se llega desde el dashboard o no.

Para generar el html de forma más eficiente y sacarlo de la lógica, podemos crear funciones y variables auxiliares que generen el html de los productos y del formulario.
Por ejemplo:
- baseHtml: html común a todas las páginas. Puede contener elementos como la importación de estilos, etc.
- getNavBar: Genera la barra de navegación con las categorías. En caso de estar en el dashboard, también generará un enlace para subir un nuevo producto.
- getProductCards: Genera el html de los productos. Recibe un array de productos y devuelve el html de las tarjetas de los productos.
- ...

Un ejemplo de una función para generar el html de los productos podría ser:

```javascript
function getProductCards(products) {
  let html = '';
  for (let product of products) {
    html += `
      <div class="product-card">
        <img src="${product.image}" alt="${product.name}">
        <h2>${product.name}</h2>
        <p>${product.description}</p>
        <p>${product.price}€</p>
        <a href="/products/${product._id}">Ver detalle</a>
      </div>
    `;
  }
  return html;
}
```

Con estas funciones auxiliares, el controlador será más limpio y fácil de entender.
Ejemplo:

```javascript

const showProducts = async (req, res) => {
  const products = await Product.find();
  const productCards = getProductCards(products);
  const html = baseHtml + getNavBar() + productCards;
  res.send(html);
};
    
```

## Despliegue

Creamos un nuevo proyecto en fl0 y desplegamos el proyecto desde github. Recordad añadir las variables de entorno en fl0. Si no aparece el repositorio en fl0, tendremos que modificar los permisos de fl0 para que pueda acceder al repositorio.

## Documentación

Crearemos un archivo `README.md` que contenga la documentación del proyecto. En este readme explicaremos cómo poner en marcha la aplicación, las tecnologías que hemos usado, endpoints, etc.

## Bonus 1 - Tests

Para poder comprobar que el controlador de productos funciona correctamente, vamos a crear tests para las funciones. Para ello, necesitaremos instalar el paquete `jest` y crear el archivo `productController.test.js` en la carpeta `test`. En este archivo, importaremos el controlador y crearemos los tests. Podemos hacer tests tanto para las funciones que devuelven html como para las funciones que crean, actualizan o eliminan productos.


## Bonus 2 - Autenticación con Firebase

Vamos a crear un login y pass para el administrador con firebase. Para ello, necesitaremos instalar los paquetes `firebase` y `express-session` y configurar el proyecto en firebase. Podemos ver la guía de cómo hacerlo en el pdf [firebase.pdf](firebase.pdf).

Una vez configurado el proyecto en firebase, podremos crear un formulario de login. Este formulario enviará las credenciales a un endpoint que comprobará si son correctas. Si son correctas, redirigirá al dashboard. Si no, mostrará un mensaje de error. También tendremos una página de registro, a la que se podrá acceder desde el formulario de login. Además, tendremos que crear un archivo `firebase.js` que inicialice la conexión con firebase y que contenga las funciones para comprobar si las credenciales son correctas y para cerrar la sesión.

Para comprobar si las credenciales son correctas, necesitaremos el middleware `express-session` para guardar la sesión del usuario. Tendremos que modificar el archivo index.js para que inicialice el middleware y lo use en las rutas del dashboard. También tendremos que añadir una palabra secreta para la sesión en el archivo .env y crear un archivo `middlewares/authMiddleware.js` que contenga el middleware para comprobar si el usuario está autenticado. Este buscará la sesión del usuario y, si no la encuentra, redirigirá al formulario de login.

## Bonus 3 - API y documentación con Swagger

Para poder usar la aplicación con un frontend en React, vamos a crear una API que haga las mismas operaciones que el controlador de productos, pero que devuelva los datos en formato JSON. Documentaremos la API con Swagger, para que sea más fácil de entender y usar.

## Recursos

- [Express](https://expressjs.com/)
- [Mongoose](https://mongoosejs.com/)
- [Atlas](https://www.mongodb.com/cloud/atlas)
- [Fl0](https://fl0.io/)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [express-session](https://www.npmjs.com/package/express-session)
- [express.urlencoded](https://expressjs.com/en/api.html#express.urlencoded)
- [express.static](https://expressjs.com/en/api.html#express.static)
- [Template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)
- [Pug](https://pugjs.org/api/getting-started.html)
- [Firebase](https://firebase.google.com/)
  - [Firebase Auth](https://firebase.google.com/docs/auth)
  - [Get Started with Firebase Authentication on Websites](https://firebase.google.com/docs/auth/web/start)


