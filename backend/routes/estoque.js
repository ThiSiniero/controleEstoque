const express = require('express');
const router = express.Router();
const Item = require('../models/Item');

// GET todos os itens
router.get('/', async (req, res) => {
  try {
    const itens = await Item.find();
    res.json(itens);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar os itens' });
  }
});

// GET item por id
router.get('/:id', async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    if (!item) return res.status(404).json({ error: 'Item não encontrado' });
    res.json(item);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar item' });
  }
});

// PUT adicionar quantidade
router.put('/add/:id', async (req, res) => {
  try {
    const quantityToAdd = parseInt(req.body.quantity);
    if (isNaN(quantityToAdd)) return res.status(400).json({ error: 'Quantidade inválida' });

    const item = await Item.findByIdAndUpdate(
      req.params.id,
      { $inc: { quantity: quantityToAdd } },
      { new: true }
    );
    if (!item) return res.status(404).json({ error: 'Item não encontrado' });

    res.json(item);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar item' });
  }
});

// PUT remover quantidade
router.put('/rm/:id', async (req, res) => {
  try {
    const quantityToRemove = parseInt(req.body.quantity);
    if (isNaN(quantityToRemove)) return res.status(400).json({ error: 'Quantidade inválida' });

    const item = await Item.findByIdAndUpdate(
      req.params.id,
      { $inc: { quantity: -quantityToRemove } },
      { new: true }
    );
    if (!item) return res.status(404).json({ error: 'Item não encontrado' });

    res.json(item);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar item' });
  }
});

module.exports = router;
