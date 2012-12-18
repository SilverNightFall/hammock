<?php
switch($_REQUEST['value']) {
case 'BattyName':
echo "box1|<br><b>Name:</b><br>Batty<br>";
break;
case 'BattyBirthday':
 $battybirthday = "October 29, 1996";
 echo "box2|<br><b>Birthday:</b><br> $battybirthday";
break;
case 'BattyPoem':
 $battypoem = "Bats may make some people jitter<br />Please don't be afraid of this critter <br />If you're lonely or have nothing to do <br />The Beanie Babies would love to hug you ";
 echo "box3|<br><b>Poem:</b><br> $battypoem";
break;
case 'BattyImage':
 $source = "batty.jpg";
 echo "box4|<br><b>Image:</b><br><img src='$source '>";
break;
  
case 'QuackersName':
echo "box5|<br><b>Name:</b><br>Quackers<br>";
break;
case 'QuackersBirthday':
 $quackersbirthday = "April 19, 1994";
 echo "box6|<br><b>Birthday:</b><br> $quackersbirthday";
break;
case 'QuackersPoem':
 $quackerspoem = "There is a duck by the name of quackers<br />Every Night he eats animal crackers<br />He swims in a lake that's clear and blue<br />But he'll come to the shore to be with you";
 echo "box7|<br><b>Poem:</b><br> $quackerspoem";
break;
case 'QuackersImage':
 $source2 = "quackers.jpg";
 echo "box8|<br><b>Image:</b><br><img src='$source2 '>";
break;

case 'DerbysName':
echo "box9|<br><b>Name:</b><br>Derby<br>";
break;
case 'DerbysBirthday':
 $derbysbirthday = "September 16, 1995";
 echo "box10|<br><b>Birthday:</b><br> $derbysbirthday";
break;
case 'DerbysPoem':
 $derbyspoem = "All the other horses used to tattle<br />Because Derby never wore his saddle<br />He left the stable and the horses too<br />Just so Derby can be with you!";
 echo "box11|<br><b>Poem:</b><br> $derbyspoem";
break;

case 'DerbysImage':
 $source3 = "derby.jpg";
 echo "box12|<br><b>Image:</b><br><img src='$source3 '>";
break;

case 'Discussion10':
 $discussion10 = "<p> This week I learned the difference between the GET and the POST methods.  The GET method is made to get information already on the server and show it to the user. The POST method updates information on the server.  An example is when it posts data into a database or email. The POST method is used to update the information on the server. The GET method gets the data from the server, like for example information already in a database.  The GET method can also be cached.  There are workarounds for this by adding a timestamp to it.   Post is secure, while get is not secure and should not be used to get sensitive data.
     I also learned about hidden frames. 'The visible frame passes information to the hidden frame (Ullman/Dykes, 126).' A good example of a hidden frame is when you embed a video from YouTube into a site.  It gets the data from the server before the page is loaded and the user does not see this happening.  The problem comes in when user have older browser.  Some older browsers do not support this and some newer browsers don’t completely hide the hidden frame.
Work Cited:
Chris Ullman and Lucinda Dykes, 'Beginning Ajax', Indianapolis, IN: Wiley Publishing, 2007. Print.</p>";
echo "box13|$discussion10";
break;
  }
?>
