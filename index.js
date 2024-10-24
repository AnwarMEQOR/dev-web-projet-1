const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Bienvenue sur notre API REST simple!');
});

app.listen(port, () => {
    console.log(`Serveur en cours d'exécution sur http://localhost:${port}`);
});