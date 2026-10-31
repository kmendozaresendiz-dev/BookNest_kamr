# 📚 BookNest – Biblioteca Digital Personal

**Tu espacio, tus libros, tus historias.**

## 1. Descripción del proyecto

BookNest es una aplicación web de biblioteca digital personal diseñada para ayudar a las personas a organizar sus libros, registrar sus lecturas, consultar su progreso y guardar sus experiencias lectoras en un solo lugar.

Su objetivo es ofrecer un espacio sencillo, intuitivo y acogedor donde cualquier persona pueda administrar su biblioteca personal sin necesidad de crear una cuenta ni proporcionar información adicional.

La aplicación cuenta con un diseño minimalista y pastel inspirado en Pinterest, además de una interfaz adaptable a computadoras, tablets y dispositivos móviles.

## 2. Funcionalidades de la aplicación
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
  
## 3. Herramientas y tecnologías

Para el desarrollo de BookNest se contemplan las siguientes herramientas y tecnologías:

| Herramienta | Uso |
|---|---|
| **Bolt** | Herramienta de inteligencia artificial utilizada para desarrollar la aplicación mediante Vibe Coding. |
| **React** | Biblioteca de JavaScript para construir la interfaz de usuario. |
| **JavaScript** | Lenguaje utilizado para implementar la lógica y las interacciones. |
| **CSS** | Diseño visual, estilos y adaptación a diferentes dispositivos. |
| **LocalStorage** | Almacenamiento local de la información en el navegador. |
| **GitHub** | Plataforma para alojar y compartir el código fuente del proyecto. |
| **Canva** | Elaboración del maquetado y propuesta visual de la aplicación. |

## 4. Prompts utilizados para desarrollar BookNest

## Primer prompt utilizado:

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

## Segundo prompt utilizado más detallado:

## BOOKNEST – BIBLIOTECA DIGITAL PERSONAL

Actúa como un desarrollador web especializado en React, diseño UI/UX y creación de aplicaciones modernas.

Quiero desarrollar una aplicación web llamada **BookNest**, una biblioteca digital personal donde cualquier persona pueda organizar sus libros, registrar sus lecturas y guardar sus experiencias como lector.

El objetivo es crear una aplicación bonita, intuitiva, sencilla y completamente funcional, con una estética pastel inspirada en Pinterest.

### 1. CONCEPTO GENERAL

BookNest será un espacio personal para organizar lecturas.

La aplicación no tendrá conexión entre usuarios, comunidad, publicaciones públicas ni funciones sociales.

No debe solicitar correo electrónico, contraseña ni registro de cuenta.

Cuando una persona entre por primera vez, únicamente deberá escribir su nombre para comenzar a utilizar la aplicación.

Guardar su nombre y toda su información en el navegador para que pueda regresar sin tener que configurar nuevamente su espacio.

### 2. PANTALLA DE BIENVENIDA

Crear una pantalla inicial atractiva que contenga:

- Logotipo y nombre BookNest.
- Eslogan: "Tu espacio, tus libros, tus historias".
- Mensaje de bienvenida.
- Campo para escribir el nombre del usuario.
- Botón "Comenzar a leer".

Al presionar el botón, guardar el nombre y dirigir al usuario a la página principal.

No solicitar información adicional.

### 3. NAVEGACIÓN PRINCIPAL

La aplicación tendrá únicamente cinco secciones:

1. Inicio.
2. Mi biblioteca.
3. Mi progreso.
4. Diario.
5. Mi perfil.

No agregar secciones adicionales.

### SECCIÓN 1. INICIO

Crear un panel principal personalizado que muestre:

- Saludo: "¡Hola, [nombre]!".
- Mensaje breve de bienvenida.
- Total de libros leídos.
- Libros que actualmente está leyendo.
- Últimos libros agregados.
- Botón destacado "Agregar libro".
- Accesos rápidos a las demás secciones.

La pantalla debe ser visualmente agradable, ordenada y sin demasiada información.

### SECCIÓN 2. MI BIBLIOTECA

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

### SECCIÓN 4. DIARIO

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

## 5. Identidad visual

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
  
## 6. Diseño adaptable

La aplicación está diseñada para utilizarse en diferentes dispositivos:

- **Computadoras:** navegación lateral y distribución amplia de tarjetas.
- **Tabletas:** distribución adaptable.
- **Celulares:** navegación inferior y contenido organizado para pantallas pequeñas.

## 8.Propósito académico : Vibe Coding

BookNest fue desarrollada mediante el enfoque de Vibe Coding, utilizando instrucciones escritas en lenguaje natural para orientar a una herramienta de inteligencia artificial en la construcción de la aplicación.
El proceso consistió en definir el propósito del proyecto, establecer sus características principales, indicar las restricciones técnicas y describir la identidad visual deseada.
A partir del prompt, Bolt permitió generar una propuesta de aplicación web basada en las indicaciones proporcionadas.

## 9. Consideraciones

BookNest utiliza LocalStorage para guardar la información directamente en el navegador del dispositivo. Por ello, los datos permanecen disponibles en ese mismo navegador mientras no se eliminen sus datos almacenados.

La información no se sincroniza automáticamente entre diferentes dispositivos ni navegadores.

## 💗 BookNest

**Tu espacio, tus libros, tus historias.**

Un lugar para organizar tus lecturas, registrar tus avances y conservar cada historia.
