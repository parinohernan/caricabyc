# Documentación - CARICA

## Descripción del Proyecto

CARICA es una plataforma web que presenta una herramienta de logística para conectar camiones con cargas. El proyecto incluye una página web completa con términos y condiciones, política de privacidad y una interfaz moderna y responsive.

## Estructura del Proyecto

```
caricalegales/
├── index.html          # Página principal
├── terminos.html       # Página de términos y condiciones
├── privacidad.html     # Página de política de privacidad
├── styles.css          # Estilos CSS
├── script.js           # Funcionalidad JavaScript
├── README.md           # Información básica del proyecto
├── DOCUMENTACION.md    # Esta documentación
└── .gitignore          # Archivos a ignorar en Git
```

## Características Implementadas

### 1. Diseño Responsive
- Adaptable a dispositivos móviles, tablets y desktop
- Navegación hamburguesa para móviles
- Grid layouts flexibles

### 2. Navegación
- Menú fijo en la parte superior
- Navegación suave entre secciones
- Indicador de sección activa
- Enlaces a páginas independientes

### 3. Secciones Principales
- **Hero Section**: Presentación principal con llamadas a la acción
- **Servicios**: Descripción de las funcionalidades de CARICA
- **Descarga App**: Sección para descargar la aplicación móvil
- **Términos y Condiciones**: Documento legal completo
- **Política de Privacidad**: Información sobre manejo de datos
- **Contacto**: Formulario de contacto e información de contacto

### 4. Funcionalidades JavaScript
- Navegación móvil interactiva
- Animaciones de aparición al hacer scroll
- Validación de formularios
- Notificaciones del sistema
- Scroll suave entre secciones

### 5. Páginas Independientes
- `terminos.html`: Términos y condiciones detallados
- `privacidad.html`: Política de privacidad completa
- Navegación consistente entre páginas

## Tecnologías Utilizadas

- **HTML5**: Estructura semántica y accesible
- **CSS3**: Estilos modernos con Flexbox y Grid
- **JavaScript ES6+**: Funcionalidad interactiva
- **Font Awesome**: Iconografía
- **Google Fonts**: Tipografía Inter

## Instalación y Uso

### Requisitos
- Navegador web moderno
- Servidor web local (opcional, para desarrollo)

### Instalación Local
1. Clona el repositorio:
```bash
git clone https://github.com/parinohernan/caricabyc.git
cd caricabyc
```

2. Abre `index.html` en tu navegador o usa un servidor local:
```bash
# Con Python 3
python -m http.server 8000

# Con Node.js (si tienes http-server instalado)
npx http-server

# Con PHP
php -S localhost:8000
```

3. Accede a `http://localhost:8000` en tu navegador

## Personalización

### Colores
Los colores principales están basados en el logo de CARICA y definidos como variables CSS:
- Color primario: `#1a1a2e` (azul oscuro)
- Color secundario: `#16213e` (azul medio)
- Color de acento: `#f4d03f` (amarillo)
- Color de acento claro: `#f7dc6f` (amarillo claro)
- Color de fondo: `#e8e9eb` (plateado)
- Color de fondo claro: `#f2f3f5` (plateado claro)
- Texto principal: `#1a1a2e`
- Texto secundario: `#6b7280`

### Contenido
- Edita el contenido en los archivos HTML
- Los términos y condiciones están en `terminos.html`
- La política de privacidad está en `privacidad.html`

### Estilos
- Modifica `styles.css` para cambiar la apariencia
- Los estilos están organizados por secciones
- Incluye media queries para responsive design

## Estructura de Archivos Detallada

### index.html
- Header con navegación
- Hero section con presentación
- Sección de servicios
- Sección de contacto
- Footer con enlaces

### styles.css
- Reset y configuración base
- Header y navegación
- Hero section
- Servicios
- Secciones legales
- Contacto
- Footer
- Media queries para responsive
- Animaciones

### script.js
- Navegación móvil
- Navegación activa por scroll
- Animaciones de aparición
- Validación de formularios
- Notificaciones
- Scroll suave
- Efectos parallax

## SEO y Accesibilidad

### SEO
- Meta tags apropiados
- Estructura semántica HTML5
- Títulos descriptivos
- URLs amigables

### Accesibilidad
- Navegación por teclado
- Contraste de colores adecuado
- Textos alternativos para iconos
- Estructura de encabezados correcta

## Mantenimiento

### Actualizaciones de Contenido
1. Edita los archivos HTML correspondientes
2. Actualiza la información de contacto
3. Revisa y actualiza términos legales según sea necesario

### Actualizaciones de Estilos
1. Modifica `styles.css`
2. Prueba en diferentes dispositivos
3. Verifica la compatibilidad del navegador

### Actualizaciones de Funcionalidad
1. Edita `script.js`
2. Prueba todas las funcionalidades
3. Verifica la compatibilidad

## Despliegue

### GitHub Pages
1. Sube el código a GitHub
2. Activa GitHub Pages en la configuración del repositorio
3. Selecciona la rama main como fuente

### Servidor Web
1. Sube todos los archivos al servidor
2. Asegúrate de que `index.html` esté en la raíz
3. Verifica que todos los enlaces funcionen

### CDN (Opcional)
Para mejorar el rendimiento, considera:
- Usar un CDN para Font Awesome
- Optimizar imágenes
- Minificar CSS y JavaScript

## Contacto y Soporte

Para preguntas o soporte técnico:
- Email: info@carica.com
- Teléfono: +54 11 1234-5678

## Licencia

Este proyecto está bajo la licencia MIT. Ver el archivo LICENSE para más detalles.

## Changelog

### v1.1.3 (2024)
- Actualización del logo a la versión sin texto
- Uso de imagen desde Cloudinary para mejor rendimiento
- Ajustes en el diseño del logo para mejor presentación
- Favicon actualizado en todas las páginas

### v1.1.2 (2024)
- Nueva sección de descarga de APK
- Enlace directo a Google Drive para descarga
- Mockup de teléfono con preview de la app
- Características destacadas de la aplicación móvil

### v1.1.1 (2024)
- Cambio de fondo gris claro a plateado elegante
- Mejoras en sombras y bordes de tarjetas
- Efectos hover mejorados con color amarillo

### v1.1.0 (2024)
- Adaptación de colores al logo de CARICA
- Integración del logo como favicon
- Uso del splash como imagen de fondo en hero
- Nuevas animaciones y efectos visuales
- Mejoras en la experiencia de usuario

### v1.0.0 (2024)
- Lanzamiento inicial
- Página principal con todas las secciones
- Páginas independientes de términos y privacidad
- Diseño responsive completo
- Funcionalidades JavaScript básicas 