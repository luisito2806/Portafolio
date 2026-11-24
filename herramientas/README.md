# Cómo editar el portafolio

Las páginas (`index.html`, `galeria.html`, `cv.html` y sus versiones en inglés dentro de `en/`) **se generan** a partir de los archivos de esta carpeta. No las edites a mano: los cambios se perderían la próxima vez que se generen.

## Pasos

1. Edita el archivo que corresponda:

   | Archivo | Qué contiene |
   |---|---|
   | `perfil.js` | Tus datos, LinkedIn, textos de la portada, formación y habilidades (español e inglés) |
   | `proyectos.js` | Cada proyecto en español: descripción, qué hiciste, tecnologías, enlaces y fotos |
   | `proyectos.en.js` | La traducción al inglés de cada proyecto y de cada foto |
   | `explicaciones.js` | La explicación en español de cada foto de las galerías |
   | `seguridad.js` | La sección “Seguridad en mis proyectos” |

2. En la carpeta del portafolio ejecuta:

   ```bash
   node herramientas/generar.js
   ```

   Al terminar te avisa si falta alguna traducción o si quedan datos con `PENDIENTE`. Esos datos se ven resaltados en amarillo en la página hasta que los cambies.

3. Abre `index.html` en el navegador para revisar, y sube los cambios con git.

## Agregar un proyecto o una foto

- Las fotos van en `img/galeria/<proyecto>/` en formato WebP.
- Agrega la foto a `proyectos.js` (nombre del archivo sin extensión y su título), su explicación a `explicaciones.js`, su traducción a `proyectos.en.js` y sus medidas en píxeles a `medidas.json`.
- Para que un proyecto aparezca en la portada, agrégalo también en la sección de proyectos de `generar.js` (funciones `destacado` o `tarjeta`).
