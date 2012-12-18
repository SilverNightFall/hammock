
var isbn = null;
var http = null;
   
function mousebox(isbn)
{            
            if (window.ActiveXObject)
            {
                http = new ActiveXObject("Microsoft.XMLHTTP");
            }
            else if (window.XMLHttpRequest)
            {
                http = new XMLHttpRequest();
            }
            http.open("GET", "Catalogue.xml", false);
            http.send(null);
            var xml = http.responseXML;
       
            //Load XSL
            
            
            if (window.ActiveXObject)
            {
            var xsl = new ActiveXObject("MSXML2.FreeThreadedDomDocument.3.0");
            xsl.async = false
            xsl.load("Catalogue.xsl")
            
            var template = new ActiveXObject("MSXML2.XSLTemplate")
            template.stylesheet = xsl
            processor = template.createProcessor()

            processor.input = xml
            processor.addParameter("ISBN", isbn)
            processor.transform()
            
             //Transform
            return processor.output;
}
else
{ 
              
                var xsltProcessor = new XSLTProcessor();
           
              //Load XSL
              http = new XMLHttpRequest();
              http.open("GET", "Catalogue.xsl", false);
              http.send(null);
  
              xslStylesheet = http.responseXML;
              
              xsltProcessor.importStylesheet(xslStylesheet);              
              xsltProcessor.setParameter(null, "ISBN", isbn);
              
              //Transform
              var fragment = xsltProcessor.transformToFragment(xml, document);
              return new XMLSerializer().serializeToString(fragment);

}
          
}

