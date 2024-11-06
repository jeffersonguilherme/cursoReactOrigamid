import React from 'react';

const App = () => {

  const usuarios = [
    { nome: "Ana", sexo: "F", idade: 22 },
  { nome: "Bruna", sexo: "F", idade: 24 },
  { nome: "Carlos", sexo: "M", idade: 20 },
  { nome: "Daniela", sexo: "F", idade: 25 },
  { nome: "Eduardo", sexo: "M", idade: 23 },
  { nome: "Felipe", sexo: "M", idade: 26 },
  
  { nome: "Gustavo", sexo: "M", idade: 28 },
  { nome: "Hugo", sexo: "M", idade: 30 },
  { nome: "Isabela", sexo: "F", idade: 29 },
  { nome: "Júlia", sexo: "F", idade: 31 },
  { nome: "Lucas", sexo: "M", idade: 27 },
  
  { nome: "Mariana", sexo: "F", idade: 34 },
  { nome: "Nelson", sexo: "M", idade: 32 },
  { nome: "Patrícia", sexo: "F", idade: 33 },
  { nome: "Ricardo", sexo: "M", idade: 36 },
  { nome: "Simone", sexo: "F", idade: 30 },
  { nome: "Thiago", sexo: "M", idade: 35 },
  
  { nome: "Ursula", sexo: "F", idade: 38 },
  { nome: "Vera", sexo: "F", idade: 40 },
  { nome: "Wagner", sexo: "M", idade: 37 },
  { nome: "Xuxa", sexo: "F", idade: 39 },
  { nome: "Yuri", sexo: "M", idade: 41 },
  { nome: "Zilda", sexo: "F", idade: 42 },
  
  { nome: "Adriano", sexo: "M", idade: 45 },
  { nome: "Brenda", sexo: "F", idade: 43 },
  { nome: "Carlos", sexo: "M", idade: 47 },
  { nome: "Diana", sexo: "F", idade: 44 },
  { nome: "Erik", sexo: "M", idade: 49 },
  { nome: "Fátima", sexo: "F", idade: 50 },
  
  { nome: "Geovani", sexo: "M", idade: 52 },
  { nome: "Hilda", sexo: "F", idade: 53 },
  { nome: "Ivone", sexo: "F", idade: 55 },
  { nome: "Jorge", sexo: "M", idade: 58 },
  { nome: "Lúcia", sexo: "F", idade: 60 }
  ]

  const idadeMinima = 40;
  const idadeMaxima = 150;
  return (
    <ul>
      {usuarios.filter((usuario) => usuario.idade >= idadeMinima & usuario.idade <= idadeMaxima)
      .map((usuario, index) => (
        <li key={usuario.nome}>Nome: {usuario.nome}
        <ul>
            <li>Sexo: {usuario.sexo}</li>
            <li>idade: {usuario.idade}</li>
            <li>idade: {index+1}</li>
          </ul>
        </li>
          
      ))
      }
    </ul>
  )
}

export default App
