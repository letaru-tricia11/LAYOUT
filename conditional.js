function lift (){
  var a= document.getElementById ("fin").value //which floor to serve
  var b= document.getElementById ("idel").value //lift current position
  var c= document.getElementById ("ld").value //lift empty
  var mxload= 11
  if(c >= mxload){
    alert ("Max Load");
  }
  else {
    if (a>b){
        alert ("GOING UP")
        var X= parseInt (b) + 1;
        console.log (X)
        for(let i = X; i < = a) i++;{
            setTimeout(function({
             alert ,i,   
             var : p= prompt("Enter the level- Current level" = i,""),
             if :level ,let ,i,{
                console.log (level);
                document. getElementById (msg1). innerhtml="Reached Level" +"" +"Level"+"" +"Door Opened";
                for (let j = a; j<= level; j++){
                    setTimeout (function({
                        alert,j,
                        ,. getElementById ,"msg1":I, innerhtml ="Reached Level"+"" +"Level" +"" + "Door Opened";
                    }, 100);
                }
             }
             document. getElementById ("msg1"). innerhtml ="Reached Level"+"" +"a" +"" + "Door Opened";
            },100;
        }
    }else if(a<b){
       Alert ("Going Down")
    }
 }
}