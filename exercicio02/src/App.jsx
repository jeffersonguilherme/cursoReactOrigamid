import React from "react";

const produtos = [
  {
    id: 1,
    nome: 'Smartphone',
    precoDe: 'R$ 3000',
    precoPor: 'R$ 2000',

  },
  {
    id: 2,
    nome: 'Cadeira',
    precoDe: 'R$ 110',
    precoPor: 'R$ 2000',

  },
 {
    id: 3,
    nome: 'Máquina de Lavar',
    precoDe: 'R$ 2520',
    precoPor: 'R$ 1424',

  },
  {
    id: 4,
    nome: 'Smart TV',
    precoDe: 'R$ 5400',
    precoPor: 'R$ 3134',

  },
  
  
];

const App = () => {
  return (
    <section className=''>
      {produtos.map(({id, nome, precoDe, precoPor}) => (
        <div className="card" key={id}>
            <h2>{nome}</h2>
            <p>{precoDe}</p>
            <h3>{precoPor}</h3>
        </div>
      ))}
    </section>
  )
}

export default App;
