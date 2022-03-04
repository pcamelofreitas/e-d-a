import React, { useState } from "react";

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
  // const [loginState, setLoginState] = useState(false);
  const [userId, setUserId] = useState("");
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

  const loadUser = (data) => {
    console.log(data);
    // setUserId(data.userid);
    setRef(data.ref);
    setHab(data.hab);
    setEne(data.ene);
    setSor(data.sor);
    setJoias(data.joias);
    setTempo(data.tempo);
    setPocoes(data.pocoes);
    setItems(data.items);
    setProvisoes(data.provisoes);
    setOuro(data.ouro);
  };

  // add and remove items ------------------
  //add
  const addItemHandler = (item) => {
    setItems((prevItems) => [...prevItems, item]);
  };
  //rmv
  // const removeItemHandler = (itemId) => {
  //   setItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  // };
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
  //uso de provisão
  const onProvUse = () => {
    setEne(ene + 4);
    setProvisoes(provisoes - 1);
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
            onProvUse={onProvUse}
          />
          <div className="container text-center">
            <References
              id={ref}
              goToRef={setRef}
              testeSorte={testeSorte}
              sortudo={sortudo}
              setEne={setEne}
              ene={ene}
              addItemHandler={addItemHandler}
              setTempo={setTempo}
              tempo={tempo}
              items={items}
              sor={sor}
              hab={hab}
              setHab={setHab}
              setJoias={setJoias}
              joias={joias}
              setOuro={setOuro}
              ouro={ouro}
              provisoes={provisoes}
              setProvisoes={setProvisoes}
              pocoes={pocoes}
              setPocoes={setPocoes}
            />
          </div>
        </div>
      ) : route === "signin" ? (
        // seção de login
        <div>
          <div className="bg-dark text-white fs-3 text-center vw-100">
            <p>Escravos do Abismo</p>
          </div>
          <Signin onRouteChange={onRouteChange} loadUser={loadUser} />
        </div>
      ) : route === "register" ? (
        // registro
        <Register
          onRouteChange={onRouteChange}
          userId={userId}
          setUserId={setUserId}
          loadUser={loadUser}
        />
      ) : route === "create" ? (
        <Create
          onRouteChange={onRouteChange}
          sorte={sor}
          habilidade={hab}
          energia={ene}
          createEne={setEne}
          createHab={setHab}
          createSor={setSor}
          userId={userId}
          loadUser={loadUser}
        />
      ) : (
        <h1>Undefined Route</h1>
      )}
      {/* footer */}
      <div className="d-flex justify-content-end position-fixed bottom-0 end-0 bg-dark w-100">
        <Footer onRouteChange={onRouteChange} />
      </div>
    </div>
  );
};

export default App;

// const itemList = (props) => {
//   return (
//     <section className="ingredient-list">
//       <h2>Loaded items</h2>
//       <ul>
//         {props.items.map((ig) => (
//           <li key={ig.id} onClick={props.onRemoveItem.bind(this, ig.id)}>
//             <span>{ig.title}</span>
//             <span>{ig.amount}x</span>
//           </li>
//         ))}
//       </ul>
//     </section>
//   );
// };
