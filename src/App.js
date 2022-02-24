import React, { Component, useState } from "react";

import "react-bootstrap";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";

import Navigation from "./components/Navigation";
import Signin from "./components/Singin";
import Footer from "./components/Footer";
import Register from "./components/Register";
// import Referencia from './components/Referencia';

import References from "./components/References";
import { Create } from "./components/Create";

// function dSeis(params) {

// }
function d6() {
  return Math.floor(Math.random() * 6) + 1;
}

const App = () => {
  //states
  const [logState, setLogState] = useState(false);
  //route
  const [route, setRoute] = useState("signin");
  // refrences----
  const [ref, setRef] = useState("historico");

  //character stats
  const [sor, setSor] = useState(1);
  const [ene, setEne] = useState(1);
  const [hab, setHab] = useState(1);
  const [ouro, setOuro] = useState(0);
  const [joias, setJoias] = useState(0);
  const [pocoes, setPocoes] = useState(0);
  const [provisoes, setProvisoes] = useState(0);
  const [items, setItems] = useState(["Mochila", "Espada de Fanghtane"]);
  const [tempo, setTempo] = useState(0);

  const [sortudo, setSortudo] = useState();

  // add and remove items ------------------
  const addItemtHandler = (item) => {
    setItems((prevItems) => [
      ...prevItems,
      { id: Math.random().toString(), ...item },
    ]);
  };
  const removeItemHandler = (itemId) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };
  const onRouteChange = (string) => {
    setRoute(string);
  };
  //Teste de Sorte
  const testeSorte = () => {
    let lucky = 2 * d6();

    if (lucky <= sor) {
      setSortudo(true);
    } else {
      setSortudo(false);
    }
    setSor(sor - 1);
  };

  return (
    <div>
      {/* condicional de rota */}
      {route === "home" ? (
        <div>
          {/* barra de navegação */}
          <Navigation
            sor={sor}
            hab={hab}
            ene={ene}
            joias={joias}
            ouro={ouro}
            pocoes={pocoes}
            provisoes={provisoes}
            items={items}
          />
          <div className="container text-center">
            <References
              id={ref}
              goToRef={setRef}
              testeSorte={testeSorte}
              sortudo={sortudo}
              setEne={setEne}
            />
          </div>
        </div>
      ) : route === "signin" ? (
        // seção de login
        <div>
          <div className="bg-dark text-white fs-3 text-center vw-100">
            <p>Escravos do Abismo</p>
          </div>
          <Signin onRouteChange={onRouteChange} />
        </div>
      ) : route === "register" ? (
        // registro
        <Register onRouteChange={onRouteChange} />
      ) : (
        <Create
          onRouteChange={onRouteChange}
          sorte={sor}
          habilidade={hab}
          energia={ene}
          createEne={setEne}
          createHab={setHab}
          createSor={setSor}
        />
      )}
      {/* footer */}
      <div className="d-flex justify-content-end position-fixed bottom-0 end-0 bg-dark w-100">
        <Footer onRouteChange={onRouteChange} />
      </div>
    </div>
  );
};

export default App;

const itemList = (props) => {
  return (
    <section className="ingredient-list">
      <h2>Loaded items</h2>
      <ul>
        {props.items.map((ig) => (
          <li key={ig.id} onClick={props.onRemoveItem.bind(this, ig.id)}>
            <span>{ig.title}</span>
            <span>{ig.amount}x</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       //estado de log
//       isSingIn: false,
//       //rota
//       route: "signin",
//       //seção
//       id: "historico",
//       //personagem
//       personagem: {
//         tempo: 0,
//         energia: 0,
//         habilidade: 0,
//         sorte: 4,
//         ouro: 0,
//         joias: 0,
//         pocoes: 5,
//         provisoes: 5,
//         bolsa: ["gato", "cachorro", "papagaio"],
//       },
//       //sorte
//       sortudo: false,
//     };
//   }
//   //rolagem de dados

//   //avanço de paginas
//   goToRef = (event) => {
//     this.setState({ id: event });
//   };
//   //teste de sorte
//   testeSorte = () => {
//     let teste = d6();
//     if (teste > this.state.personagem.sorte) {
//       this.setState({ sortudo: true });
//     } else {
//       this.setState({ sortudo: false });
//     }
//   };

//   //Criação de personagem
//   createHab = (h) => {
//     this.setState({ personagem: { habilidade: 6 + h } });
//   };
//   createEne = (e) => {
//     this.setState({ personagem: { energia: 12 + e } });
//   };
//   createSor = (s) => {
//     this.setState({ personagem: { sorte: 6 + s } });
//   };

//   // mudança de rota
//   onRouteChange = (string) => {
//     this.setState({
//       route: string,
//     });
//   };

//   render() {
//     const { route, personagem, id, sortudo } = this.state;

//     return (
//       <div>
//         {/* condicional de rota */}
//         {route === "home" ? (
//           <div>
//             {/* barra de navegação */}
//             <Navigation
//               onrRouteChange={this.onRouteChange}
//               personagem={personagem}
//             />
//             <div className="container text-center">
//               <References
//                 id={id}
//                 goToRef={this.goToRef}
//                 testSorte={this.testeSorte}
//                 sortudo={sortudo}
//               />
//             </div>
//             {/* <Referencia goToRef={this.goToRef} id={id} /> */}
//             {/* <Ref1 goToRef={this.goToRef} /> */}

//             {/* conteudo */}
//             {/* <div className='row d-inline text-center'>
//                             <div  className='col vh-75'>
//                                 <h2 className='f1'>{conteudo[id].ref}</h2>
//                                 <img alt="imagem-da-sec" src={conteudo[id].img} height="250px"/>
//                                 <p>{conteudo[id].texto}</p>
//                             </div>
//                         </div> */}

//             {/* barra de botoes */}
//             {/* <div className='row  h-25 w-100 d-inline-block '>
//                             <div className='d-flex justify-content-around '>
//                                 {conteudo[this.state.id].btns.map((btn, index) =>
//                                     <Button
//                                     variant="dark"
//                                     key={index}
//                                     onClick={this.goToRef.bind(this, btn)}
//                                     >ir para  {btn}
//                                     </Button>
//                                 )}
//                             </div>
//                         </div> */}
//           </div>
//         ) : route === "signin" ? (
//           // seção de login
//           <div>
//             <div className="bg-dark text-white fs-3 text-center vw-100">
//               <p>Escravos do Abismo</p>
//             </div>
//             <Signin onRouteChange={this.onRouteChange} />
//           </div>
//         ) : route === "register" ? (
//           // registro
//           <Register onRouteChange={this.onRouteChange} />
//         ) : (
//           <Create
//             onRouteChange={this.onRouteChange}
//             personagem={personagem}
//             createEne={this.createEne}
//             createHab={this.createHab}
//             createSor={this.createSor}
//           />
//         )}
//         {/* footer */}
//         <div className="d-flex justify-content-end position-fixed bottom-0 end-0 bg-dark w-100">
//           <Footer onRouteChange={this.onRouteChange} />
//         </div>
//       </div>
//     );
//   }
// }
// export default App;
