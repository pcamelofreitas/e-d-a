import { Button } from "react-bootstrap";

function d6() {
  return Math.floor(Math.random() * 6) + 1;
}
function createHabilidade() {
  return d6() + 6;
}
function createEnergia() {
  return 2 * d6() + 12;
}
function createSorte() {
  return d6() + 6;
}

export const Create = ({
  sorte,
  energia,
  habilidade,
  createEne,
  createSor,
  createHab,
  onRouteChange,
}) => {
  return (
    <div>
      <div className="container">
        <h1>Começando</h1>
        <h3>É preciso definir seus status.</h3>
        Eles são decididos na sorte.
        <ul>
          <li>Você ira rolar 1 dado e adicionar 6 e será sua Energia</li>
          <li>Você rolara 2 dados e adicionara 12 e será sua Energia</li>
          <li> Você rolara 1 dado e adicionará 6 será sua Sorte</li>
        </ul>
        <div className="">
          <Button
            className="col-12 col-lg-2 m-1"
            variant="dark"
            onClick={() => createHab(createHabilidade)}
            disabled={habilidade > 1}
          >
            Definir Habilidade
          </Button>
          <Button
            className="col-12 col-lg-2 m-1"
            variant="dark"
            onClick={() => createEne(createEnergia)}
            disabled={energia > 1}
          >
            Definir Energia
          </Button>
          <Button
            className="col-12 col-lg-2 m-1"
            variant="dark"
            onClick={() => createSor(createSorte)}
            disabled={sorte > 1}
          >
            Definir Sorte
          </Button>
        </div>
        <div>
          <h4>sua habilidade inicial é {habilidade}</h4>
          <h4>sua energia inicial é {energia}</h4>
          <h4>sua sorte inicial é {sorte}</h4>
        </div>
        <div className="m-4">
          {energia > 1 && habilidade > 1 && sorte > 1 ? (
            <Button onClick={() => onRouteChange("home")} variant="dark">
              avançar
            </Button>
          ) : null}
        </div>
      </div>
    </div>
  );
};
