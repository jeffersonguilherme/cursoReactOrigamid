import React from 'react';

const App = () => {

  //const produtos = [<li key="e1">Notebook</li>, <li key="e2">Celular</li>];
  //const filmes = ['Before Sunrise', 'Before sunset', 'before Midnight']
  //      <ul>{filmes.map((filme) => (<li key={filme}>{filme}</li>))}</ul>

  const livros = [
    {nome: 'A game of thrones', ano: 1996},
    {nome: 'A clash of kigns', ano: 1998},
    {nome: 'A storm of swords', ano: 2000},

  ]

  return (
        <ul>
          {livros.filter(({ano}) => ano >=1998)
          .map(({nome, ano}) => (
            <li key={nome}>
              {nome}, {ano}
            </li>
          ))}
        </ul>
     );
};

export default App;
