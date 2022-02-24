import { Historico } from "./referencias/Histórico";
import { Inicio } from "./referencias/Inicio";
import { Ref1 } from "./referencias/Ref1";
import { Ref104 } from "./referencias/Ref104";
import { Ref192 } from "./referencias/Ref192";
import { Ref288 } from "./referencias/Ref288";
import { Ref81 } from "./referencias/Ref81";
import { Ref92 } from "./referencias/Ref92";

const References = ({ id, goToRef, testeSorte, sortudo }) => {
  switch (id) {
    case "historico":
      return <Historico goToRef={goToRef} />;
    case 0:
      return <Inicio goToRef={goToRef} />;
    case 1:
      return <Ref1 goToRef={goToRef} />;
    case 2:
      return <h1>In progress</h1>;
    case 23:
      return <h1>In progress</h1>;
    case 81:
      return <Ref81 goToRef={goToRef} />;
    case 92:
      return (
        <Ref92 goToRef={goToRef} testeSorte={testeSorte} sortudo={sortudo} />
      );
    case 104:
      return <Ref104 goToRef={goToRef} />;
    case 155:
      <h1>In progress</h1>;
      return;
    case 192:
      return <Ref192 goToRef={goToRef} />;
    case 264:
      return <h1>In progress</h1>;

    case 284:
      return <h1>In progress</h1>;
    case 288:
      return <Ref288 goToRef={goToRef} />;

    default:
      return <h1>inProgress</h1>;
  }
};
export default References;
