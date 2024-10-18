import green from '../assets/produtores/green.png';
import grow from '../assets/produtores/grow.png';
import salad from '../assets/produtores/salad.png';
import potager from '../assets/produtores/potager.png';
import jenny from '../assets/produtores/jenny-jack.png';

const gerarNum = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const produtores = {
  titulo: 'Produtores',
  lista: [
    {
      nome: 'Green',
      imagem: green,
      distancia: `${gerarNum(1, 500)}m`,
      estrelas: gerarNum(1, 5),
    },
    {
      nome: 'Grow',
      imagem: grow,
      distancia: `${gerarNum(1, 500)}m`,
      estrelas: gerarNum(1, 5),
    },
    {
      nome: 'Salad',
      imagem: salad,
      distancia: `${gerarNum(1, 500)}m`,
      estrelas: gerarNum(1, 5),
    },
    {
      nome: 'Potager',
      imagem: potager,
      distancia: `${gerarNum(1, 500)}m`,
      estrelas: gerarNum(1, 5),
    },
    {
      nome: 'Jenny Jack',
      imagem: jenny,
      distancia: `${gerarNum(1, 500)}m`,
      estrelas: gerarNum(1, 5),
    },
  ],
};

export default produtores;
