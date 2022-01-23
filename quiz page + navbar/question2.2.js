function questionFunction4(){
    document.getElementById('number2').style.backgroundColor='rgb(233, 105, 105)';
    document.getElementById('count2').style.backgroundColor='rgb(233, 105, 105)';
   
    var all = document.getElementsByClassName('questionbuttonwrong3');
for (var i = 0; i < all.length; i++) {
all[i].disabled = 'true';
all[i].setAttribute("class", "questionbuttonwrong2")

};
var all = document.getElementsByClassName('questionbuttonwrong3');
for (var i = 0; i < all.length; i++) {
all[i].disabled = 'true';
all[i].setAttribute("class", "questionbuttonwrong2")
  };
  questionbuttonright3.setAttribute("class", "questionbuttonright2");
  questionbuttonright3.disabled = 'true';
  document.getElementById('num2').innerHTML= "Answer saved Marked 0 of 1 ";
  }