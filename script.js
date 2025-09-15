function getArea(width,height){
  if(isNaN(height)|| isNaN(width))
    console.log("The paramees should be numbers");

}
try{
  getArea(3,"A");
}catch(e){
  console.log(e);
}
