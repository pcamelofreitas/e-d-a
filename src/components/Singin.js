import { Form,Button,Card,FloatingLabel } from "react-bootstrap";



const Singin =({onRouteChange})=>{

    return(
        <Card className=" d-flex justify-content-center container  shadow  position-absolute top-50 start-50   translate-middle bg-dark w-50">    
            <Form>
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
                <div className="d-flex justify-content-center">
                    <Button onClick={()=>onRouteChange('home')} variant="light" size="sm"  className="m-1" >
                        Entrar
                    </Button>
                    <Button onClick={()=>onRouteChange('register')} variant="light" size="sm"  className="m-1">
                        Registro
                    </Button>
                </div>
                
            </Form>
        </Card>
    )
}
export default Singin; 