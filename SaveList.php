<?php   
		$xmlDoc = new DomDocument('1.0');
	    $mainNode = $xmlDoc->createElement('books');
        $mainNode = $xmlDoc->appendChild($mainNode);
        
        foreach ($_GET as $key=>$value)
        {
           $childNode = $xmlDoc->createElement('book');
           $childNode = $mainNode->appendChild($childNode);
        
           $titleNode = $xmlDoc->createElement('title');
           $titleNode = $childNode->appendChild($titleNode);
           
           $textNode = $xmlDoc->createTextNode($value);
           $textNode = $titleNode->appendChild($textNode);
        }
        
        $xmlDoc->save('List.Xml');
?>