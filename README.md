# 📚 BookNest – Tu espacio, tus libros, tus historias

## 📖 1. Descripción del proyecto

**BookNest** es una biblioteca digital personal diseñada para ayudar a los lectores a organizar sus libros, registrar sus hábitos de lectura y conservar sus opiniones y experiencias literarias en un solo lugar.

El proyecto busca ofrecer una experiencia sencilla, intuitiva y visualmente agradable, permitiendo que cada usuario administre su colección de libros, consulte sus avances y guarde recuerdos de sus lecturas.

### 🎯 Objetivo

Desarrollar una aplicación web interactiva que facilite la organización y el seguimiento de la actividad lectora mediante herramientas digitales, integrando una biblioteca personal, estadísticas de progreso y un diario de lectura.

### 💡 Necesidad que atiende

BookNest surge como una propuesta para facilitar la organización de libros y el seguimiento de los hábitos de lectura, evitando tener la información dispersa en diferentes lugares.

### 👥 Público objetivo

Está dirigida a personas que disfrutan de la lectura y desean:
- Organizar sus libros digitalmente.
- Clasificar sus lecturas.
- Establecer metas personales.
- Consultar sus avances.
- Guardar reseñas y experiencias literarias.

## ✨ 2. Funcionalidades de la aplicación

BookNest está organizada en cinco secciones principales:

### 🏠 Inicio
- Saludo personalizado.
- Resumen de la actividad lectora.
- Libros registrados y lecturas actuales.
- Acceso rápido a las demás secciones.

### 📚 Mi biblioteca
- Agregar, editar y eliminar libros.
- Clasificar libros en Leídos, Leyendo y Quiero leer.
- Buscar por título o autor.
- Registrar información de los libros.
- Marcar libros como favoritos.

### 📊 Mi progreso
- Consultar el total de libros leídos.
- Establecer una meta anual.
- Visualizar el avance de lectura.
- Consultar estadísticas y gráficas.

### 📝 Diario
- Crear reseñas y opiniones.
- Guardar frases favoritas.
- Relacionar entradas con libros.
- Editar y eliminar registros.

### 👤 Mi perfil
- Personalizar el nombre y la información del usuario.
- Agregar una fotografía o avatar.
- Consultar estadísticas personales.
- Visualizar libros favoritos.

## 🛠️ 3. Herramientas y tecnologías utilizadas

Para el desarrollo de BookNest se utilizaron herramientas de inteligencia artificial y tecnologías de desarrollo web.

| Herramienta | Uso dentro del proyecto |
|---|---|
| Bolt | Creación y desarrollo de la aplicación mediante Vibe Coding. |
| React | Construcción de la interfaz y componentes. |
| JavaScript | Implementación de interacciones y funcionalidades. |
| CSS | Diseño visual, estilos y adaptación a dispositivos. |
| LocalStorage | Almacenamiento de información en el navegador. |
| GitHub | Almacenamiento y publicación del código fuente. |
| Canva | Elaboración del maquetado y propuesta visual de la aplicación. |

## 🤖 4. Prompt utilizado durante el desarrollo

# BOOKNEST – BIBLIOTECA DIGITAL PERSONAL

Actúa como un desarrollador web especializado en React, diseño UI/UX y creación de aplicaciones modernas.

Quiero desarrollar una aplicación web llamada **BookNest**, una biblioteca digital personal donde cualquier persona pueda organizar sus libros, registrar sus lecturas y guardar sus experiencias como lector.

El objetivo es crear una aplicación bonita, intuitiva, sencilla y completamente funcional, con una estética pastel inspirada en Pinterest.

# 1. CONCEPTO GENERAL

BookNest será un espacio personal para organizar lecturas.

La aplicación no tendrá conexión entre usuarios, comunidad, publicaciones públicas ni funciones sociales.

No debe solicitar correo electrónico, contraseña ni registro de cuenta.

Cuando una persona entre por primera vez, únicamente deberá escribir su nombre para comenzar a utilizar la aplicación.

Guardar su nombre y toda su información en el navegador para que pueda regresar sin tener que configurar nuevamente su espacio.

# 2. PANTALLA DE BIENVENIDA

Crear una pantalla inicial atractiva que contenga:

- Logotipo y nombre BookNest.
- Eslogan: "Tu espacio, tus libros, tus historias".
- Mensaje de bienvenida.
- Campo para escribir el nombre del usuario.
- Botón "Comenzar a leer".

Al presionar el botón, guardar el nombre y dirigir al usuario a la página principal.

No solicitar información adicional.

# 3. NAVEGACIÓN PRINCIPAL

La aplicación tendrá únicamente cinco secciones:

1. Inicio.
2. Mi biblioteca.
3. Mi progreso.
4. Diario.
5. Mi perfil.

No agregar secciones adicionales.

## SECCIÓN 1. INICIO

Crear un panel principal personalizado que muestre:

