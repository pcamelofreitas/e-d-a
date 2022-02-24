import { Button } from "react-bootstrap";

export const Historico = ({ goToRef }) => {
  return (
    <div>
      <h1>Histórico</h1>
      <img alt="x" src="https://svgsilh.com/svg/2027035.svg" height={250} />
      <p>
        Estes são tempos dificeis em Kallamehr. Nem bem a soberana, Lady
        Carolina, recuperou-se da morte de seu marido, foi jogada em uma guerra
        com o estado rival de comercio, Alkemis. Depois de uma batalha marítima,
        onde muitasvidas foram perdidas, parecia que Kallamehr iria se impor.
        Porém havia ainda mais por vir. Rumores se espalharam sobre exércitos
        avançados nas fronteiras ao norte. Era dito que Bei-Han, um vizinho nada
        amigável, preparava uma invasão. Agindo com decisão, Lady Carolina
        ordenou que seus exércitos fossem para o norte. As passagens das
        montanhas na fronteira poderiam ser defendidas facilmente. Entretanto se
        fosse permitido que os exercitos de Bei-Han chegassem às grandes
        planíces de Kallamehr, eles causariam incomensuráveis danos.
      </p>
      <Button variant="dark" onClick={() => goToRef(0)}>
        Início
      </Button>
    </div>
  );
};
