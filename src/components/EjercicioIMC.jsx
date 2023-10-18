import { useState } from 'react';
import IMCForm from './IMCForm';

function EjercicioIMC() {
  const [imc, setImc] = useState(0);

  const handleChange = objetoConValores => {
    const altura = objetoConValores.altura / 100;
    let calcIMC = (objetoConValores.peso / (altura * altura)).toFixed(2);
    calcIMC = parseFloat(calcIMC);

    if (calcIMC >= 0) {
      setImc(calcIMC);
    }
  };

  return (
    <div>
      <h1> ✔️ Índice de Masa Corporal ✔️ </h1>
      <IMCForm change={handleChange} />
      <h2> Datos del último día</h2>
      <h3>{imc}</h3>
    </div>
  );
}

export default EjercicioIMC;
