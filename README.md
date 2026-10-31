# 📚 BookNest – Biblioteca Digital Personal

**Tu espacio, tus libros, tus historias.**

BookNest es una aplicación web diseñada para organizar libros, registrar lecturas, consultar el progreso personal y conservar experiencias relacionadas con la lectura en un solo lugar.

---

## 📌 1. Descripción del proyecto

BookNest es una biblioteca digital personal dirigida a cualquier persona que disfrute leer y desee mantener sus libros organizados de manera sencilla y visual.

La aplicación permite administrar una biblioteca personal, clasificar libros según su estado de lectura, establecer metas, consultar estadísticas y escribir reseñas o experiencias.

Su diseño está inspirado en Pinterest, con una estética pastel, minimalista y acogedora. Además, cuenta con una interfaz responsiva que se adapta a computadoras, tabletas y dispositivos móviles.

**Objetivo principal:** ofrecer un espacio digital intuitivo y personalizado que facilite la organización y el seguimiento de los hábitos de lectura.

## ✨ 2. Características y funcionalidades

BookNest cuenta con cinco secciones principales:

### 🏠 Inicio
- Saludo personalizado con el nombre del usuario.
- Resumen de la actividad lectora.
- Visualización de libros registrados y lecturas actuales.
- Accesos rápidos a las demás secciones.
- Acceso directo para agregar libros.

### 📚 Mi biblioteca
- Agregar, editar y eliminar libros.
- Clasificar libros en tres categorías: Leídos, Leyendo y Quiero leer.
- Buscar libros por título o autor.
- Registrar información, portadas y fechas de lectura.
- Asignar calificaciones.
- Marcar libros como favoritos.

### 📊 Mi progreso
- Consultar el total de libros leídos.
- Establecer y modificar una meta anual.
- Visualizar el avance mediante una barra de progreso.
- Consultar estadísticas de lectura.
- Visualizar gráficas de libros leídos por mes.

### 📝 Diario
- Crear reseñas y opiniones personales.
- Guardar frases favoritas.
- Relacionar las entradas con libros registrados.
- Consultar experiencias anteriores.
- Editar y eliminar entradas.

### 👤 Mi perfil
- Personalizar el nombre del usuario.
- Agregar una fotografía o avatar.
- Escribir una descripción personal.
- Consultar estadísticas de lectura.
- Visualizar los libros favoritos.
- Reiniciar la información de la aplicación.

## 🛠️ 3. Herramientas y tecnologías

| Herramienta | Función dentro del proyecto |
|---|---|
| **Bolt** | Herramienta de inteligencia artificial utilizada para desarrollar la aplicación mediante Vibe Coding. |
| **React** | Biblioteca de JavaScript utilizada para construir la interfaz. |
| **JavaScript** | Lenguaje utilizado para implementar la lógica y las interacciones. |
| **CSS** | Personalización visual, estilos y diseño responsivo. |
| **LocalStorage** | Almacenamiento local de la información en el navegador. |
| **GitHub** | Plataforma para alojar y compartir el código fuente. |
| **Canva** | Herramienta utilizada para elaborar el maquetado y la propuesta visual. |

## 🎨 4. Identidad visual

La identidad visual de BookNest busca transmitir tranquilidad, creatividad y comodidad mediante una combinación de colores pastel y elementos inspirados en los diarios de lectura y las bibliotecas digitales.

### Paleta de colores

| Color | Código HEX |
|---|---|
| Rosa pastel | `#F6E9E9` |
| Verde salvia | `#E5EBDD` |
| Lavanda | `#E8EAF5` |
| Crema | `#F5EBD9` |
| Gris café | `#625B61` |

### Tipografías
- **Playfair Display:** utilizada en títulos y encabezados.
- **DM Sans:** utilizada en textos, botones y elementos de navegación.

### Estilo de diseño
- Interfaz minimalista y acogedora.
- Tarjetas con esquinas redondeadas.
- Sombras suaves y fondos claros.
- Iconografía sencilla y consistente.
- Espacios amplios y jerarquía visual clara.
- Elementos decorativos relacionados con la lectura.

## 📱 5. Diseño responsivo

BookNest está diseñada para adaptarse a diferentes tamaños de pantalla sin perder su identidad visual ni sus funcionalidades.

- **Computadoras:** menú lateral y contenido distribuido en tarjetas.
- **Tabletas:** distribución adaptable según el espacio disponible.
- **Celulares:** menú de navegación inferior, tarjetas adaptables y formularios optimizados para pantallas pequeñas.

