function countSelected(selectObject){
  let numberSelected=0;
  for(let i=0; i<selectObject.options.length;i++){
    if(selectObject.options[i].selected){
      numberSelected++
    }
  }
}