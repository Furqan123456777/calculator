var inp =document.getElementById ("input");

function getvalue(e){
    inp. value += e;
}

function equalvalue(){
    try{
        inp.value = eval(inp.value);
    }
    catch{
        inp.value = "Error";
    }
    
}

function CE(){
    inp.value = inp.value.slice(0,-1);
}

function crl(){
    inp.value = ""
}
    
    
