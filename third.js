var check=false;
var x=document.getElementById("abcd");
x.innerHTML=0;
function changesize(){
x.innerHTML++;
check=false;
}
function func()
{
if(!check)
  {
  check=true;
  setTimeout(changesize,2000);
  }
}
