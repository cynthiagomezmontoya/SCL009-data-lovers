const filterLol = (lolData,tags) => { 
  let result = lolData.filter(element => {
    return element.tags.includes(tags); 
  }) 
  return result;
}

window.filterLol = filterLol;


  
  
