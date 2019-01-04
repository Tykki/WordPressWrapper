function servisearch(searchterm)
{
    var xmlhttp;
    var results,x,xx,found;

    var terms = searchterm.replace(/\s+/g,' ').toLowerCase().split(" ");

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
            var gt3 = false;

            for(i = 0; i< terms.length; i++)
            {
                if(terms[i].length >= 3)
                    gt3 = true;
            }

            if(gt3)
            {
                results = "";

                x=xmlhttp.responseXML.documentElement.getElementsByTagName("SV");

                for (i=0;i<x.length;i++)
                {

                    found = false;

                    xx=x[i].getElementsByTagName("KEYWORD");
                    try
                    {
                        if(strsearch(terms, xx[0].firstChild.nodeValue))
                        {
                            found = true;
                        }
                    }
                    catch (er)
                    {

                    }

                    if(!found)
                    {
                        xx=x[i].getElementsByTagName("TITLE");
                        try
                        {
                            if(strsearch(terms, xx[0].firstChild.nodeValue))
                            {
                                found = true;
                            }
                        }
                        catch (er)
                        {

                        }
                    }

                    if(!found)
                    {
                        xx=x[i].getElementsByTagName("ALT");
                        try
                        {
                            if(strsearch(terms, xx[0].firstChild.nodeValue))
                            {
                                found = true;
                            }
                        }
                        catch (er)
                        {

                        }
                    }

                    if(!found)
                    {
                        xx=x[i].getElementsByTagName("WEBSITE");
                        try
                        {
                            if(strsearch(terms, xx[0].firstChild.nodeValue))
                            {
                                found = true;
                            }
                        }
                        catch (er)
                        {

                        }
                    }

                    if(found)
                    {
                        xx=x[i].getElementsByTagName("TITLE");
                        try
                        {
                            results += "<h2>" + xx[0].firstChild.nodeValue + "</h2>";
                        }
                        catch (er)
                        {

                        }

                        xx=x[i].getElementsByTagName("PHONE");
                        try
                        {
                            results += "<strong>Phone: </strong>" + xx[0].firstChild.nodeValue + "<br/><br/>";
                        }
                        catch (er)
                        {

                        }

                        xx=x[i].getElementsByTagName("HOURS");
                        try
                        {
                                results += "<strong>Hours: </strong>" + xx[0].firstChild.nodeValue + "<br/><br/>";
                        }
                        catch (er)
                        {

                        }

                        xx=x[i].getElementsByTagName("LOCATION");
                        try
                        {
                                results += "<strong>Location: </strong>" + xx[0].firstChild.nodeValue + "<br/><br/>";
                        }
                        catch (er)
                        {

                        }

                        xx=x[i].getElementsByTagName("WEBSITE");
                        try
                        {
                                results += "<a href=\"" + xx[0].firstChild.nodeValue + "\">" + xx[0].firstChild.nodeValue + "</a><br/><br/>";
                        }
                        catch (er)
                        {

                        }
                    }
                }
            }

            if(!results)
            {
                results = "Sorry, we couldn't find any results related to your search: " + searchterm + "<br/>Only whole words that are 3 or more characters are searched.";
            }

            document.getElementById("level6").innerHTML = results;

        }
    }

    xmlhttp.open("GET",'services.xml',true);
    xmlhttp.send();
}

function strsearch(terms, b)
{
    for(j = 0; j < terms.length; j++)
		if(terms[j].length >= 3)
            if(b.toLowerCase().search(terms[j]) >= 0)
                return true;
    return false;
}

function handleEnter (field, event)
{
    var keyCode = event.keyCode ? event.keyCode : event.which ? event.which : event.charCode;
    if (keyCode == 13)
    {
        var i;
        for (i = 0; i < field.form.elements.length; i++)
            if (field == field.form.elements[i])
                break;
        i = (i + 1) % field.form.elements.length;
        field.form.elements[i].click();
        field.form.elements[i-1].blur();
        return false;
    }
    else
        return true;
}
