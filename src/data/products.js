// src/data/products.js



// ⚠️ ATENÇÃO: Se usar imagens locais, descomente e ajuste os caminhos:

// const PaoFrances = require('../../assets/images/pao_frances.jpg');

// const BoloCenoura = require('../../assets/images/bolo_cenoura.jpg');



export const products = [

  {
    id: '1',
    name: 'Pão francês',
    price: 1.50,
    description: 'Pão tradicional, crocante por fora e macio por dentro. Perfeito para o café.',
    image: 'https://i.imgur.com/M96FQQm.jpeg',
  },

  {
    id: '2',
    name: 'Bolo de cenoura',
    price: 18.00,
    description: 'Bolo caseiro de cenoura, com deliciosa cobertura de chocolate. Padrão 500g.',
    image: 'https://receitasdebemcasado.com/wp-content/uploads/2025/05/receitas-com-bolo-de-cenoura.png',
  },

  {
    id: '3',
    name: 'Sonho de creme',
    price: 4.50,
    description: 'Massa frita e macia, recheado com um creme de baunilha especial da casa.',
    image: 'https://www.bakels.com.br/wp-content/uploads/sites/33/2020/08/IMG_9063-560x370.jpg',
  },

  {
    id: '4',
    name: 'Pão de queijo pequeno',
    price: 2.00,
    description: 'O tradicional pão de queijo, crocante por fora e macio por dentro. Peso unitário.',
    image: 'https://i.imgur.com/M2wfDcy.jpeg',
  },

  {
    id: '5',
    name: 'Pão de queijo grande',
    price: 2.00,
    description: 'O clássico pão de queijo mineiro, macio e dourado, em um tamanho generoso para matar a fome. Peso unitário.',
    image: 'https://i.imgur.com/RFpYrEa.jpeg',
  },

  {
    id: '6',
    name: 'Palito de queijo',
    price: 2.00,
    description: 'Crocante por fora, macio por dentro. O formato perfeito para petiscar ou mergulhar no seu café. Peso unitário.',
    image: 'https://i.imgur.com/vAFchml.jpeg',
  },

  {
    id: '7',
    name: 'Carolina',
    price: 2.00,
    description: 'Uma pequena bomba de sabor! Massa leve recheada com doce de leite cremoso e coberta com chocolate. Peso unitário.',
    image: 'https://i.imgur.com/dU30Cmd.jpeg',
  },

  {
    id: '8',
    name: 'Torta de frango',
    price: 12.00,
    description: 'Massa saborosa que derrete na boca, recheada com um frango desfiado suculento e bem temperado.',
    image: 'https://i.imgur.com/9Ol10uI.jpeg',
  },

  {
    id: '9',
    name: 'Baguete recheada',
    price: 17.00,
    description: 'Pão crocante generosamente recheado com queijo, presunto e um toque de orégano.',
    image: 'https://i.imgur.com/UqeYToa.jpeg',
    hasOptions: true, // NOVO: Flag para indicar que tem opções
    options: [ // NOVO: Lista de opções
    { name: 'Sabor', choices: ['Frango com catupiry', 'Presunto e queijo'] },
    // Você pode adicionar outras opções aqui se for o caso, como:
    // { name: 'Tamanho', choices: ['Pequena', 'Média', 'Grande'] },
    ]
  },

  {
    id: '10',
    name: 'Esfiha aberta',
    price: 9.00,
    description: 'Massa fofinha e leve com uma cobertura saborosa de calabresa, frango, queijo ou presunto com queijo e temperada no ponto certo. Peso unitário.',
    image: 'https://i.imgur.com/W5TF1Ve.jpeg',
    hasOptions: true, // NOVO: Flag para indicar que tem opções
    options: [ // NOVO: Lista de opções
    { name: 'Sabor', choices: ['Frango', 'Calabresa', 'Queijo', 'Presunto e queijo'] },
    // Você pode adicionar outras opções aqui se for o caso, como:
    // { name: 'Tamanho', choices: ['Pequena', 'Média', 'Grande'] },
  ]
  },

  {
    id: '11',
    name: 'Lanche natural (Mini baguete)',
    price: 10.00,
    description: 'Uma opção leve e fresca. Mini baguete recheada com patê, alface e tomate.',
    image: 'https://i.imgur.com/iWq9KA9.jpeg',
  },

  {
    id: '12',
    name: 'Bolo gelado',
    price: 8.00,
    description: 'Massa de chocolate fofinha e molhadinha, embrulhada para manter o frescor. Um clássico que refresca o dia. Peso unitário.',
    image: 'https://i.imgur.com/mju7nA3.jpeg',
  },

  {
    id: '13',
    name: 'Nózinho',
    price: 3.00,
    description: 'Rosquinha frita macia, passada no açúcar e canela. Impossível comer um só! Peso unitário.',
    image: 'https://i.imgur.com/l7g2i88.jpeg',
  },

  {
    id: '14',
    name: 'Mini bolinho de cenoura',
    price: 7.00,
    description: 'A combinação perfeita de bolo de cenoura fofinho com uma cobertura generosa de brigadeiro cremoso. Peso unitário.',
    image: 'https://i.imgur.com/gxUhrV1.jpeg',
  },

  {
    id: '15',
    name: 'Fatia húngara',
    price: 9.00,
    description: 'Pão doce macio, enrolado com um delicioso recheio de coco e leite condensado. Peso unitário.',
    image: 'https://i.imgur.com/EbCqJIw.jpeg',
  },

  {
    id: '16',
    name: 'Creme de padaria',
    price: 7.00,
    description: 'O clássico creme de confeiteiro, liso e aveludado, com um leve toque de baunilha. Perfeito para rechear sonhos e pães. Peso unitário.',
    image: 'https://i.imgur.com/MoCEt1M.jpeg',
  },

  {
    id: '17',
    name: 'Pudim',
    price: 10.00,
    description: 'O clássico pudim de leite condensado, lisinho e coberto com uma calda de caramelo dourada e brilhante. Peso unitário.',
    image: 'https://i.imgur.com/tF2WHPc.jpeg',
  },

  {
    id: '18',
    name: 'Patê de frango',
    price: 10.00,
    description: 'Pão com um recheio cremoso e saboroso de patê de frango caseiro. Peso unitário.',
    image: 'https://i.imgur.com/fUqw6wW.jpeg',
  },

  {
    id: '19',
    name: 'Salgado assado',
    price: 9.00,
    description: 'Uma opção mais leve. Massa macia e dourada no forno, com diversos sabores de recheio (como frango ou presunto e queijo). Peso unitário.',
    image: 'https://i.imgur.com/RDiWO4W.jpeg',
    hasOptions: true, // NOVO: Flag para indicar que tem opções
    options: [ // NOVO: Lista de opções
    { name: 'Sabor', choices: ['Enroladinho de presunto e queijo', 'Esfiha de carne', 'Esfiha de frango', 'Hot dog', 'Hamburguer'] },
    // Você pode adicionar outras opções aqui se for o caso, como:
    // { name: 'Tamanho', choices: ['Pequena', 'Média', 'Grande'] },
  ]
  },

  {
    id: '20',
    name: 'Pão de leite',
    price: 2.50,
    description: 'Um pãozinho extremamente macio, fofo e levemente adocicado. Ideal para o café da manhã. Peso unitário.',
    image: 'https://i.imgur.com/1bYhOHI.jpeg',
  },

  {
    id: '21',
    name: 'Bomba de brigadeiro',
    price: 5.00,
    description: 'Massa tradicional de bomba, generosamente recheada com brigadeiro cremoso e coberta com granulado. Peso unitário.',
    image: 'https://i.imgur.com/Rsb9HiL.jpeg',
  },

    {
    id: '22',
    name: 'Dadinho',
    price: 3.50,
    description: 'O sabor da infância. Doce tradicional de amendoim, macio e com um gosto inconfundível. Peso unitário.',
    image: 'https://i.imgur.com/3pIckbd.jpeg',
  },

    {
    id: '23',
    name: 'Chipa',
    price: 3.50,
    description: 'A tradicional rosquinha salgada de polvilho e queijo, com uma textura única e um sabor marcante. Peso unitário.',
    image: 'https://i.imgur.com/znOC4TL.jpeg',
  },

];