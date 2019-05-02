/* Manejo de data */

// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

const filterData = (data, condition) => {
  return data.filter(function(monster) {
    for (var key in condition) {
      if (monster[key] === undefined || monster[key] != condition[key])
        return false;
    }
    return true;
  });
};

window.filterData = filterData;
