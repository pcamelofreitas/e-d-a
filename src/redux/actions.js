import {
  ADD_ITEM,
  DEFINIR_ENERGIA,
  DEFINIR_HABILIDADE,
  DEFINIR_SORTE,
  GO_TO,
  RM_ITEM,
  USAR_PROV,
} from "./constants";

//-def-status-------------------------------
export const defEnergia = () => {
  return { type: DEFINIR_ENERGIA };
};
export const defHabilidade = () => {
  return { type: DEFINIR_HABILIDADE };
};
export const defSorte = () => {
  return { type: DEFINIR_SORTE };
};
//-def-status-------------------------------

//mod itens --------------------------------
export const addItem = (item) => {
  return {
    type: ADD_ITEM,
    item,
  };
};
export const rmItem = (item) => {
  return {
    type: RM_ITEM,
    item,
  };
};
//------------------------------------------

// mudando de referencia -------------------
export const goTo = (numero) => {
  return {
    type: GO_TO,
    payload: numero,
  };
};
//------------------------------------------
//mod coisas
export const usarProv = () => {
  return {
    type: USAR_PROV,
  };
};
