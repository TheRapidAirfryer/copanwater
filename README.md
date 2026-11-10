# Copan Water: sitio web

Sitio web de Copan Water (agua purificada, Honduras), hecho con HTML, CSS y JavaScript sin frameworks.

## Archivos
- `index.html`: estructura y contenido
- `styles.css`: estilos (los colores se cambian en `:root`)
- `script.js`: menú móvil, animaciones y formulario que abre WhatsApp

## Cómo correrlo
Necesitas [Node.js](https://nodejs.org) (versión 18 o más nueva).

```bash
npm install
npm run dev
```

Luego abre http://localhost:5173. Los cambios en los archivos se ven al instante.

Otros comandos:
- `npm run build`: genera la versión final en la carpeta `dist/`
- `npm run preview`: muestra esa versión final

## Pendiente
- Poner el número real de WhatsApp en la constante `WHATSAPP` de `script.js`
- Productos y precios reales, dirección, horario, logo y fotos
