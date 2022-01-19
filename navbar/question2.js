function questionFunction3(){
    document.getElementById('number2').style.backgroundColor='green';
   
    var all = document.getElementsByClassName('questionbuttonwrong3');
for (var i = 0; i < all.length+1; i++) {
all[i].disabled = 'true';
all[i].setAttribute("class", "questionbuttonwrong2")

};
var all = document.getElementsByClassName('questionbuttonwrong3');
for (var i = 0; i < all.length+1; i++) {
all[i].disabled = 'true';
all[i].setAttribute("class", "questionbuttonwrong2")
  };
  questionbuttonright3.setAttribute("class", "questionbuttonright2");
  questionbuttonright3.disabled = 'true';
  document.getElementById('num2').innerHTML= "Answer saved Marked 1 of 1 ";
  }