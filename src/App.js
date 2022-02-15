import React, {Component} from 'react';
import { Button } from 'react-bootstrap';


import 'react-bootstrap';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { conteudo } from './components/conteudo.js';
import Navigation from './components/Navigation';
import Signin from './components/Singin';
import Footer from './components/Footer';
import Register from './components/Register'
// import Referencia from './components/Referencia';
import Ref1 from './components/referencias/Ref1';

// function dSeis(params) {
    
// }
function d6() {
    return Math.floor(Math.random()*6)+1
}

class App extends Component{

    constructor(){
        super()   
        this.state = {

            //estado de log
            isSingIn:false,
            //rota
            route:'signin',
            //seção
            id: 0,
            //personagem
            personagem:{
                tempo:0,
                energia: 20,
                habilidade: 15,
                sorte: 16,
                ouro: 10,
                joias: 0,
                pocoes: 5,
                provisoes: 5,
                bolsa: ['gato','cachorro','papagaio']
            },
            //sorte
            sortudo: true
            
        
        }
    }
    //rolagem de dados
    
    

    //avanço de paginas
    goToRef = (event) => {
        this.setState({ id: event })
    }
    //teste de sorte
    testSorte=()=>{
        let teste = 2*d6();
       
        if (teste <= this.state.personagem.sorte) {
            
           this.setState.sortudo = true
        } else{
           
          this.setState.sortudo = false
        }
        return this.setState.sorte -=1
    }
    

    //Criação de personagem
    createHab=(h)=>{this.setState({personagem:{habilidade: h}})}
    createEne=(e)=>{this.setState({personagem:{energia: e}})}
    createSor=(s)=>{this.setState({personagem:{sorte: s}})}
    
    // mudança de rota
    onRouteChange = (string) => {
        this.setState({
            route: string
        });
    }

    

    render(){
            
        const{route,personagem,id} = this.state;
            
        return (
            <div>  
                {/* condicional de rota */}
                {route === 'home'?   
                    <div>

                        {/* barra de navegação */}
                        <Navigation onrRouteChange={this.onRouteChange} personagem={personagem}/>
                        <Ref1 goToRef={this.goToRef}/>

                        {/* conteudo */} 
                        {/* <div className='row d-inline text-center'>
                            <div  className='col vh-75'>
                                <h2 className='f1'>{conteudo[id].ref}</h2>
                                <img alt="imagem-da-sec" src={conteudo[id].img} height="250px"/>
                                <p>{conteudo[id].texto}</p>
                            </div>
                        </div> */}

                        {/* barra de botoes */}
                         {/* <div className='row  h-25 w-100 d-inline-block '>
                            <div className='d-flex justify-content-around '>
                                {conteudo[this.state.id].btns.map((btn, index) => 
                                    <Button 
                                    variant="dark"
                                    key={index}
                                    onClick={this.goToRef.bind(this, btn)} 
                                    >ir para  {btn}
                                    </Button>
                                )}
                            </div>
                        </div> */}
                    </div>
                        
                        
                    :   ( route === 'signin'?

                        // seção de login
                        <div>
                            <div className='bg-dark text-white fs-3 text-center vw-100'>
                                <p>Escravos do Abismo</p>
                            </div>
                            <Signin onRouteChange={this.onRouteChange}/>
                        </div>    
                        
                        :
                        // registro
                        <Register onRouteChange={this.onRouteChange}/>

                        )
                        
                    }
                {/* footer */}
                <div className='d-flex justify-content-end position-fixed bottom-0 end-0 bg-dark w-100'>
                    <Footer onRouteChange={this.onRouteChange}/>
                </div>
            </div>
        )   
    }
}
export default App;
