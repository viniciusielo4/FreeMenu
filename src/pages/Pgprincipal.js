import React, { useEffect, useState } from "react";
import api from "../api";
import "../App.css";

const Pgprincipal = () => {
  const [pratos, setPratos] = useState([]);

  useEffect(() => {
    api.get("/pratos")
      .then((res) => setPratos(res.data))
      .catch((err) => console.error("Erro ao buscar pratos:", err));
  }, []);

  return (
    <div className="cardapio-container">
      <h1>🍽️ Cardápio</h1>
      <div className="pratos-grid">
        {pratos.map((prato) => (
          <div className="prato-card" key={prato.id}>
            <img src={prato.imagem} alt={prato.nome} />
            <h3>{prato.nome}</h3>
            <p>{prato.descricao}</p>
            <span>R$ {Number(prato.preco).toFixed(2)}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pgprincipal;
