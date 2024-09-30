# Documentación técnica del software - Tienda Online Galería Estilo

## 1. Descripción del sistema
El sistema de **Galeria Estilo** es una tienda online para múltiples tiendas y productos que ofrece funcionalidades clave como navegación por categorías, carrito de compras y procesamiento de pedidos. Está dividido en las siguientes capas:
1. **Interfaz de usuario (Frontend)**: Desarrollado utilizando HTML, CSS, JavaScript, Bootstrap para ofrecer una experiencia de usuario atractiva y responsiva.
2. **Backend (API REST con Spring Boot)**: Implementado con Java Spring Boot, el backend gestiona la lógica de negocio y las operaciones de base de datos, y se comunica con el frontend mediante APIs RESTful.
3. **Base de datos (MySQL)**: Almacena todos los datos de la aplicación, como productos, usuarios, pedidos, tiendas y más, utilizando un sistema relacional optimizado para grandes volúmenes de datos.

---

## 2. Entorno de desarrollo
| Requisitos de software | Requisitos de hardware |
|------------------------|------------------------|
|Java JDK: versión 11 o superior.|8GB de RAM o más|
|MySQL: versión 8.0|Espacio en disco: mínimo 500 MB|
|IDE: Intellij IDEA|Procesador: Intel i5 o superior|
**Configuración inicial**
1. Instalar Java JDK y configurar las variables de entorno.
2. Clonar el repositorio del proyecto.
3. Configurar las credenciales de la base de datos en el archivo `application.properties`.
4. Ejecutar el servidor y verificar que la conexión a la base de datos esté funcionando.

---

## 3. Arquitectura del software
El sistema se basa en la arquitectura **MVC** (Modelo-Vista-Controlador)
/src
  ├── main
  │   ├── java
  │   │   └── com.tiendaonline
  │   ├── resources
  │   │   ├── templates (vistas HTML)
  │   │   └── static (CSS, JS, imágenes)
  │   └── webapp
  └── test
**Descripción de módulos**:
-**Frontend**: Contiene las vistas de la tienda, gestionadas con HTML, CSS y JavaScript.
-**Backend**: Gestión de la lógica de negocio (productos, pedidos, usuarios) usando Spring Boot.
-**Base de datos**: Esquema y estructura de la base de datos relacional (MySQL).

---

## 4. Frontend - HTML, CSS, JavaScript, Bootstrap
#### Estructura del frontend
EL frontend de la tienda online ofrecerá una interfaz clara e intuitiva para los usuarios, utilizando HTML, CSS y JavaScript para la interacción dinámica. Además, se planea utilizar Bootstrap para un diseño responsivo.

##### Páginas clave
1. **Página principal**: lista de productos, con opciones de búsqueda y filtrado.
2. **Página de detalles del producto**: muestra información detallada de un producto seleccionado.
3. **Carrito de compras**: muestra los productos agregados al carrito y permite proceder al pago.
4. **Registro/Login**: formularios para el registro y autenticación de usuarios.

##### Funcionalidades dinámicas
- Integración con la API para cargar productos desde el backend.
- Carrito de compras manejado mediante JavaScript.
- Validación de formularios de registro de login.

---

## 5. Backend - Java Spring Boot
#### Arquitectura
El backend se desarrollará utilizando el framework Spring Boot, lo que permitirá una gestión eficiente de las rutas y la lógica del negocio.

##### Controladores
Los controladores manejarán las peticiones HTTP provenientes del frontend y gestionarán la lógica de negocio.
- **ProductosController**:
    - Manejarán las peticiones para ver, crear, actualizar y eliminar productos.
- **UsuariosController**:
    - Gestionará el registro, autenticación y administración de usuarios.
- **PedidosController**:
    - Se encargará de la creación y gestión de pedidos de los usuarios.

##### Servicios
Los servicios manejarán la lógica central del negocio y las reglas de los procesos de la tienda.

##### Repositorios
Se utilizarán repositorios para la conexión con la base de datos a través de **JPA** y **Hibernate**.

---

## 6. Base de datos
La base de datos será el núcleo del almacenamiento de información para la aplicación. Se diseñará con un enfoque relacional y optimizado para consultas rápidas y eficientes.

#### Tablas principales
1. **Usuarios**: Almacena la información de los usuarios, incluyendo el nombre, correo electrónico, contraseña encriptada, y rol (cliente, administrador).
2. **Productos**: Contiene los detalles de cada producto, como nombre, precio, descripción, imágenes, y categoría.
3. **Pedidos**: Registra los pedidos realizados por los usuarios, almacenando información sobre productos, cantidad, usuario y estado del pedido.
4. **Tiendas**: Almacena la información de cada tienda, como nombre, ubicación, y productos asociados.

