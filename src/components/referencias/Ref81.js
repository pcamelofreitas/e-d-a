import { Button } from "react-bootstrap";

export const Ref81 = ({ goToRef }) => {
  return (
    <div>
      <h1>Referência 81</h1>
      <p>
        Quando sua montaria cai no chão, você salta da sela. Embora pouse
        pesadamente, você não se machuca. Infelizmente o mesmo não pode ser dito
        de sua égua. Uma de suas patas dianteira está torcida. Ela claudica até
        você e acaricia seu rosto, como se desculpando. Ela nçao pode ser
        montada, então você deve levá-la até a próxima vila e conseguir outro
        cavalo.
      </p>
      <Button variant="dark" onClick={() => goToRef(155)}>
        Ir para vila
      </Button>
    </div>
  );
};
