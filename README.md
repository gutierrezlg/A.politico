# A.POLITOCO — lector de documentos PDF

## Archivos principales
- `index.html`: portada y secciones.
- `styles.css`: diseño visual adaptable a móvil.
- `script.js`: menú, catálogo de documentos y lector PDF integrado.
- `assets/encabezado-alpolitoco.jpg`: encabezado proporcionado.
- `documentos/`: carpetas por sección.

## Cómo añadir un PDF
1. Sube el PDF a la carpeta de su sección, por ejemplo `documentos/economia/`.
2. Abre `script.js` y busca `const DOCUMENTS`.
3. En la lista de esa sección añade un objeto con el título y la ruta exacta:
   `{ title: "Informe económico", file: "documentos/economia/informe-economico.pdf" }`
4. Guarda, ejecuta `git add .`, `git commit -m "Agregar documentos"` y `git push`.
5. Cuando GitHub Pages actualice el sitio, aparecerá una tarjeta. El botón **Leer aquí** abre el PDF dentro de la página.

GitHub Pages no ofrece un listado automático de archivos de carpetas, por eso cada PDF nuevo debe registrarse también en `script.js`. Los PDF deben estar en el repositorio y ser accesibles públicamente. Los navegadores muestran PDF integrados normalmente; si un dispositivo no puede mostrarlos, se ofrecen enlaces para abrir en otra pestaña o descargar.
