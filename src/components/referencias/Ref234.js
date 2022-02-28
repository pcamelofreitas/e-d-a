import { Button } from "react-bootstrap";

export const Ref234 = ({ goToRef }) => {
  return (
    <div>
      <div className="row d-inline text-center">
        <div className="col vh-75">
          <h2 className="f1">Referência 234</h2>
          <img alt="imagem-da-sec" src="" height="250px" />
          <p>
            Quando está seguindo pelo pátio, você ouve um grito de gelar o
            sangue. Mergulhando pela porta mais próxima, você se vê na cozinha.
            Uma figura envolta em chamas, debate-se pela sala enquanto vários
            ser- vos jogam água sobre ela, inutilmente. Depois de al- guns
            segundos a pobre figura cai. A cozinheira se vira para você: “É
            Janas, o pajem. Ele correu para cá, segurando o peito e se atirou no
            fogo”, diz. O rapaz está morto. Embora chocado e suspeitando da
            tragédia, você se prepara para sair. Não pode fazer nada aqui.
          </p>
        </div>
      </div>
      <div>
        <div className="d-flex justify-content-around ">
          <Button variant="dark" onClick={() => goToRef(140)}>
            Continuar
          </Button>
        </div>
      </div>
    </div>
  );
};
