const filterLol = (lolData,tags) => { 
  let result = lolData.filter(element => {
    return element.tags.includes(tags); 
  }) 
  return result;
}

window.filterLol = filterLol;

//FUNCIÓN CALCULAR

const computeStats = (lolData,tags) => {
  let calculateResult = filterLol(lolData, tags).length;

  return calculateResult;
  //return calculateResult me entrega la cantidad de jugadores
}
//mathround redondea al entero más cercano
//length: que mi funcion calculate me devuleva el numero de elmentos que contiene el filtro que eligió el usuario
window.computeStats = computeStats;
