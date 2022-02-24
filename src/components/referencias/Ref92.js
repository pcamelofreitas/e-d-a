import React, { useState } from "react";
import { Button } from "react-bootstrap";

export const Ref92 = ({ goToRef, testeSorte, sortudo }) => {
  const [dispplayButton, setDisplayButton] = useState(false);

  const onTesteSorte = () => {
    testeSorte();
    setDisplayButton(true);
  };

  return (
    <div>
      <h1>Referência 92</h1>
      <p>
        Antes que parta, Lady Carolina lhe dá um pergaminho selado para entregar
        a Yunan, comandante de seu exército. Ela lhe deseja a Sorte de Castis em
        sua missão e lhe diz para escolher o melhor garanhão de seus estábulos.
        Logo você está galopando para fora de Kallamehr. Risque uma caixa do
        tempo. Você já viajou vários quilômetros e está pensando em parar para
        um gole de cerveja de sua garrafa quando seu cavalo tropeça
        repentinamente.
      </p>

      <Button variant="dark" onClick={onTesteSorte} disabled={dispplayButton}>
        Teste sua Sorte
      </Button>

      {dispplayButton ? (
        <div>
          <Button onClick={() => goToRef(81)} disabled={sortudo} variant="dark">
            Sortudo
          </Button>
          <Button
            onClick={() => goToRef(192)}
            disabled={!sortudo}
            variant="dark"
          >
            Azarado
          </Button>
        </div>
      ) : (
        <p>teste sua sorte para prosseguir</p>
      )}
    </div>
  );
};
