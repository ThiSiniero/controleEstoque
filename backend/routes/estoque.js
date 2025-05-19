const express = require('express');
const router = express.Router();

let estoque = [
    // Frasco
    { id: 1, name: 'Frasco 100u', quantity: 3700, logo: '100Ultra.png' },
    { id: 2, name: 'Frasco 100e', quantity: 2800, logo: '100Ecg.jpg' },
    { id: 3, name: 'Frasco 250u', quantity: 1710, logo: '250Ultra.png' },
    { id: 4, name: 'Frasco 250e', quantity: 2567, logo: '250Ecg.png' },
    { id: 5, name: 'Frasco 300u', quantity: 1024, logo: '300Ultra.png' },
    { id: 6, name: 'Frasco 300e', quantity: 1957, logo: '300Ecg.png' },
    { id: 7, name: 'Frasco 500', quantity: 700, logo: '500.png' },
    { id: 8, name: 'Frasco 1000', quantity: 100, logo: '1000.png' },
    { id: 9, name: 'Frasco 5000ubg', quantity: 3060, logo: 'bagUltra.png' },
    { id: 10, name: 'Frasco 5000ebg', quantity: 2469, logo: 'bagEcg.png' },
    { id: 11, name: 'Frasco 5000uebg', quantity: 6431, logo: 'bagMeios.png' },
    { id: 12, name: 'Frasco 5000b', quantity: 610, logo: 'balde.png' },
    // Caixa
    { id: 13, name: 'Caixa Frascos', quantity: 404, logo: 'https://th.bing.com/th/id/OIP.OSV6pUOkXlb3rBTed9SBbAHaFC?o=7&cb=iwp2rm=3&rs=1&pid=ImgDetMain' },
    { id: 14, name: 'Caixa Bag', quantity: 624, logo: 'https://th.bing.com/th/id/OIP.OSV6pUOkXlb3rBTed9SBbAHaFC?o=7&cb=iwp2rm=3&rs=1&pid=ImgDetMain' },
    { id: 15, name: 'Caixa Mil', quantity: 140, logo: 'https://th.bing.com/th/id/OIP.OSV6pUOkXlb3rBTed9SBbAHaFC?o=7&cb=iwp2rm=3&rs=1&pid=ImgDetMain' },
    { id: 16, name: 'Caixa Cem', quantity: 632, logo: 'https://th.bing.com/th/id/OIP.OSV6pUOkXlb3rBTed9SBbAHaFC?o=7&cb=iwp2rm=3&rs=1&pid=ImgDetMain' },
    // Etiqueta
    { id: 17, name: 'Etiqueta 1000 Ultrassom', quantity: 212, logo: 'https://i5.walmartimages.com.mx/mg/gm/3pp/asr/de361d21-73c5-491c-8db9-749cad3318ce.bf8ffebc087c22a204eb9142f33a460a.jpeg?odnHeight=2000&odnWidth=2000&odnBg=ffffff' },
    { id: 18, name: 'Etiqueta 1000 Eletrocardiograma', quantity: 167, logo: 'https://i5.walmartimages.com.mx/mg/gm/3pp/asr/de361d21-73c5-491c-8db9-749cad3318ce.bf8ffebc087c22a204eb9142f33a460a.jpeg?odnHeight=2000&odnWidth=2000&odnBg=ffffff' },
    { id: 19, name: 'Etiqueta 1000 Meios de Contato', quantity: 289, logo: 'https://i5.walmartimages.com.mx/mg/gm/3pp/asr/de361d21-73c5-491c-8db9-749cad3318ce.bf8ffebc087c22a204eb9142f33a460a.jpeg?odnHeight=2000&odnWidth=2000&odnBg=ffffff' },
    { id: 20, name: 'Etiqueta Bag Ultrassom', quantity: 125, logo: 'https://i5.walmartimages.com.mx/mg/gm/3pp/asr/de361d21-73c5-491c-8db9-749cad3318ce.bf8ffebc087c22a204eb9142f33a460a.jpeg?odnHeight=2000&odnWidth=2000&odnBg=ffffff' },
    { id: 21, name: 'Etiqueta Bag Eletrocardiograma', quantity: 178, logo: 'https://i5.walmartimages.com.mx/mg/gm/3pp/asr/de361d21-73c5-491c-8db9-749cad3318ce.bf8ffebc087c22a204eb9142f33a460a.jpeg?odnHeight=2000&odnWidth=2000&odnBg=ffffff' },
    { id: 22, name: 'Etiqueta Bag Meios de Contato', quantity: 254, logo: 'https://i5.walmartimages.com.mx/mg/gm/3pp/asr/de361d21-73c5-491c-8db9-749cad3318ce.bf8ffebc087c22a204eb9142f33a460a.jpeg?odnHeight=2000&odnWidth=2000&odnBg=ffffff' },
    { id: 23, name: 'Etiqueta 500 Ultrassom', quantity: 100, logo: 'https://i5.walmartimages.com.mx/mg/gm/3pp/asr/de361d21-73c5-491c-8db9-749cad3318ce.bf8ffebc087c22a204eb9142f33a460a.jpeg?odnHeight=2000&odnWidth=2000&odnBg=ffffff' },
    { id: 24, name: 'Etiqueta 500 Eletrocardiograma', quantity: 100, logo: 'https://i5.walmartimages.com.mx/mg/gm/3pp/asr/de361d21-73c5-491c-8db9-749cad3318ce.bf8ffebc087c22a204eb9142f33a460a.jpeg?odnHeight=2000&odnWidth=2000&odnBg=ffffff' },
    { id: 25, name: 'Etiqueta 500 Meios de Contato', quantity: 100, logo: 'https://i5.walmartimages.com.mx/mg/gm/3pp/asr/de361d21-73c5-491c-8db9-749cad3318ce.bf8ffebc087c22a204eb9142f33a460a.jpeg?odnHeight=2000&odnWidth=2000&odnBg=ffffff' },
    // Tampas
    { id: 26, name: 'Tampa Abre-Fecha', quantity: 3700, logo: 'tampaAF.png' },
    { id: 27, name: 'Tampa Bico', quantity: 2800, logo: 'tampaBico.jpg' },
    { id: 28, name: 'Tampa Bag', quantity: 1710, logo: 'tampaBag.png' },
    { id: 29, name: 'Tampa Pressao', quantity: 2567, logo: 'tampaPressao.jpg' },

  ];

