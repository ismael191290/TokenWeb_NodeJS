const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();

// respuesta por default 
app.get('/', (req, res) => {
    res.json({
        text: "api works"
    });
});

// autentificarse

app.post('/api/login', (req, res) => {
    const user = { id: 1 };
    const token = jwt.sign(
        { user }, 'my_secret_key');
    res.json({
        token
    });
});


//proteger
app.get('/api/protected', ensureToken, (req, res) => {

    jwt.verify(req.token, 'my_secret_key', (err, data) => {
       // verifica si es el token
        if (err) {
            res.statusCode(403);
        } else {
            res.json({
                text: 'protected',
                data
            });
        }
    });


});


function ensureToken(req, res, next) {
    const bearheaders = req.headers['authorization'];
    console.log("Headers " + bearheaders);

    if (typeof bearheaders !== 'undefined') {
        const bearer = bearheaders.split(" ");
        const bearerToken = bearer[1];
        req.token = bearerToken;
        next();
    } else {
        res.sendStatus(403);
    }
}


// corre el servidor
app.listen(3000, () => {
    console.log("Server on port 3000 Run");
});