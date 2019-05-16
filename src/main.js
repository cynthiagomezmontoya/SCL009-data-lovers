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
      
  //CALCULO
//Dentro de la funcion se pide que aparezca el del calculo
document.getElementById("lol-filter").addEventListener("change",() => {
    document.getElementById("calculation").style.display = "block";
    let tags = document.getElementById("lol-filter").value; 
    let calcResult = window.computeStats(lolData,tags);
    num.innerHTML ="";
    num.innerHTML +=  `
    <div>
      <p> Del total de los campeones; ${calcResult} juegan este Rol </p>
    </div> 
    `    
  });