router.get('/', (req, res) => {
  res.json(estoque);
});

router.get('/:id', (req, res) => {
  const itemId = parseInt(req.params.id);
  const item = estoque.find(item => item.id === itemId);
  if (!item) {
    return res.status(404).json({ error: 'Item não encontrado' });
  }
  res.json(item);
});

router.put('/add/:id', (req, res) => {
    const itemId = parseInt(req.params.id);
    const quantityToAdd = parseInt(req.body.quantity);

    if (isNaN(quantityToAdd)) {
      return res.status(400).json({ error: 'Quantidade inválida' });
    }

    const item = estoque.find(item => item.id === itemId);
    if (!item) {
        return res.status(404).json({ error: 'Item não encontrado' });
    }

    item.quantity += quantityToAdd;
    res.json(item);
});

router.put('/rm/:id', (req, res) => {
    const itemId = parseInt(req.params.id);
    const quantityToRemove = parseInt(req.body.quantity);

    if (isNaN(quantityToRemove)) {
      return res.status(400).json({ error: 'Quantidade inválida' });
    }

    const item = estoque.find(item => item.id === itemId);
    if (!item) {
        return res.status(404).json({ error: 'Item não encontrado' });
    }

    item.quantity -= quantityToRemove;
    res.json(item);
});

module.exports = router;
