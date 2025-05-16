const express = require('express');
const fileUpload = require('express-fileupload');

const app = express();

app.use(fileUpload({
  useTempFiles: true,
  tempFileDir: '/tmp/'
}));

app.get('/', (req, res) => {
  res.send(`
    <form method="POST" enctype="multipart/form-data" action="/upload">
      <input type="file" name="imagen" />
      <button type="submit">Subir</button>
    </form>
  `);
});

app.post('/upload', (req, res) => {
  console.log('req.files:', req.files);
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send('No files were uploaded.');
  }
  res.send('Archivo recibido');
});

app.listen(3000, () => console.log('Servidor en http://localhost:3000'));
