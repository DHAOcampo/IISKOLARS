function questionFunction(){
  
    document.getElementById('number').style.backgroundColor='#48C9B0';
    document.getElementById('count1').style.backgroundColor='#48C9B0';
   
    var all = document.getElementsByClassName('questionbuttonwrong');
for (var i = 0; i < all.length+1; i++) {
all[i].disabled = 'true';
all[i].setAttribute("class", "questionbuttonwrong2")

};
var all = document.getElementsByClassName('questionbuttonwrong');
for (var i = 0; i < all.length+1; i++) {
all[i].disabled = 'true';
all[i].setAttribute("class", "questionbuttonwrong2")
  };
  questionbuttonright.setAttribute("class", "questionbuttonright2");
  questionbuttonright.disabled = 'true';
  document.getElementById('num1').innerHTML= " Answer saved Marked 1 of 1 ";
   
  }