#### Relaciones
- Un usuario puede tener múltiples pedidos.
- Un pedido puede incluir múltiples productos.
- Cada producto pertenece a una tienda.

---

## 7. API REST - Endpoints
Se definirán los siguientes endpoints para la comunicación entre el frontend y el backend:

#### Productos
- GET `/api/productos`: Listar todos los productos.
- GET `/api/productos/{id}`: Obtener detalles de un producto.
- POST `/api/productos`: Crear un nuevo producto (solo administrador).
- PUT `/api/productos/{id}`: Actualizar un producto existente (solo administrador).
- DELETE `/api/productos/{id}`: Eliminar un producto (solo administrador).

#### Usuarios:
- POST `/api/usuarios/registro`: Registrar un nuevo usuario.
- POST `/api/usuarios/login`: Autenticar un usuario y generar un token.
- GET `/api/usuarios/perfil`: Obtener detalles del perfil del usuario autenticado.

#### Pedidos:
- POST `/api/pedidos`: Crear un nuevo pedido.
- GET `/api/pedidos/{id}`: Ver detalles de un pedido específico.
- GET `/api/usuarios/{id}/pedidos`: Listar los pedidos de un usuario específico.
 
---

## 8. Despliegue
#### Entorno de producción
El sistema será desplegado en un servidor Linux utilizando Docker para facilitar la configuración y portabilidad del entorno.
##### Pasos de despliegue
1. Configurar el entorno con Docker y Docker Compose.
2. Crear las imágenes de la aplicación y la base de datos.
3. Desplegar la aplicación en un servidor AWS EC2 o similar.

Para levantar la aplicación en el servidor, utiliza el siguiente comando en tu terminal: `docker-compose up -d`

##### Configuración de variables de entorno
Las credenciales de la base de datos y las claves secretas (como las de JWT) estarán configuradas en variables de entorno en el archivo application.properties.

---

## 9. Guía de uso
La Galeria Estilo es fácil de utilizar tanto para los clientes como para los administradores. A continuación, se describe cómo interacturar con el sistema:
### 9.1 Para clientes:
1. **Registro y autenticación**:
    - Los usuarios deben registrarse o iniciar sesión con sus credenciales para acceder al catálogo de productos y realizar compras.
2. **Navegación por las tiendas y productos**:
    - Una vez dentro, los usuarios pueden navegar entre tiendas, visualizar productos y buscar por categorías o palabras clave.
3. **Agregar al carrito**:
    - Selecciona un producto y elige la cantidad deseada para agregarlo al carrito de compras.
    - El carrito es accesible desde cualquier página mediante un icono de carrito en la barra de navegación.
4. **Procesar la compra**:
    - Los usuarios pueden revisar su carrito y proceder a la página de pago donde ingresan la información de envío y el método de pago.
5. **Historial de pedidos**:
    - Después de la compra, el usuario puede revisar su historial de pedidos desde su cuenta personal.

### 9.2 Para administradores:
1. **Gestión de productos**:
    - Los administradores pueden agregar, editar y eliminar productos desde el panel de administración.
2. **Gestión de pedidos**:
    - Los administradores pueden visualizar y gestionar los pedidos, verificar los detalles del cliente y actualizar el estado del pedido.
3. **Gestión de usuarios**:
    - Los administradores tienen acceso a la lista de usuarios registrados, pudiendo modificar sus datos o roles.
4. **Dashboard**:
    - Muestra un gráfico de ventas por día, semana o mes. Permite filtrar las ventas por tienda o categoría de producto.
    - Incluye un resumen de ingresos totales, números de ventas realizadas y productos más vendidos.
    - El Dashboard incluye gráficos visuales para ayudar a los administradores a entender mejor el comportamiento de la tienda. Pueden generar reportes personalizados sobre ventas, inventario o pedidos y exportarlos en formatos como Excel o PDF.

---

## 10. Conclusión

La implementación de la tienda online **Galería Estilo** representa una solución integral para el comercio electrónico, combinando un frontend atractivo y fácil de usar con un backend robusto y eficiente. A través del uso de tecnologías modernas como Java Spring Boot, MySQL, HTML, CSS, JavaScript y Bootstrap, se ha creado un sistema que no solo facilita la navegación y compra de productos, sino que también optimiza la gestión de inventario y pedidos. Este enfoque proporciona una experiencia de usuario fluida y segura, preparando la plataforma para el crecimiento y la adaptación en un mercado en constante evolución. Además, la arquitectura basada en MVC y el uso de contenedores Docker facilitan el despliegue y la escalabilidad del sistema, lo que permite a los desarrolladores y administradores adaptar la tienda a las demandas cambiantes del mercado.