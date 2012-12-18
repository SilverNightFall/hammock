var xHRObject = false;


if (window.XMLHttpRequest)
{
xHRObject = new XMLHttpRequest();
}
else if (window.ActiveXObject)
{
xHRObject = new ActiveXObject("Microsoft.XMLHTTP");
}

function getData()
{
    if ((xHRObject.readyState == 4) &&(xHRObject.status == 200))
    {
         var xmlDoc = xHRObject.responseXML;
         var test = xHRObject.responseText;
            if (window.ActiveXObject)
            {
            // Load XML 
            var xml = new ActiveXObject("Microsoft.XMLDOM");
            xml.async = false;
            xml.load("list.xml");
       
            //Load XSL
            var xsl = new ActiveXObject("Microsoft.XMLDOM");
            xsl.async = false;
            xsl.load("list.xsl");
       
            //Transform
            var transform = xml.transformNode(xsl);
            var spanb = document.getElementById("root"); 
            if (spanb != null)
            {
               spanb.innerHTML = transform; 
               makeDnD(document.getElementById("root"));
            }
            
            }
            
          
            else
            {
              
              var xsltProcessor = new XSLTProcessor();
              
              //Load XSL
              var XHRObject = new XMLHttpRequest();
              XHRObject.open("GET", "list.xsl", false);
              XHRObject.send(null);

              xslStylesheet = XHRObject.responseXML;
              xsltProcessor.importStylesheet(xslStylesheet);

              //Load XML
              XHRObject = new XMLHttpRequest();
              XHRObject.open("GET", "list.xml", false);
              XHRObject.send(null);
 
              xmlDoc = XHRObject.responseXML;
              
              //Transform
              var fragment = xsltProcessor.transformToFragment(xmlDoc, document);
              if(document.getElementById("root").innerHTML != "")
              {
                document.getElementById("root").innerHTML = "";
              }
              document.getElementById("root").appendChild(fragment);
              makeDnD(document.getElementById("root"));
              
                   }
    }
}



function SaveOrder()
{
   list = document.getElementById("root");
   var newlist= list.getElementsByTagName("div");
   querystring = "";
   for(var i = 0; i < newlist.length; i++) {
		querystring += "booktitle" + (i+1) + "=" + newlist[i].innerHTML;
		if (i!=newlist.length-1) querystring+="&";
   }
  
     querystring = encodeURI(querystring);
     xHRObject.open("GET", "SaveList.php?"+querystring,true);
     xHRObject.send(null);   
}


