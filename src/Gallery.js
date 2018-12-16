import React from 'react';

const imageFiles = require('./images/images.json').images;
const captions = require('./images/captions.json');
const images = imageFiles.map((image, index) => ({
    src: require('./images/'+image.filename),
    width: image.width,
    height: image.height,
    caption: captions[image]
}));
console.log(images);

function masonry(grid, gridCell, gridGutter, dGridCol, tGridCol, mGridCol) {
    var g = document.querySelector(grid),
        gc = document.querySelectorAll(gridCell),
        gcLength = gc.length,
        gHeight = 0,
        i;
    
    for(i=0; i<gcLength; ++i) {
      gHeight+=gc[i].offsetHeight+parseInt(gridGutter);
    }
    
    if(window.screen.width >= 1024)
      g.style.height = gHeight/dGridCol + gHeight/(gcLength+1) + "px";
    else if(window.screen.width < 1024 && window.screen.width >= 768)
      g.style.height = gHeight/tGridCol + gHeight/(gcLength+1) + "px";
    else
      g.style.height = gHeight/mGridCol + gHeight/(gcLength+1) + "px";
  }

class Gallery extends React.Component {
    
    render() {
        const childElements = images.map((image, index) => {
           return (
                <li className="item" key={image.src}>
                    <img src={image.src} />
                </li>
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