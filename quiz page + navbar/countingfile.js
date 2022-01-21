function fart(){
    var z = localStorage.getItem("z");
    
    if(z==3){
        document.getElementById("demo2").innerHTML = z;
        z = 0;
        localStorage.setItem("z", z);

    }

  
    if(z==2){
        document.getElementById("demo2").innerHTML = z;
        z = 3;
        localStorage.setItem("z", z);

    }

    
    

    if(z==1){
        document.getElementById("demo2").innerHTML = z;
        z = 2;
        localStorage.setItem("z", z);

    }

         if(z==0){
            document.getElementById("demo2").innerHTML = z;
            z = 1;
            localStorage.setItem("z", z);
 
        }
        
    
   
   
    

}