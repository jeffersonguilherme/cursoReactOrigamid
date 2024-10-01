import React from "react";

const titulo = <h1>Esse é um titulo</h1>

const App = () => {

  const nome = Math.random();
  const ativo = true;

  function mostrarNome(sobrenome){
    return ' Jeff ' + sobrenome
  }

  const carro = {
    marca: 'Ford',
    portas: '4',

  }

  const estiloP = {
    color: 'blue',
    fontSize: '2rem'
  }

  return (
   
    <>
      {titulo}
      <p>
        {true ? 'teste' : 'Teste2'} - {10} - {mostrarNome('Silva')}
        

      </p>
      <p style={estiloP}>{new Date().getFullYear()}</p>
      <p style={estiloP}>{carro.marca}</p>
      <p>{carro.portas}</p>
      
      <p className={ativo ? 'ativo' : 'inativo'}>{nome}</p>
    </>
    
  
  );
};

export default App