## 💾 6. Almacenamiento de información

La aplicación utiliza **LocalStorage** para guardar los datos directamente en el navegador del usuario.

Entre la información almacenada se encuentra:

- Nombre y datos del perfil.
- Libros registrados y sus portadas.
- Estados y fechas de lectura.
- Calificaciones y favoritos.
- Meta anual de lectura.
- Entradas del diario.

La información permanece guardada al cerrar y volver a abrir la aplicación desde el mismo navegador, siempre que no se eliminen los datos almacenados.

**Consideración:** BookNest no utiliza cuentas de usuario ni sincronización entre dispositivos. La información se conserva localmente en cada navegador.

## 🤖 7. Prompts utilizados para desarrollar BookNest

El desarrollo se realizó mediante Vibe Coding, utilizando instrucciones en lenguaje natural para orientar a la inteligencia artificial en la creación de la aplicación.

### 7.1 Primer prompt utilizado

### ROL
Actúa como un desarrollador web experto en React, diseño UI/UX y creación de aplicaciones web modernas, intuitivas y responsivas.

### TAREA
Desarrollar una aplicación web funcional llamada BookNest, una biblioteca digital personal que permita organizar libros, registrar lecturas, consultar el progreso y guardar experiencias lectoras.

### CONTEXTO
BookNest está dirigida a cualquier persona que disfrute leer y quiera organizar sus libros en un espacio digital personal.
La aplicación debe ser sencilla: al ingresar por primera vez, el usuario únicamente escribe su nombre y puede comenzar a utilizarla. No necesita crear una cuenta ni proporcionar información adicional.
El diseño debe ser pastel, acogedor, minimalista y estar inspirado en Pinterest.

### RESTRICCIONES
- Mantener únicamente cinco secciones: Inicio, Mi biblioteca, Mi progreso, Diario y Mi perfil.
- No solicitar correo electrónico ni contraseña.
- No implementar registro ni autenticación.
- No conectar usuarios entre sí.
- No incluir comunidad ni funciones sociales.
- No utilizar APIs externas ni bases de datos externas.
- Utilizar LocalStorage para conservar la información.
- No agregar funciones que no hayan sido solicitadas.
- Crear una sola aplicación adaptable a computadora, tablet y celular.
- Mantener el código organizado, sencillo y fácil de modificar.

### 7.2 Segundo prompt utilizado (versión detallada)

