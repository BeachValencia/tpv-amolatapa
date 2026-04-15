const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
// Railway nos dará un puerto automático, si no, usamos el 3000
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Le decimos al servidor que busque los archivos visuales en la carpeta "public"
app.use(express.static(path.join(__dirname, 'public')));

// Ruta para comprobar que el servidor está vivo
app.get('/api/estado', (req, res) => {
    res.json({ mensaje: 'Servidor TPV AmoLaTapa funcionando perfectamente 🚀' });
});

// Arrancamos el motor
app.listen(PORT, () => {
    console.log(`Motor del TPV arrancado en el puerto ${PORT}`);
});
