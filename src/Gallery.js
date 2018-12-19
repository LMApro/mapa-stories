import React from 'react';
import imagesLoaded from 'imagesloaded';

const imageFiles = require('./images/images.json').images;
const captions = require('./images/captions.json');
const images = imageFiles.map((image, index) => ({
    src: require('./images/' + image.filename),
    width: image.width,
    height: image.height,
    caption: captions[image]
}));

console.log(images);
let items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 16, 17, 18, 19, 20];

function masonry(grid, gridCell, gridGutter, desktopGridCol, tabletGridCol, mobileGridCol) {
    var g = document.querySelector(grid),
        gc = document.querySelectorAll(gridCell),
        gcLength = gc.length,
        gHeight = 0,
        i;

    for (i = 0; i < gcLength; ++i) {
        gHeight += gc[i].offsetHeight + parseInt(gridGutter);
    }

    if (window.screen.width >= 1024)
        g.style.height = gHeight / desktopGridCol + gHeight / (gcLength + 1) + "px";
    else if (window.screen.width < 1024 && window.screen.width >= 768)
        g.style.height = gHeight / tabletGridCol + gHeight / (gcLength + 1) + "px";
    else
        g.style.height = gHeight / mobileGridCol + gHeight / (gcLength + 1) + "px";
}

class Gallery extends React.Component {
    componentDidMount() {
        this.arrangeImages();
        this.listenWindowEvent();
    }

    arrangeImages() {
        // A maonsry grid with 8px gutter, with 6 columns on desktop, 4 on tablet, and 1 column on mobile devices.
        masonry('.masonry', '.item', 8, 5, 4, 1);
    }

    listenWindowEvent() {
        ["resize", "load"].forEach((event) => {
            window.addEventListener(event, (e) => {
                console.log(e);
                imagesLoaded(document.querySelector('.masonry'), () => {
                    this.arrangeImages();
                });
            });
        });
    }

    getClass(image) {
        if (image.height > image.width) return 'vertical-img';
        else if (image.height === image.width) return 'square-img';
        else return 'horizontal-img';
    }

    getClass2(index) {
        if (index % 3 == 0) return 'vertical-img';
        return 'horizontal-img';
    }

    render() {
        const childElements = items.map((image, index) => {
            return (
                <div className={`item ${this.getClass2(index)}`} key={index}>
                    lorem55
                </div>
            );
        });

        return (
            <div className="masonry">
                {childElements}
            </div>
        );
    }
}

export default Gallery;