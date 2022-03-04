import { useState } from "react";
import { Form, Button, Card, FloatingLabel } from "react-bootstrap";
const Register = ({ onRouteChange, userId, setUserId, loadUser }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onNameChange = (event) => {
    setName(event.target.value);
  };
  const onEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const onPasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const onSubmitRegister = (event) => {
    // setUserId(Math.random());
    event.preventDefault();
    fetch("https://eda2-19f96-default-rtdb.firebaseio.com/usuarios.json", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        name: name,
        password: password,
        // userId: userId,
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((user) => {
        if (user) {
          setUserId(user.name);

          onRouteChange("create");
          console.log(user.name);
          // loadUser(user);
        }
      });
  };

  return (
    <Card className=" d-flex justify-content-center container  shadow  position-absolute top-50 start-50   translate-middle bg-dark w-50">
      <Form>
        <FloatingLabel
          controlId="floatingPassword"
          label="Name"
          className="mb-3 mt-3"
        >
          <Form.Control
            type="name"
            placeholder="Nome"
            onChange={onNameChange}
          />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingInput"
          label="Email"
          className="mb-3 mt-3"
        >
          <Form.Control
            type="email"
            placeholder="name@example.com"
            onChange={onEmailChange}
          />
        </FloatingLabel>
        <FloatingLabel controlId="floatingPassword" label="Password">
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={onPasswordChange}
          />
        </FloatingLabel>

        <div className="d-flex justify-content-center">
          {/* QUANDO CLICAR IR PARA CRIAÇÃO DE PERSONAGEM E DEPOIS IR PARA HOME */}
          <Button
            onClick={onSubmitRegister}
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