- Saludo: "¡Hola, [nombre]!".
- Mensaje breve de bienvenida.
- Total de libros leídos.
- Libros que actualmente está leyendo.
- Últimos libros agregados.
- Botón destacado "Agregar libro".
- Accesos rápidos a las demás secciones.

La pantalla debe ser visualmente agradable, ordenada y sin demasiada información.

## SECCIÓN 2. MI BIBLIOTECA

Esta será la función principal de BookNest.

Permitir organizar los libros en tres categorías:

- Leídos.
- Leyendo.
- Quiero leer.

Incluir un botón "Agregar libro" y un buscador para localizar libros registrados por título o autor.

Cada libro deberá permitir registrar:

- Portada opcional.
- Título (obligatorio).
- Autor.
- Género.
- Descripción opcional.
- Estado de lectura.
- Fecha de inicio opcional.
- Fecha de finalización opcional.
- Calificación opcional.
- Opción para marcar como favorito.

Mostrar los libros mediante tarjetas visuales con portadas, títulos, autores y estados de lectura.

Cada tarjeta debe incluir opciones para:

- Consultar información.
- Editar.
- Eliminar.

Agregar filtros para cambiar entre las tres categorías de lectura.

El formulario para agregar libros debe ser sencillo y fácil de completar.

No utilizar APIs externas para buscar libros. Todos los libros serán registrados manualmente por el usuario.

## SECCIÓN 3. MI PROGRESO

Crear un panel de estadísticas personales que muestre:

- Total de libros leídos.
- Meta anual de lectura.
- Barra visual de progreso.
- Libros terminados durante el año.
- Gráfica sencilla de libros leídos por mes.

Permitir modificar la meta anual.

Las estadísticas deben actualizarse automáticamente cuando el usuario agregue, edite o elimine libros.

Contabilizar únicamente los libros marcados como "Leídos" y utilizar su fecha de finalización para las estadísticas.

Mantener las gráficas sencillas y fáciles de interpretar.

## SECCIÓN 4. DIARIO

Crear un espacio personal para guardar experiencias relacionadas con la lectura.

Incluir:

- Crear reseñas.
- Escribir opiniones personales.
- Guardar frases favoritas.
- Asociar cada entrada con un libro registrado en la biblioteca.
- Consultar entradas anteriores.
- Editar y eliminar entradas.

Cada entrada debe mostrarse en una tarjeta con:

- Nombre del libro.
- Reseña u opinión.
- Frase favorita opcional.
- Fecha de creación.

Incluir un botón "Nueva entrada".

El formulario debe ser sencillo y permitir guardar la información fácilmente.

## SECCIÓN 5. MI PERFIL

Crear una sección con información básica del usuario:

- Nombre.
- Avatar o fotografía opcional.
- Descripción personal opcional.
- Total de libros registrados.
- Total de libros leídos.
- Libros favoritos.

Incluir las siguientes opciones:

- Cambiar nombre.
- Cambiar fotografía.
- Editar descripción.
- Borrar todos los datos y comenzar nuevamente.

Antes de borrar la información, mostrar una ventana de confirmación.

# 4. IDENTIDAD VISUAL

La apariencia de BookNest debe ser delicada, acogedora, moderna y minimalista.

Tomar como inspiración el estilo visual de Pinterest, los diarios de lectura y las bibliotecas digitales.

Utilizar exclusivamente esta paleta como base:

- Rosa pastel: #F6E9E9
- Verde salvia: #E5EBDD
- Lavanda: #E8EAF5
- Crema: #F5EBD9
- Gris café: #625B61

TIPOGRAFÍAS:

- Playfair Display para títulos y encabezados.
- DM Sans para textos, botones y formularios.

ELEMENTOS VISUALES:

- Tarjetas con esquinas redondeadas.
- Sombras suaves.
- Fondos claros.
- Iconos sencillos y consistentes.
- Portadas de libros visibles.
- Botones con colores pastel.
- Espacios amplios entre elementos.
- Jerarquía visual clara.
- Ilustraciones decorativas discretas relacionadas con la lectura.

Evitar colores demasiado saturados, exceso de elementos decorativos, animaciones innecesarias y diseños sobrecargados.

# 5. DISEÑO RESPONSIVE

Crear una sola aplicación web adaptable a computadora, tablet y teléfono celular.

No crear aplicaciones independientes para cada dispositivo.

COMPUTADORA:
- Menú lateral con las cinco secciones.
- Contenido principal organizado en tarjetas.
- Aprovechar adecuadamente el espacio disponible.

TELÉFONO CELULAR:
- Utilizar un menú inferior con cinco iconos y sus nombres.
- Adaptar las tarjetas para mostrarse en una o dos columnas según el espacio.
- Formularios fáciles de utilizar.
- Botones cómodos de seleccionar.
- Textos legibles.
- Imágenes adaptables.
- Evitar desplazamientos horizontales.

TABLET:
- Adaptar la distribución de tarjetas y navegación al tamaño de pantalla.

Mantener la misma identidad visual en todos los dispositivos.

