let array = new Array();
let i=0
function addelement(){
    array[i]=document.getElementById("input").value;
    alert("Element "+i+": "+ array[i]);
    i++;
    document.getElementById("input").value = "";
}
function showelement(){
    let e = "<hr>";
    for (let j = 0; j < array.length; j++) {
       e+= "Element "+j+": "+ array[j] + "<br/>"
    }
    document.getElementById("result").innerHTML = e;
}