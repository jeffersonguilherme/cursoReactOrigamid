import React from 'react';

const titulo = <h1>esse é um titulo</h1>

const App = () => {

  const random = Math.random();
  const ativo = false;

  function mostrarNome(sobrenome){
    return 'Jefferson' + sobrenome;
  }

  const carro = {
    marca : "Forde",
    rodas: '4',
  };

  const estiloP = {
    color: 'blue',
    fontSize: '2rem',
  };

  return(
    <>
      {titulo}
      <p>{true ? "verdadeiro" : "falso"} - {10 }
        { mostrarNome('Gui')}
      </p>

      <p style={estiloP}>{new Date().getFullYear()}</p>
      <p>{carro.marca}</p>
      <p>{carro.rodas}</p>
      <p className={ativo ? 'ativo' : 'inativo'}>{random * 100}</p>



    </>
    
  );
};
 
export default App;