# 6. ALMACENAMIENTO DE INFORMACIÓN

Utilizar LocalStorage del navegador para guardar:

- Nombre del usuario.
- Libros registrados.
- Portadas de libros.
- Estados de lectura.
- Fechas.
- Calificaciones.
- Favoritos.
- Meta anual.
- Entradas del diario.
- Información del perfil.

La información debe mantenerse al cerrar y volver a abrir la página desde el mismo navegador.

Actualizar la interfaz automáticamente cuando se agreguen, editen o eliminen datos.

Utilizar una estructura de almacenamiento organizada y evitar que los datos se pierdan al cambiar entre secciones.

No utilizar:

- Sistemas de autenticación.
- Registro de usuarios.
- Bases de datos externas.
- Supabase.
- APIs externas.
- Servidores para gestionar cuentas.
- Comunidad.
- Comentarios.
- Reacciones.
- Conexiones entre usuarios.

# 7. REQUISITOS TÉCNICOS

- Utilizar React.
- Crear componentes reutilizables.
- Organizar correctamente los archivos y el código.
- Utilizar CSS para personalizar el diseño.
- Implementar LocalStorage para conservar la información.
- Validar los campos obligatorios.
- Mostrar mensajes de confirmación al guardar o eliminar información.
- Implementar correctamente la navegación.
- Asegurar que todos los botones funcionen.
- Evitar errores en formularios y cálculos.
- Permitir editar y eliminar información.
- Mantener el código sencillo y fácil de modificar.

# 8. EXPERIENCIA DE USUARIO

La aplicación debe ser fácil de entender incluso para una persona que la utiliza por primera vez.

Incluir mensajes amigables cuando las secciones estén vacías.

Ejemplos:

- "Tu biblioteca está esperando sus primeras historias".
- "Todavía no tienes libros registrados".
- "Aquí aparecerán tus experiencias de lectura".

Utilizar formularios breves y evitar solicitar información innecesaria.

Mantener una navegación clara y consistente.

# 9. INDICACIONES FINALES

Construye una aplicación web funcional y no solamente una maqueta visual.

Respeta estrictamente las cinco secciones principales y las funciones descritas.

No inventes nuevas funciones ni agregues sistemas innecesarios.

Prioriza el diseño visual, la facilidad de uso, el almacenamiento correcto de los datos y la adaptación a dispositivos móviles.

Asegúrate de que las funciones principales estén conectadas entre sí. Por ejemplo, los libros agregados a Mi biblioteca deben aparecer en Inicio y actualizar las estadísticas de Mi progreso cuando corresponda.

Antes de finalizar, revisa la navegación, los formularios, los cálculos y la persistencia de la información.

**RESULTADO ESPERADO:**

Una biblioteca digital personal llamada BookNest, con diseño pastel inspirado en Pinterest, cinco secciones principales, navegación sencilla, almacenamiento local y una experiencia agradable tanto en computadora como en teléfono celular.
## 🎨 5. Identidad visual

BookNest utiliza una identidad visual inspirada en ambientes de lectura acogedores y diseños editoriales modernos.

**Paleta de colores:**

| Color | Código HEX |
|---|---|
| Rosa pastel | `#F6E9E9` |
| Verde salvia | `#E5EBDD` |
| Lavanda | `#E8EAF5` |
| Crema | `#F5EBD9` |
| Gris café | `#625B61` |

**Tipografías:**
- Playfair Display: encabezados y títulos.
- DM Sans: textos y elementos de navegación.

## 🌐 6. URL pública del proyecto

Puedes consultar la aplicación en el siguiente enlace:

**Página web:** [Agregar aquí la URL pública de BookNest]

**Repositorio de GitHub:** [Agregar aquí la URL de tu repositorio]

## ⚙️ 7. Almacenamiento de información

BookNest utiliza LocalStorage para guardar información directamente en el navegador del usuario.

Esto permite conservar los datos al cerrar y volver a abrir la aplicación desde el mismo navegador y dispositivo.

**Importante:** No existe sincronización automática entre dispositivos. Si se eliminan los datos del navegador, la información almacenada podría perderse.

## 📱 8. Diseño adaptable

La aplicación está diseñada para utilizarse en diferentes dispositivos:

- **Computadoras:** navegación lateral y distribución amplia de tarjetas.
- **Tabletas:** distribución adaptable.
- **Celulares:** navegación inferior y contenido organizado para pantallas pequeñas.

## 🎓 9. Propósito académico

BookNest es un proyecto académico desarrollado mediante Vibe Coding, cuyo propósito es aplicar conocimientos de desarrollo web, diseño UI/UX e inteligencia artificial.

A través de este proyecto se busca demostrar cómo una idea puede transformarse en una aplicación web mediante instrucciones en lenguaje natural, herramientas digitales y mejoras progresivas en el diseño y la funcionalidad.

## 💗 BookNest

**Tu espacio, tus libros, tus historias.**

Un lugar para organizar tus lecturas, registrar tus avances y conservar cada historia.
