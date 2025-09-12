let yourScore=55;
if(yourScore>=70){
  document.getElementById("score").innerHTML=("Your Grade: A");
}else if(yourScore>=60){
  document.getElementById("score").innerHTML=("Your Grade: B");
}else if(yourScore>=50){
  document.getElementById("score").innerHTML=("Your Grade: C");
}else if (yourScore>=40){
  document.getElementById("score").innerHTML=("Your Grade: D");
}
else{
  document.getElementById("score").innerHTML=("Your Grade: F");

}