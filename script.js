      
function openCatModal(photoUrl) {
    
    const catPhotoElement = document.getElementById('catPhoto');
    const image = new Image();
    image.src = photoUrl;
    image.onload = function() {
        catPhotoElement.innerHTML = ''; // Clear any previous content
        catPhotoElement.appendChild(image);
    };
    
    document.getElementById('catModal').style.display = 'flex';
    
}

function closeCatModal() {
    document.getElementById('catModal').style.display = 'none';            
}
    
