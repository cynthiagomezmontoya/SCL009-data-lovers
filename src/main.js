/* Manejo del DOM */
const rootNode   = document.getElementById('root');
const selectType = document.getElementById('selectType');

document.addEventListener("DOMContentLoaded", load, false);

function load(){
  loadPokemon(ourData);
  selectType.onchange = function(e) {
    e.preventDefault();
    filteredData = window.filterData(ourData, {type: selectType.value});
    removePokemon();
    loadPokemon(filteredData);
  } 
}

function removePokemon(){
  while (rootNode.firstChild) {
    rootNode.removeChild(rootNode.firstChild);
  }
};

function loadPokemon(data){
  data.forEach(function(pokemon) {
    const pokemonNode = document.createElement("div");
    const w100        = document.createElement("div");

    pokemonNode.id = pokemon.name;
    pokemonNode.className = "pokemonNode row col";
    pokemon.type.forEach(function(pokemonType){
      pokemonNode.className += " " + pokemonType;
    });
    pokemonNode.innerHTML = '<div class="col-1 pokemonNumer">' + pokemon.num +  '</div>' +
                            '<div class="col-2 pokemonImage"><img src="' + pokemon.img + '"></img></div>' +
                            '<div class="col-2 pokemonName">' + pokemon.name + '</div>' + 
                            '<div class="col-2 pokemonType">' + pokemon.type + '</div>' +
                            '<div class="col-3 pokemonWeak">' + pokemon.weaknesses + '</div>' +
                            '<div class="col-1 pokemonHeight">' + pokemon.height + '</div>' +
                            '<div class="col-1 pokemonWeight">' + pokemon.weight + '</div>';
                            
    rootNode.appendChild(pokemonNode);

    w100.className = "w-100"
    rootNode.appendChild(w100);
  });
}

// function agregarElementos(){ 
//   var lista=document.getElementById("selectType"); 
//   data.forEach(function(data,index){
//   var linew= document.createElement("li");    
//   var contenido = document.createTextNode(data.name+' '+data.type);
//   lista.appendChild(linew);
//   linew.appendChild(contenido);

// })
// }
// agregarElementos();

// function getPokemonTypes(pokemon){

// }