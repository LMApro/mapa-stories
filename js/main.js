const grid = document.getElementById('grid');
function getImages() {
    window.images.map(image => {
        let imgElem = document.createElement('img');
        imgElem.src = `images/min/${image}`;
        let liElem = document.createElement('li');
        liElem.appendChild(imgElem);
        grid.appendChild(liElem);
    })
}
getImages();
new AnimOnScroll( document.getElementById( 'grid' ), {
    minDuration : 0.4,
    maxDuration : 0.7,
    viewportFactor : 0.2
} );
