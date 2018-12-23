const grid = document.getElementById('grid');

function getImageMinHeight(image) {
    let imageWidth = document.getElementById('grid').clientWidth / 4 - 14;
    return imageWidth * image.ratio + 'px';
}

function getImages() {
    window.images.map(image => {
        let imgElem = document.createElement('img');
        imgElem.className = 'lozad';
        imgElem.dataset.src = `images/min/${image.filename}`;
        imgElem.style.minHeight = getImageMinHeight(image);
        let liElem = document.createElement('li');
        liElem.appendChild(imgElem);
        grid.appendChild(liElem);
    })
}

getImages();
const observer = lozad();
observer.observe();
new AnimOnScroll( document.getElementById( 'grid' ), {
    minDuration : 0.4,
    maxDuration : 0.7,
    viewportFactor : 0.2
} );
