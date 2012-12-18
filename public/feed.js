// stores the reference to the XMLHttpRequest object
var request = makeHTR(); 

// retrieves the XMLHttpRequest object
function makeHTR() 
{	
  // will store the reference to the XMLHttpRequest object
  var request;
  // if running Internet Explorer
  if(window.XMLHttpRequest)
  {
    try
    {
      request = new XMLHttpRequest();
    }
    catch (e) 
    {
      request = null;
    }
  }
  // if running Mozilla or other browsers
  else
  {
    try 
    {
      request = new ActiveXObject("Microsoft.XMLHTTP");
    }
    catch (e) 
    {
      request = null;
    }
  }
  // return the created object or display an error message
  if (!request)
 
    alert("Error creating the XMLHttpRequest object.");
  else 
    return request;
}

// make asynchronous HTTP request using the XMLHttpRequest object 
function sendRequest()
{	
// proceed only if the xmlHttp object isn't busy
if (request.readyState == 4 || request.readyState == 0) {
    //add a variable which changes to workound IE cache issue
    num = Math.round(Math.random()*999999);
	
	request.open("GET", "FeedRead3.php?id="+num, true);  
    // define the method to handle server responses
    request.onreadystatechange = processResults;
    // make the server request
    request.send(null);
  }
  else
    // if the connection is busy, try again after one second  
    setTimeout('sendRequest()', 1000);
}

// executed automatically when a message is received from the server
function processResults() 
{
  // move forward only if the transaction has completed
  if (request.readyState == 4) 
  {
    // status of 200 indicates the transaction completed successfully
    if (request.status == 200) 
    {

	  // extract the XML retrieved from the server
	  var textResponse = request.responseText;
	  alert('Updating the Feed');
      document.getElementById('displayResults').innerHTML = textResponse;
	  	 
	  
      // obtain the document element (the root element) of the XML structure

      // update the client display using the data received from the server
    } 
    // a HTTP status different than 200 signals an error
    else 
    {
      alert("There was a problem accessing the server: " + request.statusText);
    }
  }
}

	

	