const clr =new Array("#191825","hsl(236, 33%, 92%)");
const clr1 =new Array("hsl(235, 24%, 19%)","white");
const g =new Array("1","2","3","4","5","6");
const svgi =new Array("images/icon-sun.svg","images/icon-moon.svg");
const bgi =new Array('bg-desktop-dark.jpg',"url('bg-desktop-light.jpg')");
const svgi2 =new Array("images/icon-check.svg","images/icdark.svg");
var i=0;
function bg()
{
    
    document.getElementById("bodys").style.backgroundColor = clr[i%2];
    document.getElementById("texttoinsert").style.backgroundColor = clr1[i%2];
    document.getElementById("todotable").style.backgroundColor = clr1[i%2];
    document.getElementById("todotable").style.color = clr1[i%2];
    document.getElementById("svgi").src= svgi[i%2];
    document.getElementById("svgi2").src= svgi2[i%2];
    document.getElementById("buttoinsert").style.backgroundColor = clr1[i%2];
    
    
    
    if((i%2)==0)
    {
        document.getElementById("todo").style.backgroundImage = "url('images/bg-desktop-dark.jpg')";
        

    }
    else
    {
        document.getElementById("todo").style.backgroundImage = "url('images/bg-desktop-light.jpg')";
        

    }
    i++;
}
function createtodo() {
    var table = document.getElementById("todotable");
    
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var x = document.getElementById("texttoinsert").value;
    var y = document.createElement("INPUT");
    y.setAttribute("type", "checkbox");
    y.setAttribute("class", "check1");
    cell1.setAttribute("class", "chec");
    y.setAttribute("id", i);

    
    cell1.innerHTML = x;
    cell2.appendChild(y) ;
    document.getElementById("texttoinsert").value = "";
}
function check()
{

}
