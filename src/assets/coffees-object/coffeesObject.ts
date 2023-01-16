import latte from '../coffee-images/latte.png'
import arabe from '../coffee-images/arabe.png'
import cubano from '../coffee-images/cubano.png'
import irlandes from '../coffee-images/irlandes.png'
import havaiano from '../coffee-images/havaiano.png'
import expresso from '../coffee-images/expresso.png'
import americano from '../coffee-images/americano.png'
import capuccino from '../coffee-images/capuccino.png'
import macchiato from '../coffee-images/macchiato.png'
import mocaccino from '../coffee-images/mocaccino.png'
import cafeGelado from '../coffee-images/cafe-gelado.png'
import cafeComLeite from '../coffee-images/cafe-com-leite.png'
import expressoCremoso from '../coffee-images/expresso-cremoso.png'
import chocolateQuente from '../coffee-images/chocolate-quente.png'

const coffees = [
  {
    id: '1',
    title: 'Expresso Tradicional',
    tags: ['Tradicional'],
    description: 'O tradicional café feito com água quente e grãos moídos',
    image: expresso,
    price: 5.0,
    amount: 0,
  },
  {
    id: '2',
    title: 'Expresso Americano',
    tags: ['Tradicional'],
    description: 'Expresso diluído, menos intenso que o tradicional',
    image: americano,
    price: 4.0,
    amount: 0,
  },
  {
    id: '3',
    title: 'Expresso Cremoso',
    tags: ['Tradicional'],
    description: 'Café expresso tradicional com espuma cremosa',
    image: expressoCremoso,
    price: 6.0,
    amount: 0,
  },
  {
    id: '4',
    title: 'Expresso Gelado',
    tags: ['Tradicional', 'Gelado'],
    description: 'Bebida preparada com café expresso e cubos de gelo',
    image: cafeGelado,
    price: 7.0,
    amount: 0,
  },
  {
    id: '5',
    title: 'Café com Leite',
    tags: ['Tradicional', 'Com Leite'],
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    image: cafeComLeite,
    price: 6.0,
    amount: 0,
  },
  {
    id: '6',
    title: 'Latte',
    tags: ['Tradicional', 'Com Leite'],
    description:
      'Uma dose de café expresso, com o dobro de leite e espuma cremosa',
    image: latte,
    price: 8.0,
    amount: 0,
  },
  {
    id: '7',
    title: 'Capuccino',
    tags: ['Tradicional', 'Com Leite'],
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    image: capuccino,
    price: 10.0,
    amount: 0,
  },
  {
    id: '8',
    title: 'Macchiato',
    tags: ['Tradicional', 'Com Leite'],
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    image: macchiato,
    price: 9.0,
    amount: 0,
  },
  {
    id: '9',
    title: 'Mocaccino',
    tags: ['Tradicional', 'Com Leite'],
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    image: mocaccino,
    price: 9.0,
    amount: 0,
  },
  {
    id: '10',
    title: 'Chocolate Quente',
    tags: ['Especial', 'Com Leite'],
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    image: chocolateQuente,
    price: 10.0,
    amount: 0,
  },
  {
    id: '11',
    title: 'Cubano',
    tags: ['Especial', 'Alcoólico', 'Gelado'],
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    image: cubano,
    price: 10.0,
    amount: 0,
  },
  {
    id: '12',
    title: 'Havaiano',
    tags: ['Especial'],
    description: 'Bebida adocicada preparada com café e leite de coco',
    image: havaiano,
    price: 9.0,
    amount: 0,
  },
  {
    id: '13',
    title: 'Árabe',
    tags: ['Especial'],
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    image: arabe,
    price: 8.0,
    amount: 0,
  },
  {
    id: '14',
    title: 'Irlandês',
    tags: ['Especial', 'Alcoólico'],
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    image: irlandes,
    price: 11.0,
    amount: 0,
  },
  {
    id: '15',
    title: 'Latte Vegano',
    tags: ['Especial', 'Vegano'],
    description:
      'Uma dose de café expresso com  leite de soja e espuma cremosa',
    image: latte,
    price: 11.0,
    amount: 0,
  },
  {
    id: '16',
    title: 'Americano Gelado',
    tags: ['Tradicional', 'Gelado'],
    description: 'Bebida preparada com café expresso americano e cubos de gelo',
    image: americano,
    price: 4.0,
    amount: 0,
  },
]

export default coffees
