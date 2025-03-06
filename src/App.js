import React from 'react';
import './App.css';
import bears from './bears.jpg'; // Import the image

function App() {
  const hearts = Array.from({ length: 8 }).map((_, index) => (
    <div key={index} className="heart"></div>
  ));

  return (
    <div className="App">
      <img src={bears} alt="Bears" className="bears-image" />
      <div className="warning">
        KC CB BARDZO DOMCIA
      </div>
      <div className="message">
        To ja twój mąż Pawełek wiet wiet
      </div>
      <div className="message2">
        bardzo Cb kc oraz lb wiet? mam nadzieje ze jak to zobaczysz te moje dzielo to juz zabek nigdy nie zaboli :*****
      </div>
      {hearts}
    </div>
  );
}

export default App;
