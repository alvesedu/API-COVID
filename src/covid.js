import React, { useState, useEffect } from "react";
import api from './services/api';
import  './covid.css';

export default function Covid() {

  const [dados, setDados] = useState([]);

  useEffect(() => {
    api.get('/countries').then(resp => {
      setDados(resp.data)
      console.log(resp.data);
    })
    }, []);

  return (
    <div className="container-center">
      <div className="h3">
        <h2>Casos de COVID no mundo</h2>
      </div>
       {dados.map(item => (
      <div className="container">
        <div className="card">
        <h3>Detalhes</h3>
        <p className="card-text-left">Pais: {item.country}</p>
        <p className="card-text-left">Total de casos: {item.cases}</p>
        </div>
      </div>
      ))}
    </div>
  )
}
