var value1 = document.getElementById("value1");
var value2 = document.getElementById("value2");
var table1 = document.getElementById("table1");

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
        addMatchedValue();
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
        addUnmatchedValue();
    }
}

setInterval(() => {
    roll();
    check();
}, 5000);

function addMatchedValue(){
    var m_table = document.getElementById("m_table"),
    m_newRow = m_table.insertRow(m_table.length),
    m_cell1 = m_newRow.insertCell(0),
    m_cell2 = m_newRow.insertCell(1),
    m_cell3 = m_newRow.insertCell(2)
    
  m_cell1.innerHTML= value1.value;
  m_cell2.innerHTML= value2.value;
  m_cell3.innerHTML= cnt;
}

function addUnmatchedValue(){
    var unm_table = document.getElementById("unm_table"),
    unm_newRow = unm_table.insertRow(unm_table.length),
    unm_cell1 = unm_newRow.insertCell(0),
    unm_cell2 = unm_newRow.insertCell(1),
    unm_cell3 = unm_newRow.insertCell(2)
    
  unm_cell1.innerHTML= value1.value;
  unm_cell2.innerHTML= value2.value;
  unm_cell3.innerHTML= cnt1;
}




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