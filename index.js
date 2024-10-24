const express = require('express');
const app = express();
const port = 3000;
const usersRouter = require("./routes/users.js")

// Middleware
app.use(express.json());

// Users endpoint
app.use("/api/", usersRouter)

// Home GET method
app.get('/', (req, res) => {
    res.json({msg:'Welcome to my users API !'});
});

app.listen(port, () => {
    console.log(`Serveur en cours d'exécution sur http://localhost:${port}`);
});