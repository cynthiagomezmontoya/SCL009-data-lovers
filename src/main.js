const lolData = Object.values(window.LOL.data); //const para acceder a la data

const container = document.getElementById("root");
const num = document.getElementById('calculation'); 

 //DOM FUNCIÓN FILTRAR
 document.getElementById("lol-filter").addEventListener("change",() => {
    let rolFilter = document.getElementById("lol-filter").value; 
    let lastResult = window.filterLol(lolData,rolFilter); 
    container.innerHTML ="";
    lastResult.forEach(element => {
        container.innerHTML += `
        <div class="img">
     <img src="${element.img}">
     </div>
     <h3>${element.tags}</h3>
     <p>${element.name}</p>`

     
    })
    });
      
  
