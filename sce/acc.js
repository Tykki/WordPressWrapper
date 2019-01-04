function loadXMLDoc()
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
                        if(cont(xx, "F3"))
                        {
                            f3 = f3 + txt;
                        }
                        if(cont(xx, "F4"))
                        {
                            f4 = f4 + txt;
                        }
                        if(cont(xx, "FB"))
                        {
                            fb = fb + txt;
                        }
                        if(cont(xx, "T1"))
                        {
                            t1 = t1 + txt;
                        }
                        if(cont(xx, "T2"))
                        {
                            t2 = t2 + txt;
                        }
                        if(cont(xx, "T3"))
                        {
                            t3 = t3 + txt;
                        }
                        if(cont(xx, "T4"))
                        {
                            t4 = t4 + txt;
                        }
                        if(cont(xx, "T5"))
                        {
                            t5 = t5 + txt;
                        }
                        if(cont(xx, "T6"))
                        {
                            t6 = t6 + txt;
                        }
                        if(cont(xx, "T7"))
                        {
                            t7 = t7 + txt;
                        }
                        if(cont(xx, "T8"))
                        {
                            t8 = t8 + txt;
						}
                    }
                    catch (er)
                    {
                        
                    }
                }
                
                txt = "";
            }

            document.getElementById('f1').innerHTML=f1;
            document.getElementById('f2').innerHTML=f2;
            document.getElementById('f3').innerHTML=f3;
            document.getElementById('f4').innerHTML=f4;
            document.getElementById('fB').innerHTML=fb;
            document.getElementById('t1').innerHTML=t1;
            document.getElementById('t2').innerHTML=t2;
            document.getElementById('t3').innerHTML=t3;
            document.getElementById('t4').innerHTML=t4;
            document.getElementById('t5').innerHTML=t5;
            document.getElementById('t6').innerHTML=t6;
            document.getElementById('t7').innerHTML=t7;
            document.getElementById('t8').innerHTML=t8;
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
