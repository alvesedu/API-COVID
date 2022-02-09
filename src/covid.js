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
       {dados.map(item => (
      <div className="container">
        <div className="card">
        <h3>Casos de COVID</h3>
        <p className="card-text-left">Pais: {item.country}</p>
        <p className="card-text-left">Total de casos: {item.cases}</p>
        </div>
      </div>
      ))}
    </div>
  )
}
