// getting the progressbar div
const progressBar=document.querySelector(".bar")
//function for changing the width of progressbar and animating after every scroll
function update() {
    progressBar.style.width=`${(window.scrollY / (document.body.scrollHeight - window.innerHeight)*100)}%`
    /* (The height has been scrolled till now / the total height of the webPage and window combined) */
    requestAnimationFrame(update)
}

update(); // calling the function

/* 


window.scrollY

The read-only scrollY property of the Window interface returns the number of pixels that the document is currently scrolled vertically.

//+++++++++++++++++++++++++++++++++++++++++

document.body.scrollHeight

The scrollHeight property returns the height of an element (height of the body in this case) including padding, but excluding borders, scrollbars, or margins.

The scrollHeight property returns the height in pixels.

The scrollHeight property is read-only.

//+++++++++++++++++++++++++++++++++++++++

window.innerHeight

The read-only innerHeight property of the Window interface returns the interior height of the window in pixels, including the height of the horizontal scroll bar, if present.

The value of innerHeight is taken from the height of the window's layout viewport. The width can be obtained using the innerWidth property.

//++++++++++++++++++++++++++++++

Window: requestAnimationFrame() method

The window.requestAnimationFrame() method tells the browser that you wish to perform an animation and requests that the browser calls a specified function to update an animation right before the next repaint. The method takes a callback as an argument to be invoked before the repaint.

Note: Your callback routine must itself call requestAnimationFrame() again if you want to animate another frame at the next repaint. requestAnimationFrame() is 1 shot.

//++++++++++++++++++

*/

