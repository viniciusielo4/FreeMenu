import React, { useState } from "react";
import "../App.css";

const Pgprincipal = () => {
  const [pratos] = useState([
    {
      id: 1,
      nome: "Pizza Margherita",
      descricao: "Molho de tomate, mussarela fresca e manjericão.",
      preco: 35.9,
      imagem: ""
    },
    {
      id: 2,
      nome: "Lasanha à Bolonhesa",
      descricao: "Camadas de massa fresca com molho de carne e queijo gratinado.",
      preco: 42.5,
      imagem: "https://i.imgur.com/Vz4uB6L.jpg"
    },
    {
      id: 3,
      nome: "Hambúrguer Artesanal",
      descricao: "Pão brioche, carne 180g, cheddar e molho especial.",
      preco: 28.0,
      imagem: "https://i.imgur.com/V2gKPeF.jpg"
    },
    {
      id: 4,
      nome: "Strogonoff de Frango",
      descricao: "Frango ao molho cremoso com arroz branco e batata palha.",
      preco: 26.5,
      imagem: "https://i.imgur.com/b2KuN0A.jpg"
    },
    {
      id: 5,
      nome: "Salada Caesar",
      descricao: "Alface, frango grelhado, croutons, parmesão e molho caesar.",
      preco: 22.0,
      imagem: "https://i.imgur.com/9dM3zow.jpg"
    },
    {
      id: 6,
      nome: "Sushi Variado (10 peças)",
      descricao: "Combinado de sushi com salmão, peixe branco e makis.",
      preco: 32.9,
      imagem: "https://i.imgur.com/r0n6Fuv.jpg"
    }
  ]);

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