<?php   
$conn = new COM('ADODB.Connection') or exit('Cannot start ADO.');
$rs = new COM('ADODB.Recordset') or die('Coult not make rs'); 
$connstring = "Provider=Microsoft.Jet.OLEDB.4.0; Data Source=".realpath('chapter9.mdb').";"; 
$conn->Open($connstring); 
$sql = 'SELECT * from Users';
$rs->Open($sql, $conn, 1, 3); 
$rs = $conn->Execute($sql);
$check = "False";       
while (!$rs->EOF) 
 { 
      while (!$rs->EOF) 
 { 
       if ($rs->Fields['UserName']->value == $_POST["UserName"])
       {
              $check = "True";
       }
       $rs->MoveNext();
 }  

 }  
 $rs->Close(); 

$conn->Close(); 

$rs=null; 
$conn=null; 

echo $check;
?>
