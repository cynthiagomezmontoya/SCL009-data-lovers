/* Manejo de data */

// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

const ourData = POKEMON.pokemon;
//en esta funcion se filtra el tipo de pokemon
const filterData = (data, condition) => {
  return data.filter(function(monster) {
    for (var key in condition) {
      debugger;
      if (monster[key] === undefined || monster[key] != condition[key])
        return false;
    }
    return true;
  });
};

const sortData = (data, sortBy, sortOrder) => {
  return 'sortData';
};

const computeStats = (data) => {
  return 'computeStats';
};

window.filterData = filterData;
window.sortData = sortData;
window.computeStats = computeStats;
