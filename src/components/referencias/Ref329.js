import { useState } from "react";
import { Button } from "react-bootstrap";

export const Ref329 = ({ goToRef, setTempo, tempo, items }) => {
  const [disable, setDisable] = useState(false);
  const onButtonClick = () => {
    setTempo(tempo + 1);
    setDisable(true);
  };

  return (
    <div>
      <div className="row d-inline text-center">
        <div className="col vh-75">
          <h2 className="f1">Referência 329</h2>
          <img alt="imagem-da-sec" src="" height="250px" />
          <p>
            Você cavalga até a noite cair. Embora esteja ansioso paracontinuar,
            seu cavalo está cansado e seria perigoso continuar no escuro. Você
            desmonta e se prepara para a noite ao relento.
          </p>
          <Button variant="dark" onClick={onButtonClick} disabled={disable}>
            Risque uma caixa de tempo.
          </Button>
        </div>
      </div>
      <div>
        <div className="d-flex justify-content-around ">
          {items.includes("Medalhão de Sige") ? (
            <Button
              variant="dark"
              onClick={() => goToRef(63)}
              disabled={!disable}
            >
              Se tiver o medlhão de Sige
            </Button>
          ) : (
            <Button
              variant="dark"
              onClick={() => goToRef(367)}
              disabled={!disable}
            >
              Se não o tiver
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
