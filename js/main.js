function deleteMe(){
document.getElementById("myResult").value = "";
}
function showCalculator(newValue){
document.getElementById("myResult").value +=newValue;
}
function result(){
    let  a = document.getElementById("myResult").value;
    let b = eval(a);
    document.getElementById("myResult").value=b;


}