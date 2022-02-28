import React, { useState } from "react";
import { Button } from "react-bootstrap";

export const Ref192 = ({ goToRef, setEne, ene }) => {
  const [displayButton, setDisplayButton] = useState(false);
  const onPerderEnergia = () => {
    setEne(ene - 2);
    setDisplayButton(true);
  };

  return (
    <div>
      <h1>Referência 192</h1>
      <p>
        Quando seu cavalo cai pra frente, você salta da sela, mas seu pé fica
        preso no estribo e você bate no chão. Você solta o pé e fica arrasado ao
        descobrir que a bela égua que escolheu agora está ferida. Não pode
        continuar sua jornada com ela, mas precisa procurar um novo cavalo.
      </p>
      <Button onClick={onPerderEnergia} disabled={displayButton} variant="dark">
        Perca 2 pontos de ENERGIA
      </Button>
      {displayButton ? (
        <div>
          <Button variant="dark" onClick={() => goToRef(155)}>
            Continuar
          </Button>
        </div>
      ) : (
        <p>Clique em perder energia para continuar</p>
      )}
    </div>
  );
};
