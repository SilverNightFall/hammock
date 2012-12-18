var xHRObject = false;
if (window.XMLHttpRequest)
{
xHRObject = new XMLHttpRequest();
}
else if (window.ActiveXObject)
{
xHRObject = new ActiveXObject("Microsoft.XMLHTTP");
} 

function sendRequest(data)
{
var bodyofrequest = getBody(data); 
xHRObject.open("POST", "display.php", true);
xHRObject.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
xHRObject.onreadystatechange = getData;
xHRObject.send(bodyofrequest); 
}

function getBody(data)
{
     var argument = "value=";
     argument += encodeURIComponent(data)  
     return argument;
}

function getData()
{
    if (xHRObject.readyState == 4 && xHRObject.status == 200)
    {
        var serverText = xHRObject.responseText;

        if(serverText.indexOf('|' != -1)) 
	    {
            element = serverText.split('|');
            document.getElementById(element[0]).innerHTML = element[1];
        }
    }
}

