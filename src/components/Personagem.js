import { Button } from "react-bootstrap";
import "./Personagem.css";

const Char = ({ personagem }) => {
  function createList(params) {
    return <li key={params}>{params}</li>;
  }
  const itens = personagem.items.map(createList);

  return (
    <div>
      <div className="row ">
        <div className="col border m-1 border-dark">
          <h4>Energia:</h4>
          <p>{personagem.ene}</p>
        </div>
        <div className="col border border-dark m-1">
          <h4>Habilidade:</h4>
          <p>{personagem.hab}</p>
        </div>
        <div className="col border m-1 border-dark">
          <h4>Sorte:</h4>
          <p>{personagem.sor}</p>
        </div>
      </div>
      <div className="equipamentos row">
        <div className="col border m-1 border-dark">
          <h4>Bolsa:</h4>
          <ul>{itens}</ul>
        </div>
        <div className="col">
          <div className="border m-1 border-dark">
            <h4>Ouro:</h4>
            <p className="text-center">{personagem.ouro}</p>
          </div>
          <div className="border m-1 border-dark">
            <h4>Joias:</h4>
            <p className="text-center">{personagem.joias}</p>
          </div>
          <div className="border m-1 border-dark">
            <h4>Poções:</h4>
            <p className="text-center">{personagem.pocoes}</p>
          </div>
          <div className="border  m-1 border-dark">
            <h4>Provisões:</h4>
            <p className="text-center">{personagem.provisoes}</p>
            <Button variant="dark">usar provisão</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Char;
