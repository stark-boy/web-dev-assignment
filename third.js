var check=false;
var x=document.getElementById("abcd");
x.innerHTML=0;
function changesize(){
x.innerHTML++;
}
function func()
{
if(!check)
  {
  check=true;
  changesize();
  setTimeout(function(){ check=false;},2000);
  }
}
