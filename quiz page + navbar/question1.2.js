function questionFunction2(){
    document.getElementById('number').style.backgroundColor='rgb(233, 105, 105)';
   
    var all = document.getElementsByClassName('questionbuttonwrong');
for (var i = 0; i < all.length; i++) {
all[i].disabled = 'true';
all[i].setAttribute("class", "questionbuttonwrong2")

};
var all = document.getElementsByClassName('questionbuttonwrong');
for (var i = 0; i < all.length; i++) {
all[i].disabled = 'true';
all[i].setAttribute("class", "questionbuttonwrong2")
  };
  questionbuttonright.setAttribute("class", "questionbuttonright2");
  questionbuttonright.disabled = 'true';
  document.getElementById('num1').innerHTML= " Answer saved Marked 0 of 1 ";
  
  }