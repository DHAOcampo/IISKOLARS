function questionFunction6(){
    document.getElementById('number3').style.backgroundColor='rgb(233, 105, 105)';
    document.getElementById('count3').style.backgroundColor='rgb(233, 105, 105)';
   
    var all = document.getElementsByClassName('questionbuttonwrong4');
for (var i = 0; i < all.length+1; i++) {
all[i].disabled = 'true';
all[i].setAttribute("class", "questionbuttonwrong2")

};
var all = document.getElementsByClassName('questionbuttonwrong4');
for (var i = 0; i < all.length+1; i++) {
all[i].disabled = 'true';
all[i].setAttribute("class", "questionbuttonwrong2")
  };
  questionbuttonright4.setAttribute("class", "questionbuttonright2");
  questionbuttonright4.disabled = 'true';
  document.getElementById('num3').innerHTML= "Answer saved Marked 0 of 1 ";
  }