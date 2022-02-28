import { Button, Modal } from "react-bootstrap";
function Sobre(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton className="bg-dark text-white ">
        <Modal.Title id="contained-modal-title-vcenter">
          Escravos do Abismo
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="bg-dark text-white">
        <p>
          Você é um herói famoso em toda Allansia. Você se encontra na cidade de
          Kallamehr em tempo de crise. A cidade está Sendo ameaçada por uma
          invasão do leste — e o exército está ausente! Lady Carolina de
          Kallamehr o chama para comparecer á presença dela: cabe a Você salvar
          a cidade. Vocês não hesita em oferecer seus serviços, mas o que pode
          fazer? Qual o melhor plano? O tempo não é um aliado, e também há
          perigos mais concretos a vencer. Muitos perigos encontram-se a sua
          frente e seu sucesso não é garantido. <strong>VOCÊ</strong> decide que
          rotas seguir, Que perigos correr e que monstros enfrentar!
        </p>
      </Modal.Body>
      <Modal.Footer className="bg-dark text-white">
        <Button variant="light" onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
export default Sobre;
