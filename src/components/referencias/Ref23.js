import { Button } from "react-bootstrap";

export const Ref23 = ({ goToRef }) => {
  return (
    <div>
      <div className="row d-inline text-center">
        <div className="col vh-75">
          <h2 className="f1">Referência 23</h2>
          <img alt="imagem-da-sec" src="" height="250px" />
          <p>
            Colocando no bolso o fragmento, você ouve atentamente as sugestões
            de Dunyazad para que fique nas estradas. Embora elas o façam dar uma
            pequena volta, serão mais rápidas do que uma cavalgada pelo campo.
            Quando você deixa a mesa e está sozinho examina o pedaço de papel.
            Está escrito:
            <em>"Cuidado - você é observado por centenas de olhos"</em>
          </p>
        </div>
      </div>
      <div>
        <div className="d-flex justify-content-around ">
          <Button variant="dark" onClick={() => goToRef(140)}>
            Avançar
          </Button>
        </div>
      </div>
    </div>
  );
};
