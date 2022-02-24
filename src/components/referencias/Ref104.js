import { Button } from "react-bootstrap";

export const Ref104 = ({ goToRef }) => {
  return (
    <div>
      <div className="row d-inline text-center">
        <div className="col vh-75">
          <h2 className="f1">Referência 104</h2>
          <img alt="imagem-da-sec" src="" height="250px" />
          <p>
            Você está sentádo à mesa com os cinco nobres, fazendo uma bela
            refeição para fortificar-se antes de entregar seu relatório final.
            Eles são cuidados por seus prórpios servos, enquanto Carolina
            designou um de seus pajens para cuidar de você. Madhaerios o alerta
            sobre tomar atitudes em cautela. "É muito importante que você volte
            para nos contar sobre a natureza da ameaça para que possamos saber
            como nos defender contra ela", ele explica. Enquanto Dunyazad esté
            no meio de seus conselhos para descansar no Tmeplo de Fourga, você
            sente um leve toque em sua perna. Você olha à volta e vê um pajem
            esperando para levá-lo embora. Olhando seu colo, você encontra um
            fragmento de papel. A página deve ter caído enquanto ele enchia de
            novo seu copo.
          </p>
        </div>
      </div>
      <div>
        <div className="d-flex justify-content-around ">
          <Button variant="dark" onClick={() => goToRef(264)}>
            Ler o Papel imediatamente
          </Button>
          <Button variant="dark" onClick={() => goToRef(23)}>
            Guardar para ler mais tarde
          </Button>
        </div>
      </div>
    </div>
  );
};
