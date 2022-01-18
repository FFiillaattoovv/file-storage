const express = require('express');
const hbs = require("hbs");

const app = express();

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

app.get('/', (req, res) => {
    res.render('index', {
        title: 'Main page',
        description: 'Output of stored files'
    });
});

app.get('/upload', (req, res) => {
    res.render('upload', {
        title: 'Upload',
        description: 'Upload the file'
    });
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server work on ${PORT} port`);
});