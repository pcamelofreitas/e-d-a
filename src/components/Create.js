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
  loadUser,
}) => {
  //postar na table de personagem
  const onFinishCreation = (event) => {
    event.preventDefault();
    fetch("DATABASE_URL", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ref: "Histórico",
        sor: sorte,
        ene: energia,
        hab: habilidade,

        ouro: 10,
        joias: 0,
        pocoes: 0,
        provisoes: 5,
        items: ["Mochila", "Espada de aço de Fangthane"],
      }),
    })
      .then((response) => response.json())
      .then((user) => {
        loadUser(user);
        onRouteChange("home");
      });
  };

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
          <Button
            onClick={onFinishCreation}
            variant="dark"
            disabled={energia === 1 && habilidade === 1 && sorte === 1}
          >
            avançar
          </Button>
        </div>
      </div>
    </div>
  );
};
