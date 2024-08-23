function clearScreen(){
    document.getElementById("result").value = " ";
    }
    function display(value){
    document.getElementById("result").value += value;
    }
    function calculate(){
    try{
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
    }
    catch(error){
    document.getElementById("result").value = "error";
    }
    }
    function del(){
    if(document.getElementById("result").value === "error"){
    document.getElementById("result").value = " ";
    }else{
    var p = document.getElementById("result").value;
    var q = p.slice(0,-1);
    
    document.getElementById("result").value = q;
    }
    }