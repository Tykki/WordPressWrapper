function loadXMLDoc(shortened)
{
    var xmlhttp;
    var txt,x,xx,i, header_image_src, header_image_alt;
    var f1 = f2 = ll = "";
    
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
				
                try
                {
                    txt += '<div id="' + xx[0].firstChild.nodeValue + '" class="services">';
                }
				catch (er)
                {
					
                }

				xx=x[i].getElementsByTagName("IMAGE");
				try
				{
					txt += '<img src="' + xx[0].firstChild.nodeValue + '" alt="header" />'
				}
				catch (e)
				{
					
				}
				
                xx=x[i].getElementsByTagName("TITLE");
				try
				{
					txt += "<h2>" + xx[0].firstChild.nodeValue + "</h2>";
				}
				catch (er)
				{

				}
                

                xx=x[i].getElementsByTagName("PHONE");
				try
				{
					txt += "<strong>Phone: </strong>" + xx[0].firstChild.nodeValue + "<br/><br/>";
				}
				catch (er)
				{

				}
                

                xx=x[i].getElementsByTagName("HOURS");
				try
				{
					txt += "<strong>Hours: </strong>" + xx[0].firstChild.nodeValue + "<br/><br/>";
				}
				catch (er)
				{

				}
                

                xx=x[i].getElementsByTagName("LOCATION");
				try
				{
					txt += "<strong>Location: </strong>" + xx[0].firstChild.nodeValue + "<br/><br/>";
				}
				catch (er)
				{

				}
                

                xx=x[i].getElementsByTagName("WEBSITE");
				try
				{
					txt += "<a href=\"" + xx[0].firstChild.nodeValue + "\">" + xx[0].firstChild.nodeValue + "</a>";
				}
				catch (er)
				{

				}
                
				txt = txt + "<br /><br /></div>";
                xx=x[i].getElementsByTagName("FLOOR");
				try
				{
					if(cont(xx, "F1"))
					{
						f1 += txt;
					}
					if(cont(xx, "F2"))
					{
						f2 += txt;
					}
					if(cont(xx, "FB"))
					{
						ll += txt;
					}
				}
				catch (er)
				{

				}
                

                txt = "";
            }
			
			var text;
			
			switch(shortened)
			{
				case "f1":
					text = f1;
					break;
				case "f2":
					text = f2;
					break;
				case "ll":
					text = ll;
					break;
				default:
					text = "err";
			}
			
			document.getElementById('floor').innerHTML = text;
			
			$("area.fancy").fancybox();
        }
    }

    xmlhttp.open("GET",'services.xml',true);
    xmlhttp.send();
}
    

function cont(a, b)
{
    for(i = 0; i < a.length; i++)
    {
        if(a[i].firstChild.nodeValue == b)
            return true;
    }
    return false;
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
				try
				{
					map_image_src=xx[0].firstChild.nodeValue
				}
				catch (er)
				{
					
				}
				
				xx=x[i].getElementsByTagName("MAP");
				try
				{
					map_image_useMap=xx[0].firstChild.nodeValue;			  
				}
				catch (er)
				{
				 
				}
					
				xx=x[i].getElementsByTagName("INFO");
				try
				{
					txt = xx[0].firstChild.nodeValue;			  
				}
				catch (er)
				{
				  
				}
			}
		}


	document.getElementById('summary').innerHTML=txt;
	document.getElementById('img').innerHTML = "<img src=\"" + map_image_src + "\" alt=\"map\" id=\"map_image\" usemap=\"" + map_image_useMap + "\" class=\"map\">";



	var shortened = shorten(service);
	
	loadXMLDoc(shortened);
	
	$('.map').maphilight();

	}
}
xmlhttp.open("GET",'floors.xml',true);
xmlhttp.send();
}

function shorten(service)
{	switch(service)
	{
		case "mainfloor1":
			return "f1";
		case "mainfloor2":
			return "f2";
		case "lower":
			return "ll";
	}
	return "err";
}
