import { Button } from "react-bootstrap";

export const Ref234 = ({ goToRef }) => {
  return (
    <div>
      <div className="row d-inline text-center">
        <div className="col vh-75">
          <h2 className="f1">Referência 268</h2>
          <img alt="imagem-da-sec" src="" height="250px" />
          <p>
            Um pouco mais à frente no caminho você entra em uma pequena
            clareira. No centro dela pode ver um pequeno monte de terra solta
            com uma abertura perfeitamente circular logo acima do nível do chão.
            Dela sai a mão negra de um homem, arranhando o solo solto como se
            tentando se agarrar. Quando você se aproxima, percebe que a cor é
            causada pela quantidade de formigas sobre ela.
          </p>
        </div>
      </div>
      <div>
        <div className="d-flex justify-content-around ">
          <Button variant="dark" onClick={() => goToRef(300)}>
            Correr ao socorro do homem, e tentar salvá-lo.
          </Button>
          <Button variant="dark" onClick={() => goToRef(211)}>
            Não se arriscar
          </Button>
        </div>
      </div>
    </div>
  );
};
