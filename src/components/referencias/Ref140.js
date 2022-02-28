import { useState } from "react";
import { Button } from "react-bootstrap";

export const Ref140 = ({ goToRef, addItemHandler }) => {
  const [disable, setDisable] = useState(false);
  const onItemClick = () => {
    addItemHandler("Medalhão de Sige");
    setDisable(true);
  };
  return (
    <div>
      <div className="row d-inline text-center">
        <div className="col vh-75">
          <h2 className="f1">Referência 140</h2>
          <img alt="imagem-da-sec" src="" height="250px" />
          <p>
            Você é levado diretamente aos estábulos para escolher seu cavalo.
            Enquanto está se preparando para partir, a alta Sige se aproxima.
            Sua voz é baixa, quase inaudível, e você entende por que ela é
            chamada de "a Silenciosa". Ela lhe diz que tem um valioso item
            mágico que o ajudará em sua jornada e lhe trará a sorte dos deuses.
            É um medalhão com ervas raras; se usado no pescoço ele removerá
            qualquer necessidade de sono. Ele lhe é entregue pelo servo de Sige,
            uma criatura pobremente deformada que claudica lentamente e usa um
            capuz, sem dúvida para esconder seu horrível rosto. Sige lhe deseja
            baixinho uma jornada frutífera e segura. Juntando suas coisas, você
            se apressa para o pátio. Sem tempo para cerimônias, você monta seu
            cavalo e abre caminho em meio à multidão no portão. Uma rápida
            passagem pelo Caminho de Flint o leva ao Grande Portão de Kallamehr.
          </p>
          <Button onClick={onItemClick} disabled={disable} variant="dark">
            Adquirur Medalhão de Sige
          </Button>
        </div>
      </div>
      <div>
        <div className="d-flex justify-content-around ">
          <Button variant="dark" onClick={() => goToRef(329)}>
            Continuar
          </Button>
        </div>
      </div>
    </div>
  );
};
