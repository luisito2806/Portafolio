// Abre un navegador sin ventana (Edge o Chrome instalados) para generar PDF e imágenes.
// Requiere: cd herramientas && npm install
const fs = require('fs');

const RUTAS = [
  process.env.NAVEGADOR,
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
  'C:/Program Files/Microsoft/Edge/Application/msedge.exe',
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium',
  '/usr/bin/microsoft-edge',
].filter(Boolean);

async function abrirNavegador() {
  let puppeteer;
  try {
    puppeteer = require('puppeteer-core');
  } catch {
    throw new Error('Falta instalar las herramientas: ejecuta  cd herramientas && npm install');
  }
  const ruta = RUTAS.find((r) => fs.existsSync(r));
  if (!ruta) throw new Error('No encontré Edge ni Chrome. Indica la ruta con la variable NAVEGADOR.');
  return puppeteer.launch({ executablePath: ruta, headless: true });
}

module.exports = { abrirNavegador };
