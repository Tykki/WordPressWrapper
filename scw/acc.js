function loadXMLDoc()
{
    var xmlhttp;
    var txt,x,xx,i, header_image_src, header_image_alt;
    var f1 = f2 = fb = "";
	
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

                xx=x[i].getElementsByTagName("TITLE");
                {
                    try
                    {
                        txt=txt + "<h3>" + xx[0].firstChild.nodeValue + "</h3>";
                    }
                    catch (er)
                    {

                    }
                }

                xx=x[i].getElementsByTagName("PHONE");
                {
                    try
                    {
                        txt=txt + "<strong>Phone: </strong>" + xx[0].firstChild.nodeValue + "<br/><br/>";
                    }
                    catch (er)
                    {

                    }
                }

                xx=x[i].getElementsByTagName("HOURS");
                {
                    try
                    {
                        txt=txt + "<strong>Hours: </strong>" + xx[0].firstChild.nodeValue + "<br/><br/>";
                    }
                    catch (er)
                    {

                    }
                }

                xx=x[i].getElementsByTagName("LOCATION");
                {
                    try
                    {
                        txt=txt + "<strong>Location: </strong>" + xx[0].firstChild.nodeValue + "<br/><br/>";
                    }
                    catch (er)
                    {

                    }
                }

                xx=x[i].getElementsByTagName("WEBSITE");
                {
                    try
                    {
                        txt=txt + "<a href=\"" + xx[0].firstChild.nodeValue + "\">" + xx[0].firstChild.nodeValue + "</a><br/><br/>";
                    }
                    catch (er)
                    {

                    }
                }
                
                xx=x[i].getElementsByTagName("FLOOR");
                {
                    try
                    {
                        if(cont(xx, "F1"))
                        {
                            f1 = f1 + txt;
                        }
                        if(cont(xx, "F2"))
                        {
                            f2 = f2 + txt;
                        }
                        if(cont(xx, "FB"))
                        {
                            fb = fb + txt;
                        }
                    }
                    catch (er)
                    {
                        
                    }
                }
                
                txt = "";
            }

            document.getElementById('sf1').innerHTML=f1;
            document.getElementById('sf2').innerHTML=f2;
            document.getElementById('sfb').innerHTML=fb;
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
