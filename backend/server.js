const mongoose = require('mongoose');

const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3001; // ou outra porta se preferir

mongoose.connect('mongodb+srv://thiagosiniero:qx6KEB39jXidsT2l@estoque.4dfyyur.mongodb.net/controleEstoque?retryWrites=true&w=majority&appName=estoque')
  .then(() => console.log('🟢 Conectado ao MongoDB'))
  .catch((err) => console.error('🔴 Erro ao conectar ao MongoDB:', err));

// Middleware
app.use(cors());
app.use(express.json());

// Rotas de exemplo
app.get('/', (req, res) => {
  res.send('API de Estoque funcionando!');
});

// Inicie o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

const estoqueRoutes = require('./routes/estoque');
app.use('/estoque', estoqueRoutes);