// 1) Import the React and ReactDOM libraries
// vou importar  as bibliotecas Reagir e Reagir DOM
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// 2) Get a reference to the div with ID root
// Vamos obter referência ao mergulho com raízes de identificação
const el = document.getElementById('root');
// 3) tell React to take control of that elements
// Vamos dizer ao Reagir para assumir o controle desse elemento
const root = ReactDOM.createRoot(el);

// 4) Show the component on the screen
//  Mostraremos os componentes na tela.
root.render(<App />);
