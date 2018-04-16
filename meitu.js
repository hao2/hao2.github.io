for(var i=0;i<4;i++)
{
	document.getElementsByTagName("a")[i].onclick=function(){
		document.getElementById("tu").src=this.href;
		return false;
	}
}
