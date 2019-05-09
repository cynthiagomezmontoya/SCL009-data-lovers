/* Manejo de data */

// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window
const ourData = POKEMON.pokemon;
//en esta funcion se filtra el tipo de pokemon
const filterData = (data, condition) => {
  for (var key in condition) {
    if (condition[key] === "All")
      delete condition[key]
  }

  return data.filter(function(monster) {
    for (var key in condition) {
      if (monster[key] === undefined || !monster[key].includes(condition[key]))
        return false;
    }
    return true;
  });
};

const sortData = (pokeData, sortBy, sortOrder) => {
  let ordenaPokes = pokeData;

  if (sortOrder == "a-z"){
    ordenaPokes.sort((a,b)=> {
      if (a[sortBy] < b[sortBy]) {return -1;}
      if (a[sortBy] > b[sortBy]) {return  1;}
      return 0;
    })
  }

  if (sortOrder == "z-a"){
    ordenaPokes.sort((a,b)=> {
      if (a[sortBy] > b[sortBy]) {return -1;}
      if (a[sortBy] < b[sortBy]) {return  1;}
      return 0;
    })
  }

  return ordenaPokes;
};

const computeStats = (data) => {
  var hAverage, maxH, wAverage, maxW;
  var heights = data.map(monster => parseFloat(monster["height"]));
  var weights = data.map(monster => parseFloat(monster["weight"]));
  hAverage = (heights.reduce(function(a, b){ return a + b; }) / data.length).toFixed(2);
  wAverage = (weights.reduce(function(a, b){ return a + b; }) / data.length).toFixed(2);
  maxH = Math.max(...heights);
  maxW = Math.max(...weights);

  return {Altura_Promedio: hAverage + " m", Peso_Promedio: wAverage + " kg", Altura_Máxima: maxH + " m", Peso_Máximo: maxW + " kg"};
};

window.filterData = filterData;
window.sortData = sortData;
window.computeStats = computeStats;
