import React from "react";
import Sobre from "./Sobre";
import { Button } from "react-bootstrap";


const Footer=({onRouteChange})=>{
    const [modalShow, setModalShow] = React.useState(false);
    return(
        <div>
            <Button variant="dark" onClick={() => setModalShow(true)}>Sobre</Button>
            <Sobre
                show={modalShow}
                onHide={() => setModalShow(false)}
                />

            <Button onClick={()=>{onRouteChange('signin')}} className="m-1" variant="dark"> Sair</Button>
        </div>
    )
}
export default Footer;