import React from 'react';

const App = () => {
//const produtos = ["notebook ",'tablet ', ' smartphone'];
//const empresas = [<li key="e1">Apple</li>, <li key="e2">Google</li>];
//return <div>{produtos}</div>
//return <ul>{empresas}</ul>
/*
const filmes = [ 'interestelar', 'vingadores', 'Homem-aranha']

return (
  <ul>
    {filmes.map((filme) =>(
      <li key='{filme}'>{filme}</li>
    ))}
  </ul>
)
   nome: {livro.nome}, ano de lançamento: {livro.ano}, nota: {livro.nota}
  */

const livros = [
  { nome: 'A Game of Thrones', ano: 1996, nota: 9},
  { nome: 'A Clash of Kings', ano: 1998, nota: 9.5},
  { nome: 'A Game of Thrones', ano: 2000, nota: 9.3},
];

const anoFiltro = 1997;
return (
  <ul>

    {livros
    .filter((livro) => livro.ano >= anoFiltro)
    .map((livro) =>(
      <li key={livro.nome}> 
        Nome: {livro.nome}
        <ul>
          <li>Ano: {livro.ano}</li>
          <li>Nota: {livro.nota}</li>
        </ul>
      </li>
    ))}

  </ul>
)

};
export default App;
