const express = require('express');
const router = express.Router();

let estoque = [
    // Frasco
    { id: 1, name: 'Frasco 100u', quantity: 3700, logo: 'https://th.bing.com/th/id/OIP.KWiFziF3jqzP0H7I7VBeFgHaHa?w=194&h=195&c=7&r=0&o=7&cb=iwp2&pid=1.7&rm=3' },
    { id: 2, name: 'Frasco 100e', quantity: 2800, logo: 'https://th.bing.com/th/id/OIP.KWiFziF3jqzP0H7I7VBeFgHaHa?w=194&h=195&c=7&r=0&o=7&cb=iwp2&pid=1.7&rm=3' },
    { id: 3, name: 'Frasco 250u', quantity: 1710, logo: 'https://th.bing.com/th/id/OIP.KWiFziF3jqzP0H7I7VBeFgHaHa?w=194&h=195&c=7&r=0&o=7&cb=iwp2&pid=1.7&rm=3' },
    { id: 4, name: 'Frasco 250e', quantity: 2567, logo: 'https://th.bing.com/th/id/OIP.KWiFziF3jqzP0H7I7VBeFgHaHa?w=194&h=195&c=7&r=0&o=7&cb=iwp2&pid=1.7&rm=3' },
    { id: 5, name: 'Frasco 300u', quantity: 1024, logo: 'https://th.bing.com/th/id/OIP.KWiFziF3jqzP0H7I7VBeFgHaHa?w=194&h=195&c=7&r=0&o=7&cb=iwp2&pid=1.7&rm=3' },
    { id: 6, name: 'Frasco 300e', quantity: 1957, logo: 'https://th.bing.com/th/id/OIP.KWiFziF3jqzP0H7I7VBeFgHaHa?w=194&h=195&c=7&r=0&o=7&cb=iwp2&pid=1.7&rm=3' },
    { id: 7, name: 'Frasco 500', quantity: 700, logo: 'https://th.bing.com/th/id/OIP.KWiFziF3jqzP0H7I7VBeFgHaHa?w=194&h=195&c=7&r=0&o=7&cb=iwp2&pid=1.7&rm=3' },
    { id: 8, name: 'Frasco 1000', quantity: 100, logo: 'https://th.bing.com/th/id/OIP.KWiFziF3jqzP0H7I7VBeFgHaHa?w=194&h=195&c=7&r=0&o=7&cb=iwp2&pid=1.7&rm=3' },
    { id: 9, name: 'Frasco 5000ubg', quantity: 3060, logo: 'https://th.bing.com/th/id/OIP.KWiFziF3jqzP0H7I7VBeFgHaHa?w=194&h=195&c=7&r=0&o=7&cb=iwp2&pid=1.7&rm=3' },
    { id: 10, name: 'Frasco 5000ebg', quantity: 2469, logo: 'https://th.bing.com/th/id/OIP.KWiFziF3jqzP0H7I7VBeFgHaHa?w=194&h=195&c=7&r=0&o=7&cb=iwp2&pid=1.7&rm=3' },
    { id: 11, name: 'Frasco 5000uebg', quantity: 6431, logo: 'https://th.bing.com/th/id/OIP.KWiFziF3jqzP0H7I7VBeFgHaHa?w=194&h=195&c=7&r=0&o=7&cb=iwp2&pid=1.7&rm=3' },
    { id: 12, name: 'Frasco 5000b', quantity: 610, logo: 'https://th.bing.com/th/id/OIP.KWiFziF3jqzP0H7I7VBeFgHaHa?w=194&h=195&c=7&r=0&o=7&cb=iwp2&pid=1.7&rm=3' },
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
];

router.get('/', (req, res) => {
  res.json(estoque);
});

router.post('/add', (req, res) => {
  const { name, quantity } = req.body;
  const newItem = {
    id: estoque.length + 1,
    name,
    quantity: parseInt(quantity)
  };
  estoque.push(newItem);
  res.status(201).json(newItem);
});

router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  estoque = estoque.filter(item => item.id !== id);
  res.json({ message: 'Item removido' });
});

module.exports = router;
