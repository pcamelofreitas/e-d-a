import { Button } from "react-bootstrap";

export const Ref264 = ({ goToRef }) => {
  return (
    <div>
      <div className="row d-inline text-center">
        <div className="col vh-75">
          <h2 className="f1">Referência 23</h2>
          <img alt="imagem-da-sec" src="" height="250px" />
          <p>........</p>
        </div>
      </div>
      <div>
        <div className="d-flex justify-content-around ">
          <Button variant="dark" onClick={() => goToRef(234)}>
            Avançar
          </Button>
        </div>
      </div>
    </div>
  );
};
