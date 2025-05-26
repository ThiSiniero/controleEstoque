const mongoose = require('mongoose');
const Item = require('./models/Item');

mongoose.connect('mongodb+srv://thiagosiniero:qx6KEB39jXidsT2l@estoque.4dfyyur.mongodb.net/controleEstoque?retryWrites=true&w=majority&appName=estoque')
.then(async () => {
  console.log('Conectado ao MongoDB');

  // Dados iniciais
  const dados = [
    { name: 'Frasco 100u', quantity: 3700, logo: '100Ultra.png' },
    { name: 'Frasco 100e', quantity: 2800, logo: '100Ecg.jpg' },
    { name: 'Frasco 250u', quantity: 1710, logo: '250Ultra.png' },
    { name: 'Frasco 250e', quantity: 2567, logo: '250Ecg.png' },
    { name: 'Frasco 300u', quantity: 1024, logo: '300Ultra.png' },
    { name: 'Frasco 300e', quantity: 1957, logo: '300Ecg.png' },
    { name: 'Frasco 500', quantity: 700, logo: '500.png' },
    { name: 'Frasco 1000', quantity: 100, logo: '1000.png' },
    { name: 'Frasco 5000ubg', quantity: 3060, logo: 'bagUltra.png' },
    { name: 'Frasco 5000ebg', quantity: 2469, logo: 'bagEcg.png' },
    { name: 'Frasco 5000uebg', quantity: 6431, logo: 'bagMeios.png' },
    { name: 'Frasco 5000b', quantity: 610, logo: 'balde.png' },
    // Caixa
    { name: 'Caixa Frascos', quantity: 404, logo: 'https://th.bing.com/th/id/OIP.OSV6pUOkXlb3rBTed9SBbAHaFC?o=7&cb=iwp2rm=3&rs=1&pid=ImgDetMain' },
    { name: 'Caixa Bag', quantity: 624, logo: 'https://th.bing.com/th/id/OIP.OSV6pUOkXlb3rBTed9SBbAHaFC?o=7&cb=iwp2rm=3&rs=1&pid=ImgDetMain' },
    { name: 'Caixa Mil', quantity: 140, logo: 'https://th.bing.com/th/id/OIP.OSV6pUOkXlb3rBTed9SBbAHaFC?o=7&cb=iwp2rm=3&rs=1&pid=ImgDetMain' },
    { name: 'Caixa Cem', quantity: 632, logo: 'https://th.bing.com/th/id/OIP.OSV6pUOkXlb3rBTed9SBbAHaFC?o=7&cb=iwp2rm=3&rs=1&pid=ImgDetMain' },
    // Etiqueta
    { name: 'Etiqueta 1000 Ultrassom', quantity: 212, logo: 'https://i5.walmartimages.com.mx/mg/gm/3pp/asr/de361d21-73c5-491c-8db9-749cad3318ce.bf8ffebc087c22a204eb9142f33a460a.jpeg?odnHeight=2000&odnWidth=2000&odnBg=ffffff' },
    { name: 'Etiqueta 1000 Eletrocardiograma', quantity: 167, logo: 'https://i5.walmartimages.com.mx/mg/gm/3pp/asr/de361d21-73c5-491c-8db9-749cad3318ce.bf8ffebc087c22a204eb9142f33a460a.jpeg?odnHeight=2000&odnWidth=2000&odnBg=ffffff' },
    { name: 'Etiqueta 1000 Meios de Contato', quantity: 289, logo: 'https://i5.walmartimages.com.mx/mg/gm/3pp/asr/de361d21-73c5-491c-8db9-749cad3318ce.bf8ffebc087c22a204eb9142f33a460a.jpeg?odnHeight=2000&odnWidth=2000&odnBg=ffffff' },
    { name: 'Etiqueta Bag Ultrassom', quantity: 125, logo: 'https://i5.walmartimages.com.mx/mg/gm/3pp/asr/de361d21-73c5-491c-8db9-749cad3318ce.bf8ffebc087c22a204eb9142f33a460a.jpeg?odnHeight=2000&odnWidth=2000&odnBg=ffffff' },
    { name: 'Etiqueta Bag Eletrocardiograma', quantity: 178, logo: 'https://i5.walmartimages.com.mx/mg/gm/3pp/asr/de361d21-73c5-491c-8db9-749cad3318ce.bf8ffebc087c22a204eb9142f33a460a.jpeg?odnHeight=2000&odnWidth=2000&odnBg=ffffff' },
    { name: 'Etiqueta Bag Meios de Contato', quantity: 254, logo: 'https://i5.walmartimages.com.mx/mg/gm/3pp/asr/de361d21-73c5-491c-8db9-749cad3318ce.bf8ffebc087c22a204eb9142f33a460a.jpeg?odnHeight=2000&odnWidth=2000&odnBg=ffffff' },
    { name: 'Etiqueta 500 Ultrassom', quantity: 100, logo: 'https://i5.walmartimages.com.mx/mg/gm/3pp/asr/de361d21-73c5-491c-8db9-749cad3318ce.bf8ffebc087c22a204eb9142f33a460a.jpeg?odnHeight=2000&odnWidth=2000&odnBg=ffffff' },
    { name: 'Etiqueta 500 Eletrocardiograma', quantity: 100, logo: 'https://i5.walmartimages.com.mx/mg/gm/3pp/asr/de361d21-73c5-491c-8db9-749cad3318ce.bf8ffebc087c22a204eb9142f33a460a.jpeg?odnHeight=2000&odnWidth=2000&odnBg=ffffff' },
    { name: 'Etiqueta 500 Meios de Contato', quantity: 100, logo: 'https://i5.walmartimages.com.mx/mg/gm/3pp/asr/de361d21-73c5-491c-8db9-749cad3318ce.bf8ffebc087c22a204eb9142f33a460a.jpeg?odnHeight=2000&odnWidth=2000&odnBg=ffffff' },
    // Tampas
    { name: 'Tampa Abre-Fecha', quantity: 3700, logo: 'tampaAF.png' },
    { name: 'Tampa Bico', quantity: 2800, logo: 'tampaBico.jpg' },
    { name: 'Tampa Bag', quantity: 1710, logo: 'tampaBag.png' },
    { name: 'Tampa Pressao', quantity: 2567, logo: 'tampaPressao.jpg' },
  ];

  await Item.deleteMany({});
  await Item.insertMany(dados);
  console.log('Itens inseridos com sucesso!');
  mongoose.disconnect();
})
.catch(err => {
  console.error('Erro ao conectar ou inserir:', err);
});
