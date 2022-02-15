
import './Personagem.css'


const Char=({personagem})=>{

    return(
        <div className="ficha">
            <h2>Ficha de Aventura</h2>
            <div className="row">
                <div className="col">
                    <h4>Energia:</h4>
                    <p>{personagem.energia}</p>
                </div>
                <div className="col">
                    <h4>Habilidade:</h4>
                    <p>{personagem.habilidade}</p>
                </div>
                <div className="col">
                    <h4>Sorte:</h4>
                    <p>{personagem.sorte}</p>
                </div>
            </div>
            <div className="equipamentos">
                <div>
                    <h4>Bolsa:</h4>
                    <ul>{personagem.bolsa}</ul>
                </div>
                <div>
                    <div>
                        <h4>Ouro:</h4>
                        <p>{personagem.ouro}</p>
                    </div>
                    <div>
                        <h4>joias:</h4>
                        <p>{personagem.joias}</p>
                    </div>
                    <div>
                        <h4>Poções:</h4>
                        <p>{personagem.pocoes}</p>
                    </div>
                    <div>
                        <h4>Provisões:</h4>
                        <p>{personagem.provisoes}</p>
                    </div>
                </div>
            </div>
        </div>
    );
        
    
        
    
}
export default Char;

