import { useState } from "react";
import { Form, Button, Card, FloatingLabel } from "react-bootstrap";

const Singin = ({ onRouteChange, loadUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const onPasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const onSigninSubmit = (event) => {
    event.preventDefault();
    fetch("DATABASE_URL", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((user) => {
        if (user.id) {
          loadUser(user);
          onRouteChange("home");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <Card className=" d-flex justify-content-center container  shadow  position-absolute top-50 start-50   translate-middle bg-dark w-50">
      <Form>
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
          <Button
            onClick={onSigninSubmit}
            variant="light"
            size="sm"
            className="m-1"
          >
            Entrar
          </Button>
          <Button
            onClick={() => onRouteChange("register")}
            variant="light"
            size="sm"
            className="m-1"
          >
            Registro
          </Button>
        </div>
      </Form>
    </Card>
  );
};
export default Singin;
