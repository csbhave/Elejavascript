var value1 = document.getElementById("value1");
var value2 = document.getElementById("value2");
var arr1=[];
var arr2=[];
var cnt=0, cnt1=0;
function check(){
    if(value1.value.length == 0  && value2.value.length == 0){
        console.log("cannot received both value");
        document.getElementById("error").classList.add("bg-red");
        document.getElementById("error").innerHTML = "cannot received both value";                
        return false;
    }
    if(value1.value == value2.value){
        console.log("value accepted");
        document.getElementById("error").classList.remove("bg-red");
        document.getElementById("error").classList.add("bg-green");
        document.getElementById("error").innerHTML = "value accepted!";        
        cnt++;
        collection();
        return true;
    }
    if(value1.value.length == 0 && value2.value){
        console.log("cannot received 1 st value");
        document.getElementById("error").classList.add("bg-orange");
        document.getElementById("error").innerHTML = "cannot received 1 st value";        
        return false;
    }
    if(value2.value.length == 0 && value1.value){
        console.log("cannot received 2 nd value");
        document.getElementById("error").classList.add("bg-orange");
        document.getElementById("error").innerHTML = "cannot received 2 nd value";        
        return false;
    }    
    else{
        console.log("value cannot accepted");
        document.getElementById("error").classList.remove("bg-green");
        document.getElementById("error").classList.add("bg-red");
        cnt1++;
        document.getElementById("unmatch_counter").innerHTML = cnt1;
        document.getElementById("unmatch_value1op").innerHTML = value1.value;
        document.getElementById("unmatch_value2op").innerHTML = value2.value;
              
        document.getElementById("error").innerHTML = "value cannot accepted";        
    }
}

setInterval(() => {
    roll();
    check();
}, 1000);


function roll1(){
    document.getElementById("value1").value =  Math.floor(Math.random() * 10);;
}

function roll2(){
    document.getElementById("value2").value =  Math.floor(Math.random() * 10);;
}

function roll(){
    document.getElementById("value1").value =  Math.floor(Math.random() * 10);;
    document.getElementById("value2").value =  Math.floor(Math.random() * 10);;
}

function collection(){
    console.log("value1: "+value1.value);
    console.log("value2: "+value2.value);
    document.getElementById("value1op").innerHTML=value1.value;
    document.getElementById("value2op").innerHTML=value2.value;
    document.getElementById("counter").innerHTML=cnt;
    // arr1.push(value1.value);
    // arr2.push(value2.value);    
    console.log("Counter is: "+cnt);    
    // for(var i=1;i<arr1.length-1;i++){
    //     console.log("value1: "+arr1[i]+" ittration no: "+i);
    //     console.log("value2: "+arr2[i]+" ittration no: "+i);
    // }

}