var colors=generateColors(6);
var sq=document.querySelectorAll(".square")
var pickedColor=colors[pickcolor()];
var disp=document.querySelector("#disp");
var message=document.querySelector("#message");		
var reset=document.querySelector(".New")
var easyBtn=document.querySelector("#easyBtn");
var hardBtn=document.querySelector("#hardBtn");
var flag;
disp.textContent=pickedColor;
for(var i=0;i<sq.length;i++)
{
 sq[i].style.backgroundColor=colors[i];
 sq[i].addEventListener("click",function(){
 	var clickedcolor=this.style.backgroundColor;
 	if(clickedcolor==pickedColor){
        reset.textContent="Play Again!"
 		 message.textContent="Bruh! You Got It Right";
 		for(var i=0;i<sq.length;i++){
 		sq[i].style.backgroundColor=clickedcolor;
 		}
 		document.querySelector("h1").style.backgroundColor=clickedcolor;
 	}else
    {this.style.backgroundColor="#212121";
     message.textContent="Try Again";
}
 })
}
function pickcolor()
{    
	return Math.floor(Math.random()*(colors.length));
}
function generateColors(num){
	var arr=[];
	for(var i=0;i<num;i++)
	{
    arr.push(getcolor());
	}
return arr;
}
function getcolor()
{
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);
   return "rgb("+r+", "+g+", "+b+")";
}
reset.addEventListener("click",function(){	
	message.textContent="";
	if(flag==0)		
	{colors=generateColors(3);}
else{
	colors=generateColors(6);

}

pickedColor=colors[pickcolor()];
disp.textContent=pickedColor;
 		document.querySelector("h1").style.backgroundColor="steelblue"; 
        reset.textContent="New Game"
for(var i=0;i<sq.length;i++){ sq[i].style.backgroundColor=colors[i];
}

})
easyBtn.addEventListener("click",function(){
	flag=0;
	message.textContent="";
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
    colors= generateColors(3);
    pickedColor=colors[pickcolor()];
    disp.textContent=pickedColor;
    for(var i=3;i<6;i++)
    {
    	sq[i].style.display="none";
    } 
    for(var i=0; i<3;i++)
    {
    	sq[i].style.backgroundColor=colors[i];
    }
})
hardBtn.addEventListener("click",function(){
	flag=1;
	message.textContent="";
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	 colors= generateColors(6);
    pickedColor=colors[pickcolor()];
    disp.textContent=pickedColor;
     for(var i=3;i<6;i++)
    {
    	sq[i].style.display="block";
    } 
    for(var i=0; i<6;i++)
    {
    	sq[i].style.backgroundColor=colors[i];
    }

})