import React, { useState } from "react";
import { Button } from "react-bootstrap";

export const Ref192 = ({ goToRef }) => {
  return (
    <div>
      <h1>Referência 192</h1>
      <p>
        Quando seu cavalo cai pra frente, você salta da sela, mas seu pé fica
        preso no estribo e você bate no chão.
        <button>Perca 2 pontos de ENERGIA</button> Você solta o pé e fica
        arrasado ao descobrir que a bela égua que escolheu agora está ferida.
        Não pode continuar sua jornada com ela, mas precisa procurar um novo
        cavalo.
      </p>

      <Button variant="dark" onClick={() => goToRef(155)}>
        Continuar
      </Button>
    </div>
  );
};
