// Get the modal element
var modal = document.getElementById("myModal");

// Get the image inside the card
var img = document.querySelector(".card-image");

// Get the <span> element that closes the modal
var span = document.querySelector(".close");

// When the user clicks the image, open the modal
img.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
