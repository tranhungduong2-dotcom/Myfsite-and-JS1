
function upDate(previewPic) {
 
    console.log("Event triggered: upDate()");

    console.log("Preview Picture Source (src):", previewPic.src);
    console.log("Preview Picture Alt Text (alt):", previewPic.alt);

    let imageDiv = document.getElementById('image');

    imageDiv.innerHTML = previewPic.alt;

    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
}

 */
function unDo() {
   
    console.log("Event triggered: unDo()");

    let imageDiv = document.getElementById('image');

    imageDiv.style.backgroundImage = "url('')";

    imageDiv.innerHTML = "Hover over an image below to display here.";
}


function addTabFocusAttributes() {
    console.log("Page loaded: Running addTabFocusAttributes() via onload event.");
    
    let images = document.querySelectorAll('.preview');
    for (let i = 0; i < images.length; i++) {
        images[i].setAttribute('tabindex', '0');
        console.log("Added tabindex='0' to image #" + (i + 1));
    }
}

window.onload = addTabFocusAttributes;
