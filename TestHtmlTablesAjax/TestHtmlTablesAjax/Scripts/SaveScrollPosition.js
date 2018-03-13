//saves vertical scroll position in a cookie

//Declare variable for listening to button1
var event1 = document.getElementById("likeButton");

//Set up event listener on button1 click
event1.addEventListener('click', getScrollPosition, false);

function getScrollPosition()
{
    //document.cookie = window.pageYOffset;
    alert(window.pageYOffset);
}

