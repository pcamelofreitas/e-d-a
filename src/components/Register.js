import { Form, Button, Card, FloatingLabel } from "react-bootstrap";
const Register = ({ onRouteChange }) => {
  return (
    <Card className=" d-flex justify-content-center container  shadow  position-absolute top-50 start-50   translate-middle bg-dark w-50">
      <Form>
        <FloatingLabel
          controlId="floatingPassword"
          label="Name"
          className="mb-3 mt-3"
        >
          <Form.Control type="name" placeholder="Nome" />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingInput"
          label="Email"
          className="mb-3 mt-3"
        >
          <Form.Control type="email" placeholder="name@example.com" />
        </FloatingLabel>
        <FloatingLabel controlId="floatingPassword" label="Password">
          <Form.Control type="password" placeholder="Password" />
        </FloatingLabel>
        <FloatingLabel controlId="floatingPassword" label="Password">
          <Form.Control
            type="password"
            placeholder="Repeat Password"
            className="mt-3"
          />
        </FloatingLabel>
        <div className="d-flex justify-content-center">
          {/* QUANDO CLICAR IR PARA CRIAÇÃO DE PERSONAGEM E DEPOIS IR PARA HOME */}
          <Button
            onClick={() => onRouteChange("create")}
            variant="light"
            size="sm"
            className="m-1"
          >
            Registrar
          </Button>
        </div>
      </Form>
    </Card>
  );
};
export default Register;
