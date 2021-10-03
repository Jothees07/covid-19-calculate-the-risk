function checkBox() {
    var checkBox = document.getElementById("anyOther");
    var input = document.getElementById("input");
    if (checkBox.checked == true){
      input.style.display = "block";
    } else {
       input.style.display = "none";
    }
  }
  function checked()
  {
  var cold = document.getElementById("cold");
  var fever = document.getElementById("fever");
  var runningNose = document.getElementById("runningNose");
  var diarrhoea = document.getElementById("diarrhoea");
  var throatPain = document.getElementById("throatPain");
  var tiredness = document.getElementById("tiredness");
  var tasteless = document.getElementById("tiredness");
  var smellless = document.getElementById("smellless");
  var headAche =document.getElementById("headAche");
  var breatheProblem = document.getElementById("breatheProblem");
 
  let a,b,c,d,e,f,g,h,i,j;

  if(cold.checked== true)
  {
    a=10;
  }else{a=0}
  if(fever.checked== true)
  {
    b=10;
  }else{b=0}
  if(runningNose.checked== true)
  {
    c=10;
  }else{c=0}
  if(diarrhoea.checked== true)
  {
    d=5;
  }else{d=0}
  if(throatPain.checked== true)
  {
    e=5;
  }else{e=0}
  if(tiredness.checked== true)
  {
    f=5;
  }else{f=0}
  if(tasteless.checked== true)
  {
    g=15;
  }else{g=0}
  if(smellless.checked== true)
  {
    h=15;
  }else{h=0}
  if(breatheProblem.checked== true)
  {
    i=20;
  }else{i=0}
  if(headAche.checked == true)
  {
    j=5;
  }else {
    j=0;
  }
  let sum=a+b+c+d+e+f+g+h+i+j;
  if (sum>50){
     window.open("resultp.html");
     
}else{
  window.open("resultn.html");
}
  

}
  
  