import { Button, Modal } from "react-bootstrap";
function Sobre(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
           Sobre
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
          <p>
          Seja bem vindo a essa aventra ....
             
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
export default Sobre;