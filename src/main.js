// filtro DOM
selectType:"";
// evento 
selectType.addEventListener('change', () => {
   let tipoFilter = selectType.options[selectType.selectedIndex].text;
   //se crea una variable , al apretar el usuario el select  yo guardar en una variable el valor del select
   // selectedIndex  indice que quiero sacar 
   //.text valor del index
   console.log(tipoFilter);
  
   let filtered = filterPoketype(pokeData,tipoFilter);
    containerRoot.innerHTML = '';
    // para mostrar la data
    filtered.forEach(element => {
     containerRoot.innerHTML += `
     <div class="img">
     <img src="${element.img}">
     </div>
     <h3>${element.type}</h3>
     <p>${element.name}</p>`
    })
   
})

   
// ORDENAR

const pokeOrder = document.getElementById("name");
const container = document.getElementById('root');

pokeOrder.addEventListener('change', () => {
    let sortOrder = pokeOrder.value;
    let selectionOrder = sortPokes(pokeData,"name",sortOrder);
    container.innerHTML ="";

    selectionOrder.forEach(element=> {
        container.innerHTML += `
        <div class="img">
     <img src="${element.img}">
     </div>
     <h3>${element.name}</h3>
     <p>${element.type}</p>`
    })
   })
 