import {
  Historico,
  Inicio,
  Ref1,
  Ref2,
  Ref3,
  Ref4,
  Ref5,
  Ref6,
  Ref7,
  Ref8,
  Ref9,
  Ref10,
  Ref11,
  Ref23,
  Ref81,
  Ref92,
  Ref104,
  Ref140,
  Ref192,
  Ref234,
  Ref288,
  Ref329,
  Ref12,
  Ref155,
} from "./referencias/Referencias";

const References = ({
  id,
  goToRef,
  testeSorte,
  sortudo,
  setEne,
  ene,
  addItemHandler,
  setTempo,
  tempo,
  items,
}) => {
  switch (id) {
    case "historico":
      return <Historico goToRef={goToRef} />;
    case 0:
      return <Inicio goToRef={goToRef} />;
    case 1:
      return <Ref1 goToRef={goToRef} />;
    case 2:
      return <Ref2 goToRef={goToRef} />;
    case 3:
      return <Ref3 goToRef={goToRef} />;
    case 4:
      return <Ref4 goToRef={goToRef} />;
    case 5:
      return (
        <Ref5 goToRef={goToRef} testeSorte={testeSorte} sortudo={sortudo} />
      );
    case 6:
      return <Ref6 goToRef={goToRef} />;
    case 7:
      return <Ref7 goToRef={goToRef} />;
    case 8:
      return <Ref8 goToRef={goToRef} />;
    case 9:
      return <Ref9 goToRef={goToRef} />;
    case 10:
      return <Ref10 goToRef={goToRef} />;
    case 11:
      return <Ref11 goToRef={goToRef} />;

    case 12:
      return <Ref12 goToRef={goToRef} setEne={setEne} ene={ene} />;
    case 23:
      return <Ref23 goToRef={goToRef} />;
    case 81:
      return <Ref81 goToRef={goToRef} />;
    case 92:
      return (
        <Ref92 goToRef={goToRef} testeSorte={testeSorte} sortudo={sortudo} />
      );
    case 104:
      return <Ref104 goToRef={goToRef} />;
    case 140:
      return <Ref140 goToRef={goToRef} addItemHandler={addItemHandler} />;
    case 155:
      return <Ref155 goToRef={goToRef} />;

    case 192:
      return <Ref192 goToRef={goToRef} setEne={setEne} ene={ene} />;
    case 234:
      return <Ref234 goToRef={goToRef} />;

    case 284:
      return <h1>In progress</h1>;
    case 288:
      return <Ref288 goToRef={goToRef} setEne={setEne} ene={ene} />;
    case 329:
      return (
        <Ref329
          goToRef={goToRef}
          setTempo={setTempo}
          tempo={tempo}
          items={items}
        />
      );

    default:
      return (
        <div>
          <h1>Obrigado por jogar</h1>
          <p>Desenvolvimento em andamento...</p>
        </div>
      );
  }
};
export default References;
