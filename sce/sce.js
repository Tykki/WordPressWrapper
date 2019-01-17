function loadXMLDoc(shortened)
{
    var xmlhttp;
    var txt,x,xx,i, header_image_src, header_image_alt;
    var f1 = f2 = f3 = f4 = fb = t1 = t2 = t3 = t4 = t5 = t6 = t7 = t8 = "";
    
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
					txt += '<img src="' + xx[0].firstChild.nodeValue + '" alt="header" />';
				}
				catch (e)
				{
					
				}
				
                xx=x[i].getElementsByTagName("TITLE");
				try
				{
					txt += "<br><h2><strong>" + xx[0].firstChild.nodeValue + "</strong></h2><br>";
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
					if(cont(xx, "F3"))
					{
						f3 += txt;
					}
					if(cont(xx, "F4"))
					{
						f4 += txt;
					}
					if(cont(xx, "FB"))
					{
						fb += txt;
					}
					if(cont(xx, "T1"))
					{
						t1 += txt;
					}
					if(cont(xx, "T2"))
					{
						t2 += txt;
					}
					if(cont(xx, "T3"))
					{
						t3 += txt;
					}
					if(cont(xx, "T4"))
					{
						t4 += txt;
					}
					if(cont(xx, "T5"))
					{
						t5 += txt;
					}
					if(cont(xx, "T6"))
					{
						t6 += txt;
					}
					if(cont(xx, "T7"))
					{
						t7 += txt;
					}
					if(cont(xx, "T8"))
					{
						t8 += txt;
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
				case "f3":
					text = f3;
					break;
				case "f4":
					text = f4;
					break;
				case "fb":
					text = fb;
					break;
				case "t1":
					text = t1;
					break;
				case "t2":
					text = t2;
					break;
				case "t3":
					text = t3;
					break;
				case "t4":
					text = t4;
					break;
				case "t5":
					text = t5;
					break;
				case "t6":
					text = t6;
					break;
				case "t7":
					text = t7;
					break;
				case "t8":
					text = t8;
					break;
				default:
					text = "err";
			}
			
			document.getElementById('floor').innerHTML = text;
			
			jQuery_1_5_2("area.fancy").fancybox();
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
	
	jQuery_1_5_2('.map').maphilight();

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
		case "mainfloor3":
			return "f3";
		case "mainfloor4":
			return "f4"
		case "mainfloorB":
			return "fb";
		case "towerfloor1":
			return "t1";
		case "towerfloor2":
			return "t2";
		case "towerfloor3":
			return "t3";
		case "towerfloor4":
			return "t4";
		case "towerfloor5":
			return "t5";
		case "towerfloor6":
			return "t6";
		case "towerfloor7":
			return "t7";
		case "towerfloor8":
			return "t8";
	}
	return "err";
}
