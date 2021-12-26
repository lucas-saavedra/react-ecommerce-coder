# Proyecto Final Coder-House
### - _Realizado en [React Js](https://es.reactjs.org/) y hosteado en [Netlify](https://www.netlify.com/)_
### [Click aquí para verlo](https://react-ecommerce-coder-saavedra-lucas.netlify.app/) 
### - Incompleto para comercializar.

## Duración

- 7 Semanas
- Dedicación de  4 horas semanales

## Características
- Responsivo capaz de adaparse a pantallas estandares, tablets y celulares.
- Cuenta con un filtro sobre las categorías, al hacer clic te mostrará la lista de ítems que correspondan a esa categoría.
- Podrás navegar entre una lista de productos en un listado semi detallado, al hacer clic en alguno se desplegará una vista detallada del ítem y la opción de realizar la compra, mostrandote la opción de dirigirte al carrito o seguir comprando.
- Una vez en el carrito verás un resumen de tus productos; el subtotal y el precio total de todos los productos, dandote la opción de avanzar hacia el checkout.
- Una vez en el checkout tendrás una tabla con un resumen simple de todos tus productos elegidos y un formulario que permitirá cargar tus datos para registrar la orden a una base de datos de Firestore.


## Librerías externas

- [React Bootstrap](https://react-bootstrap.github.io/) - Ofrece multitud de componentes con los estilos de Bootstrap pero basados en React listos para utilizar y conseguir una interfaz atractiva instantáneamente, lo ultilizo para el navbar para que sea responsivo e interactivo (v2.0.2/Bootstrap v5.1.3)
- [Bootstrap](https://getbootstrap.com/)  - Bootstrap es un framework CSS utilizado en aplicaciones front-end, utilizo el CDN minificado de los estilos css (v5.1.3).
- [Font Awesome](https://fontawesome.com/) Lo utilizo para que la aplicación tenga iconos faciles de usar y dinamicos(v5).
- [Firebase](https://firebase.google.com/)  Es una plataforma en la nube para el desarrollo de aplicaciones web y móvil, lo que utilizo son sus tecnologias de bases de datos en tiempo real (Firestore). Estas se alojan en la nube, son No SQL y almacenan los datos como JSON. Permiten alojar y disponer de los datos e información de la aplicación en tiempo real. (v9.6.0).
- [react-router-dom](https://reactrouter.com/) - Usado para el sistema de navegacion entre paginas, para que esta funcione como spa (v6.0.2).
## Host / Alojamiento
- [Netlify](https://www.netlify.com/)- Netlify te permite crear, alojar y mantener tu sitio web o aplicación con implementación continua, HTTPS de 1 solo clic, entre otros.
## Instalación

Necesita [node.js](https://nodejs.org/)>= 14.0.0 y [npm](https://www.npmjs.com/) >= 5.6  para funcionar.
Instala las dependencias y dependencias del desarrollador, luego inicie el server

```sh
cd react-ecommerce-coder
npm install
```

Iniciando el servidor local...

```sh
npm run start
```

## Rutas del sitio

| Ruta | Descripción |
| ------ | ------ |
| Home | / |
| Lista de productos | / |
| Detalle de un producto | /product/{productId} |
| Lista filtrada por una categoria | /category/{categoryId} |
| Lista de productos agregados al carrito con subtotal y precio total | /cart |
| Checkout de productos y el formulario para realizar la compra, (No funcional) | /checkout