BOOKNEST – BIBLIOTECA DIGITAL PERSONAL
Actúa como un desarrollador web especializado en React, diseño UI/UX y creación de aplicaciones modernas.
Quiero desarrollar una aplicación web llamada BookNest, una biblioteca digital personal donde cualquier persona pueda organizar sus libros, registrar sus lecturas y guardar sus experiencias como lector.
El objetivo es crear una aplicación bonita, intuitiva, sencilla y completamente funcional, con una estética pastel inspirada en Pinterest.
Concepto general
BookNest será un espacio personal para organizar lecturas.
La aplicación no tendrá conexión entre usuarios, comunidad, publicaciones públicas ni funciones sociales.
No debe solicitar correo electrónico, contraseña ni registro de cuenta.
Cuando una persona entre por primera vez, únicamente deberá escribir su nombre para comenzar a utilizar la aplicación.
Guardar su nombre y toda su información en el navegador para que pueda regresar sin tener que configurar nuevamente su espacio.
Pantalla de bienvenida
Crear una pantalla inicial atractiva que contenga:
•	Logotipo y nombre BookNest.
•	Eslogan: "Tu espacio, tus libros, tus historias".
•	Mensaje de bienvenida.
•	Campo para escribir el nombre del usuario.
•	Botón "Comenzar a leer".
Al presionar el botón, guardar el nombre y dirigir al usuario a la página principal.
No solicitar información adicional.
Navegación principal
La aplicación tendrá únicamente cinco secciones:
1.	Inicio.
2.	Mi biblioteca.
3.	Mi progreso.
4.	Diario.
5.	Mi perfil.
No agregar secciones adicionales.
Sección 1. Inicio
Crear un panel principal personalizado que muestre:
•	Saludo: "¡Hola, [nombre]!".
•	Mensaje breve de bienvenida.
•	Total de libros leídos.
•	Libros que actualmente está leyendo.
•	Últimos libros agregados.
•	Botón destacado "Agregar libro".
•	Accesos rápidos a las demás secciones.
La pantalla debe ser visualmente agradable, ordenada y sin demasiada información.
Sección 2. Mi biblioteca
Esta será la función principal de BookNest.
Permitir organizar los libros en tres categorías:
•	Leídos.
•	Leyendo.
•	Quiero leer.
Incluir un botón "Agregar libro" y un buscador para localizar libros registrados por título o autor.
Cada libro deberá permitir registrar:
•	Portada opcional.
•	Título (obligatorio).
•	Autor.
•	Género.
•	Descripción opcional.
•	Estado de lectura.
•	Fecha de inicio opcional.
•	Fecha de finalización opcional.
•	Calificación opcional.
•	Opción para marcar como favorito.
Mostrar los libros mediante tarjetas visuales con portadas, títulos, autores y estados de lectura.
Cada tarjeta debe incluir opciones para:
•	Consultar información.
•	Editar.
•	Eliminar.
Agregar filtros para cambiar entre las tres categorías de lectura.
El formulario para agregar libros debe ser sencillo y fácil de completar.
No utilizar APIs externas para buscar libros. Todos los libros serán registrados manualmente por el usuario.
Sección 3. Mi progreso
Crear un panel de estadísticas personales que muestre:
•	Total de libros leídos.
•	Meta anual de lectura.
•	Barra visual de progreso.
•	Libros terminados durante el año.
•	Gráfica sencilla de libros leídos por mes.
Permitir modificar la meta anual.
Las estadísticas deben actualizarse automáticamente cuando el usuario agregue, edite o elimine libros.
Contabilizar únicamente los libros marcados como "Leídos" y utilizar su fecha de finalización para las estadísticas.
Mantener las gráficas sencillas y fáciles de interpretar.
Sección 4. Diario
Crear un espacio personal para guardar experiencias relacionadas con la lectura.
Incluir:
•	Crear reseñas.
•	Escribir opiniones personales.
•	Guardar frases favoritas.
•	Asociar cada entrada con un libro registrado en la biblioteca.
•	Consultar entradas anteriores.
•	Editar y eliminar entradas.
Cada entrada debe mostrarse en una tarjeta con:
•	Nombre del libro.
•	Reseña u opinión.
•	Frase favorita opcional.
•	Fecha de creación.
Incluir un botón "Nueva entrada".
El formulario debe ser sencillo y permitir guardar la información fácilmente.
Sección 5. Mi perfil
Crear una sección con información básica del usuario:
•	Nombre.
•	Avatar o fotografía opcional.
•	Descripción personal opcional.
•	Total de libros registrados.
•	Total de libros leídos.
•	Libros favoritos.
Incluir las siguientes opciones:
•	Cambiar nombre.
•	Cambiar fotografía.
•	Editar descripción.
•	Borrar todos los datos y comenzar nuevamente.
Antes de borrar la información, mostrar una ventana de confirmación.
Identidad visual
La apariencia de BookNest debe ser delicada, acogedora, moderna y minimalista.
Tomar como inspiración el estilo visual de Pinterest, los diarios de lectura y las bibliotecas digitales.
Utilizar exclusivamente esta paleta como base:
•	Rosa pastel: #F6E9E9
•	Verde salvia: #E5EBDD
•	Lavanda: #E8EAF5
•	Crema: #F5EBD9
•	Gris café: #625B61
Tipografías:
•	Playfair Display para títulos y encabezados.
•	DM Sans para textos, botones y formularios.
Elementos visuales:
•	Tarjetas con esquinas redondeadas.
•	Sombras suaves.
•	Fondos claros.
•	Iconos sencillos y consistentes.
•	Portadas de libros visibles.
•	Botones con colores pastel.
•	Espacios amplios entre elementos.
•	Jerarquía visual clara.
•	Ilustraciones decorativas discretas relacionadas con la lectura.
Evitar colores demasiado saturados, exceso de elementos decorativos, animaciones innecesarias y diseños sobrecargados.
Diseño responsive
Crear una sola aplicación web adaptable a computadora, tablet y teléfono celular.
No crear aplicaciones independientes para cada dispositivo.
Computadora:
•	Menú lateral con las cinco secciones.
•	Contenido principal organizado en tarjetas.
•	Aprovechar adecuadamente el espacio disponible.
Teléfono celular:
•	Utilizar un menú inferior con cinco iconos y sus nombres.
•	Adaptar las tarjetas para mostrarse en una o dos columnas según el espacio.
•	Formularios fáciles de utilizar.
•	Botones cómodos de seleccionar.
•	Textos legibles.
•	Imágenes adaptables.
•	Evitar desplazamientos horizontales.
Tablet:
•	Adaptar la distribución de tarjetas y navegación al tamaño de pantalla.
Mantener la misma identidad visual en todos los dispositivos.
Almacenamiento de información
Utilizar LocalStorage del navegador para guardar:
•	Nombre del usuario.
•	Libros registrados.
•	Portadas de libros.
•	Estados de lectura.
•	Fechas.
•	Calificaciones.
•	Favoritos.
•	Meta anual.
•	Entradas del diario.
•	Información del perfil.
La información debe mantenerse al cerrar y volver a abrir la página desde el mismo navegador.
Actualizar la interfaz automáticamente cuando se agreguen, editen o eliminen datos.
Utilizar una estructura de almacenamiento organizada y evitar que los datos se pierdan al cambiar entre secciones.
No utilizar:
•	Sistemas de autenticación.
•	Registro de usuarios.
•	Bases de datos externas.
•	Supabase.
•	APIs externas.
•	Servidores para gestionar cuentas.
•	Comunidad.
•	Comentarios.
•	Reacciones.
•	Conexiones entre usuarios.
Requisitos técnicos
•	Utilizar React.
•	Crear componentes reutilizables.
•	Organizar correctamente los archivos y el código.
•	Utilizar CSS para personalizar el diseño.
•	Implementar LocalStorage para conservar la información.
•	Validar los campos obligatorios.
•	Mostrar mensajes de confirmación al guardar o eliminar información.
•	Implementar correctamente la navegación.
•	Asegurar que todos los botones funcionen.
•	Evitar errores en formularios y cálculos.
•	Permitir editar y eliminar información.
•	Mantener el código sencillo y fácil de modificar.
Experiencia de usuario
La aplicación debe ser fácil de entender incluso para una persona que la utiliza por primera vez.
Incluir mensajes amigables cuando las secciones estén vacías.
Ejemplos:
•	"Tu biblioteca está esperando sus primeras historias".
•	"Todavía no tienes libros registrados".
•	"Aquí aparecerán tus experiencias de lectura".
Utilizar formularios breves y evitar solicitar información innecesaria.
Mantener una navegación clara y consistente.
Indicaciones finales
Construye una aplicación web funcional y no solamente una maqueta visual.
Respeta estrictamente las cinco secciones principales y las funciones descritas.
No inventes nuevas funciones ni agregues sistemas innecesarios.
Prioriza el diseño visual, la facilidad de uso, el almacenamiento correcto de los datos y la adaptación a dispositivos móviles.
Asegúrate de que las funciones principales estén conectadas entre sí. Por ejemplo, los libros agregados a Mi biblioteca deben aparecer en Inicio y actualizar las estadísticas de Mi progreso cuando corresponda.
Antes de finalizar, revisa la navegación, los formularios, los cálculos y la persistencia de la información.
Resultado esperado:
Una biblioteca digital personal llamada BookNest, con diseño pastel inspirado en Pinterest, cinco secciones principales, navegación sencilla, almacenamiento local y una experiencia agradable tanto en computadora como en teléfono celular.

## 🌐 8. Enlaces del proyecto

Completa los siguientes espacios con las direcciones correspondientes:

- **Repositorio de GitHub:** [Agregar URL del repositorio aquí]
- **Aplicación web publicada:** [Agregar URL pública de BookNest aquí]

## 🎓 9. Propósito académico: Vibe Coding

BookNest fue desarrollado como parte de un proyecto académico utilizando el enfoque de **Vibe Coding**, que consiste en describir mediante lenguaje natural las características, funcionalidades y diseño deseados para que una herramienta de inteligencia artificial ayude a construir una aplicación.

El proceso incluyó:

1. Definición del propósito y concepto de la aplicación.
2. Identificación de las funcionalidades principales.
3. Elaboración de prompts para orientar el desarrollo.
4. Generación de la estructura y la interfaz mediante Bolt.
5. Definición de la identidad visual.
6. Organización y presentación del proyecto en GitHub.

Este proyecto permitió explorar cómo la inteligencia artificial puede apoyar el desarrollo web y facilitar la creación de soluciones digitales a partir de instrucciones.

---

## 💗 BookNest

**Tu espacio, tus libros, tus historias.**

Un lugar para organizar tus lecturas, registrar tus avances y conservar cada historia.
