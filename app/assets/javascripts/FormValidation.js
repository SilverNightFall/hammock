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
    if ((xHRObject.readyState == 4) && (xHRObject.status == 200))
     {
         var serverText = xHRObject.responseText;
         if (serverText == "True")
         {
            span.innerHTML = "This user name has already been taken";
         }
         if (serverText == "False")
         {
            span.innerHTML = "This user name is available";
         }
   }
}

function getBody(newform, data)
{
     var argument = data + "=";
     argument += encodeURIComponent(document.getElementById(data).value)  
     return argument;
}

function Validate(data)
{
    var newform = document.forms[0];
    var bodyofform = getBody(newform, data); 
    if (bodyofform != "UserName=")
    {
    xHRObject.open("POST", "Validate.php", true);
    xHRObject.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xHRObject.onreadystatechange = getData;
    xHRObject.send(bodyofform); ;  
    }
    else
    {
        span.innerHTML = "Blank user names not allowed";
    }  
}




$(document).ready(function () {


    $("#order_pay_type").change(function(){
 if($(this).val() == "Credit card"){
   $("#creditcard").show();
   $("#check").hide();
    $("#purchaseorder").hide();
 }else if ($(this).val() == "Check"){
  $("#check").show();
   $("#creditcard").hide();
   $("#purchaseorder").hide();
 }else if ($(this).val() == "Purchase order"){
   $("#purchaseorder").show();
   $("#creditcard").hide();
    $("#check").hide();
 }
});
    });


