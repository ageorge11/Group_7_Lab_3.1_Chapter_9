
/* add code here  */

function myFuncBlur1(){
    var title=document.getElementById("title");
    title.classList.remove("highlightable");
    }
    function myFuncBlur2(){
    var des=document.getElementById("description");
    des.classList.remove("highlightable");
    }
    function myFuncBlur3(){
    var med=document.getElementById("medium");
    med.classList.remove("highlightable");
    }
    function myFuncBlur4(){
    var yr=document.getElementById("year");
    yr.classList.remove("highlightable");
    }
    function myFuncBlur5(){
    var mus=document.getElementById("museum");
    mus.classList.remove("highlightable");
    }
    
    function myFuncFocus1(){
    var title=document.getElementById("title");
    title.classList.add("highlightable");
    title.classList.remove("error");
    }
    function myFuncFocus2(){
    var des=document.getElementById("description");
    des.classList.add("highlightable");
    des.classList.remove("error");
    }
    function myFuncFocus3(){
    var med=document.getElementById("medium");
    med.classList.add("highlightable");
    med.classList.remove("error");
    }
    function myFuncFocus4(){
    var yr=document.getElementById("year");
    yr.classList.add("highlightable");
    yr.classList.remove("error");
    }
    function myFuncFocus5(){
    var mus=document.getElementById("museum");
    mus.classList.add("highlightable");
    mus.classList.remove("error");
    }
    
    function preventDefault(){
    var title=document.getElementById("title");
    var des=document.getElementById("description");
    var med=document.getElementById("medium");
    var yr=document.getElementById("year");
    var mus=document.getElementById("museum");
    
    if(title.value==""){
    title.classList.add("error");
    }
    else{
    title.classList.remove("error");
    }
    
    
    if(des.value==""){
    des.classList.add("error");
    }
    else{
    des.classList.remove("error");
    }
    
    
    if(yr.value==""){
    yr.classList.add("error");
    }
    else{
    yr.classList.remove("error");
    }
    
    
    return(false);
    }