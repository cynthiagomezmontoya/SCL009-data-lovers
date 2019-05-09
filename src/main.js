/* Manejo del DOM */
const rootNode     = document.getElementById('root');
const rootStatNode = document.getElementById('stats');
const rootSelect   = document.getElementById('select');
const rootModal    = document.getElementById('modal');
//const yoTeElijo = getElementsByClassName('yoTeElijo');
var pokemonStats, filteredTypeData, filteredWeakData;
document.addEventListener("DOMContentLoaded", load, false);

function load(){
  loadPokemon(ourData);
  pokemonStats = window.computeStats(ourData);
  loadStats(pokemonStats);
  selectType.onchange = function(e) {
    e.preventDefault();
    filteredData = window.filterData(ourData, {type: selectType.value, weaknesses: selectWeaknesses.value});
    removeAll();
    if (selectSortBy.value !== "Normal")
      filteredData = sortData(filteredData, "name", selectSortBy.value)
    loadPokemon(filteredData);
    pokemonStats = window.computeStats(filteredData);
    loadStats(pokemonStats);
  }
  selectWeaknesses.onchange = function(e){
    e.preventDefault();
    filteredData = window.filterData(ourData, {type: selectType.value, weaknesses: selectWeaknesses.value});
    removeAll();
    if (selectSortBy.value !== "Normal")
      filteredData = sortData(filteredData, "name", selectSortBy.value)
    loadPokemon(filteredData);
    pokemonStats = window.computeStats(filteredData);
    loadStats(pokemonStats);
  }
  selectSortBy.onchange = function(e){
    e.preventDefault();
    filteredData = window.filterData(ourData, {type: selectType.value, weaknesses: selectWeaknesses.value});
    removeAll();
    if (selectSortBy.value !== "Normal")
      filteredData = sortData(filteredData, "name", selectSortBy.value)
    loadPokemon(filteredData);
    pokemonStats = window.computeStats(filteredData);
    loadStats(pokemonStats);
  }
}

function removeAll(){
  while (rootNode.firstChild) {
    rootNode.removeChild(rootNode.firstChild);
  }
  while (rootStatNode.firstChild) {
    rootStatNode.removeChild(rootStatNode.firstChild);
  }
}

function loadStats(stats){
  for (var key in stats){
    const statNode = document.createElement("div");
    statNode.className = "statNode col-sm-3";
    statNode.innerHTML = "<span class='statLabel'>" + key.replace("_", " ") + ":</span> " + stats[key];
    rootStatNode.appendChild(statNode);
  }
};


function loadPokemon(data){
  data.forEach(function(pokemon) {
    const pokemonNode = document.createElement("div");
    const w100        = document.createElement("div");

    pokemonNode.id = pokemon.name;
    pokemonNode.className = "pokemonNode col-sm-3";
    pokemon.type.forEach(function(pokemonType){
      pokemonNode.className += " " + pokemonType;
    });
    pokemonNode.innerHTML =  '<div class="card" style="width: 15rem;">' + 
                                '<img id="image"src="' + pokemon.img + '"></img>' + 
                                '<div class="card-body">' + 
                                  '<h5 class="card-title">' + pokemon.num + " - " + pokemon.name + '</h5>' + 
                                  '<span class="card-span">Altura: </span><em>' + pokemon.height + '</em></br>' +
                                  '<span class="card-span">Peso: </span><em>' + pokemon.weight + '</em></br>' +
                                  '<span class="card-span">Tipo: </span><em>' + pokemon.type + '</em></br>' +
                                  '<span class="card-span">Debilidad: </span><em>' + pokemon.weaknesses + '</em></br>' +
                                  '<span class="card-span">Eclosión: </span><em>' + pokemon.egg + '</em></br>' +
                                '</div>' + 
                              '</div>';
                            
    rootNode.appendChild(pokemonNode);

    w100.className = "w-100";
  });
}