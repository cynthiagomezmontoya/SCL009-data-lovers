const pokeData = window.POKEMON.pokemon;
//Se declara la constante pokeData para almacenar el arreglo de pokemons


window.pokeData = pokeData;
    
const containerRoot = document.getElementById('root');
// Se declaran la constante containerRoot para insertar pokemons dentro de este elemento.
const selectType = document.getElementById('type');
// Se declaran la constante selectType para insertar type dentro de este elemento

    
 const filterPoketype= (pokeData, type) => {
//// Se declara la función para filtrar pokemons con los parametros data y condition.
//El parámetro data está destinado a recibir un arreglo de pokemons.
//Y el parámetro condition recibe un diccionario con las condiciones por las que se debe filtrar.
// quemebusque todos los elementos po tipo
  const resultFiler = pokeData.filter(element => {
    //lo que que lleva dentro el filter es una funcion
    // filter, es parecido al for each,pasa por todos los elementos de la data
    return element.type.includes(type);
    //includes, pregunta si esta dentro de la data o no ( true o false)
  })

  return resultFiler;
};

window.filterPoketype = filterPoketype;
window.containerRoot= containerRoot;
window.selectType= selectType;

//ordenar



 sortPokes = (pokeData,sortBy,sortOrder)=> {
   // El primer parámetro, data, nos entrega los datos.
   //sortBy, nos dice con respecto a cuál de los campos de la data se quiere ordenar.
   // sortOrder, indica si se quiere ordenar de manera ascendente o descendente.
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
}
