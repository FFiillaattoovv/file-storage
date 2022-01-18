const express = require('express');
const hbs = require("hbs");
const multer = require('multer');

const app = express();

const upload = multer({ dest: 'uploads/' });

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

const storageConfig = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null, "uploads");
    },
    filename: (req, file, cb) =>{
        cb(null, file.originalname);
    }
});

app.use(express.static(__dirname));

app.use(multer({storage:storageConfig}).single("fileData"));

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

app.post('/upload', upload.single('fileData'), (req, res, next) => {
    if (!req.file) {
        res.send('Choose file');
    } else {
        res.render('upload', {
            title: 'Upload',
            description: 'Upload the file'
        });
    }
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server work on ${PORT} port`);
});