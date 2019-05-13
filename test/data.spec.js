global.window = global;
global.assert = require('chai').assert;
require('../src/data');
require('./data.spec.js');

describe('filterData', () => {
  //declaro un arreglo el cual voy a utilizar para realizar mis test
  const myData = [
    {
      "name": "Bulbasaur",
      "type": "Grass"
    },
    {
      "name": "Ivysaur",
      "type": "Poison"
    },
    {
      "name": "Venusaur",
      "type": "Grass"
    }
  ]
  //hago mi test bàsico de que deberia ser una funciòn
  it('deberia ser una function', () => {
    assert.equal(typeof filterData,'condition');
  });

  //Hago mi test sobre mi funcion filtrar, utilizo mi arreglo que declare màs arriba
  it('debería retornar el objeto Bulbasaur al filtrar por type Grass', () => {
    //acà le digo que funciòn quiero testear, le paso mi funciòn entera con sus parametros y luego que espero como resultado
    assert.deepEqual(window.filterData(myData, 'Grass'), [{"name": "Bulbasaur",
    "type": "Grass"}])
  });

  it('debería retornar el objeto Ivysaur al filtrar por type Poison', () => {
    assert.deepEqual(window.filterData(myData, 'Poison'), [{"name": "Ivysaur",
    "type": "Poison"}])
  });

})
