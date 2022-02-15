
import { Navbar,Container,Offcanvas, Button } from "react-bootstrap";


const Navigation=({personagem})=>{

    //função para tornar os itens em lista
    function createList(params) {
      return <li key={params}>{params}</li>  
    }
    const itens = personagem.bolsa.map(createList);
    

   
    return(

        <Navbar bg="dark"  expand={false} className="vw-100">
            <Container fluid>
                <Navbar.Brand  className="text-white ">Aventuras Fantasticas</Navbar.Brand>
                <Navbar.Toggle aria-controls="offcanvasNavbar" className="border-light" />
                <Navbar.Offcanvas
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel"
                    placement="end"
                    >
                    <Offcanvas.Header closeButton className="bg-dark text-white">
                        <Offcanvas.Title id="offcanvasNavbarLabel" className="">Ficha do Personagem</Offcanvas.Title> 
                    </Offcanvas.Header>
                    <Offcanvas.Body className="container">
                        <div className="row ">
                            <div className="col border m-1 border-dark">
                                <h4>Energia:</h4>
                                <p>{personagem.energia}</p>
                            </div>
                            <div className="col border border-dark m-1">
                                <h4>Habilidade:</h4>
                                <p>{personagem.habilidade}</p>
                            </div>
                            <div className="col border m-1 border-dark">
                                <h4>Sorte:</h4>
                                <p>{personagem.sorte}</p>
                            </div>
                        </div>
                        <div className="equipamentos row">
                            <div className="col border m-1 border-dark">
                                <h4>Bolsa:</h4>
                                <ul >{itens}</ul>
                            </div>
                            <div className="col">
                                <div className="border m-1 border-dark">
                                    <h4>Ouro:</h4>
                                    <p className="text-center">{personagem.ouro}</p>
                                </div>
                                <div className="border m-1 border-dark">
                                    <h4>Joias:</h4>
                                    <p className="text-center">{personagem.joias}</p>
                                </div>
                                <div className="border m-1 border-dark">
                                    <h4>Poções:</h4>
                                    <p className="text-center">{personagem.pocoes}</p>
                                </div>
                                <div className="border  m-1 border-dark">
                                    <h4>Provisões:</h4>
                                    <p className="text-center">{personagem.provisoes}</p>
                                    <Button variant="dark" >usar provisão</Button>
                                </div>
                            </div>
                        </div>
                        
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar> 
    )
}
export default Navigation;