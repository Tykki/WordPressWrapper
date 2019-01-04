function loadXMLDoc(service)
{
	var xmlhttp;
	var txt, x, xx, i, header_image_src, header_image_alt;
	
	if (window.XMLHttpRequest)
	{// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp=new XMLHttpRequest();
	}
	else
	{// code for IE6, IE5
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	
		xmlhttp.onreadystatechange=function()
		{
			if (xmlhttp.readyState==4 && xmlhttp.status==200)
			{
				txt="";
				x=xmlhttp.responseXML.documentElement.getElementsByTagName("SV");
				for (i=0;i<x.length;i++)
				{
					xx=x[i].getElementsByTagName("KEYWORD");
					if(xx[0].firstChild.nodeValue == service)
					{
						xx=x[i].getElementsByTagName("TITLE");
						{
						try
						{
							txt=txt + "<h2>" + xx[0].firstChild.nodeValue + "</h2>";
						}
						catch (er)
						{
						
						}
					}
					
					xx=x[i].getElementsByTagName("PHONE");
					{
						try
						{
						txt=txt + "<strong>Phone: </strong>" + xx[0].firstChild.nodeValue + "<br><br>";
						}
						catch (er)
						{
	
					}
				}
				
				xx=x[i].getElementsByTagName("HOURS");
				{
					try
					{
						txt=txt + "<strong>Hours: </strong>" + xx[0].firstChild.nodeValue + "<br><br>";
					}
					catch (er)
					{
	
					}
				}
				
				xx=x[i].getElementsByTagName("LOCATION");
				{
					try
					{
						txt=txt + "<strong>Location: </strong>" + xx[0].firstChild.nodeValue + "<br><br>";
					}
					
					catch (er)
					{
						
					}
				}
				
				xx=x[i].getElementsByTagName("WEBSITE");
				{
					try
					{
						z = xx[0].firstChild.nodeValue
						txt=txt + "<a href =\"" + z + "\">" + z + "</a><br><br>";
					}
					catch (er)
					{
	
					}
				}
				
				xx=x[i].getElementsByTagName("IMAGE");
				{
					try
					{
						header_image_src=xx[0].firstChild.nodeValue;
					}
					catch (er)
					{
				  
					}
				}
				
				xx=x[i].getElementsByTagName("ALT");
				{
					try
					{			 
						header_image_alt =xx[0].firstChild.nodeValue;
					}
				catch (er)
				{
					
				}
			}			
		}
	}

	document.getElementById('box').style.display='block';
	document.getElementById('fade').style.display='block';
	document.getElementById('txtCDInfo_text').innerHTML=txt;
	document.getElementById('header_image').src = header_image_src;
}
}
xmlhttp.open("GET",'services.xml',true);
xmlhttp.send();
}

function loadFloorXMLDoc(service)
{
	var xmlhttp;
	var txt,x,xx,i, map_image_src;
	if (window.XMLHttpRequest)
	{// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp=new XMLHttpRequest();
	}
	else
	{// code for IE6, IE5
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange=function()
	{
		if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
		txt="";
		x=xmlhttp.responseXML.documentElement.getElementsByTagName("FLOORNAME");
		for (i=0;i<x.length;i++)
		{
			xx=x[i].getElementsByTagName("KEYWORD");
			
			if(xx[0].firstChild.nodeValue == service)
			{			
				xx=x[i].getElementsByTagName("IMAGE");
				{
					try
					{
						map_image_src=xx[0].firstChild.nodeValue
					}
					catch (er)
					{
						
					}
				}
				
				xx=x[i].getElementsByTagName("MAP");
				{
					try
						{
							map_image_useMap=xx[0].firstChild.nodeValue;			  
						}
						catch (er)
						{
						 
						}
				}
					
				xx=x[i].getElementsByTagName("INFO");
				{
					try
					{
						txt = xx[0].firstChild.nodeValue;			  
					}
					catch (er)
					{
					  
					}
				}
	}
}

document.getElementById('header_image').src = "placeholder.png";
document.getElementById('header_image').alt = "header";
document.getElementById('summary').innerHTML=txt;
document.getElementById('img').innerHTML = "<img src=\"" + map_image_src + "\" alt=\"map\" id=\"map_image\" usemap=\"" + map_image_useMap + "\" class=\"map\">";
$('.map').maphilight();

}
}
xmlhttp.open("GET",'floors.xml',true);
xmlhttp.send();
}
