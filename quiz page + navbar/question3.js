function questionFunction5(){
    document.getElementById('number3').style.backgroundColor='#48C9B0';
    document.getElementById('count3').style.backgroundColor='#48C9B0';
   
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
   document.getElementById('num3').innerHTML= "Answer saved Marked 1 of 1 ";
 
  }