/********************************************************************************
 * Simple DnD
 * Copyright (c) 2006 Ben Sherratt
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
 * of the Software, and to permit persons to whom the Software is furnished to do
 * so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 ********************************************************************************/


var xHRObject = false;

if (window.XMLHttpRequest)
{
xHRObject = new XMLHttpRequest();
}
else if (window.ActiveXObject)
{
xHRObject = new ActiveXObject("Microsoft.XMLHTTP");
}


               
var list = null;
var listItems = null;
Display();

function makeDnD(list) {
     // Get the items of the list
     var listItems = list.getElementsByTagName("div");

     for(var i = 0; i < listItems.length; i++) {
          var listItem = listItems[i];

          // Setup the drag
          Drag.init(listItem, null, 0, 0);

          listItem.onDragStart = function() {
               var listItem = Drag.obj;
               list = listItem.parentNode;

               // Set temp variables
               listItem.items = list.getElementsByTagName("div");

               for(var i = 0; i < listItem.items.length; i++)
                    if(listItem.items[i] == listItem)
                         listItem.position = i;

               listItem.originalPosition = listItem.position;

               // Set the style
               listItem.style.opacity = 0.75;
               listItem.style.filter = "alpha(opacity=75)";
               listItem.style.zIndex = listItem.items.length;
          };

          listItem.onDrag = function(x, y, e) {
               var listItem = Drag.obj;

               var top = listItem.offsetTop + (listItem.offsetHeight / 2);

               if(listItem.position != 0 && listItem.position <= listItem.originalPosition && top < (listItem.items[listItem.position - 1].offsetTop + (listItem.items[listItem.position - 1].offsetHeight / 2))) {
                    // Change the position and top
                    listItem.position--;
                    listItem.items[listItem.position].style.top = listItem.offsetHeight + "px";
               } else if(listItem.position != 0 && listItem.position > listItem.originalPosition && top < (listItem.items[listItem.position].offsetTop + (listItem.items[listItem.position].offsetHeight / 2))) {
                    // Change the position and top
                    listItem.position--;
                    listItem.items[listItem.position + 1].style.top = "0px";
               } else if(listItem.position != listItem.items.length - 1 && listItem.position >= listItem.originalPosition && top > (listItem.items[listItem.position + 1].offsetTop + (listItem.items[listItem.position + 1].offsetHeight / 2))) {
                    // Change the position and top
                    listItem.position++;
                    listItem.items[listItem.position].style.top = -listItem.offsetHeight + "px";
               } else if(listItem.position != listItem.items.length - 1 && listItem.position < listItem.originalPosition && top > (listItem.items[listItem.position].offsetTop + (listItem.items[listItem.position].offsetHeight / 2))) {
                    // Change the position and top
                    listItem.position++;
                    listItem.items[listItem.position - 1].style.top = "0px";
               }
          };

          listItem.onDragEnd = function(x, y, e) {
               var listItem = Drag.obj;

               for(var i = 0; i < listItem.items.length; i++)
                    listItem.items[i].style.top = "0px";

               // Remove the item
               list.removeChild(listItem);

               // Re-insert the item
               if(listItem.items[listItem.position])
                    list.insertBefore(listItem, listItem.items[listItem.position]);
               else
                    list.appendChild(listItem);

               // Unset temp variables
          //     listItem.items = null;
               listItem.position = null;
               listItem.originalPosition = null;

               // Unset the style
               listItem.style.opacity = 1.00;
               listItem.style.filter = "alpha(opacity=100)";
               listItem.style.zIndex = 0;
          };
     }
}

function Display()
{
       xHRObject.onreadystatechange = getData;    
     xHRObject.open("GET", "List.xml?id="+ Number(new Date()),true);
     xHRObject.send(null);   
}



