import React from 'react';
import Masonry from 'react-masonry-component';

const masonryOptions = {
    transitionDuration: 0
};
 
const imagesLoadedOptions = { background: '.my-bg-image-el' }

class Gallery extends React.Component {
    render() {
        const childElements = this.props.photos.map(function(element){
           return (
                <li className="image-element-class">
                    <img src={element.src} />
                </li>
            );
        });
    
        return (
            <Masonry
                className={'my-gallery-class'} 
                elementType={'ul'} 
                options={masonryOptions} 
                disableImagesLoaded={false} 
                updateOnEachImageLoad={false} 
                imagesLoadedOptions={imagesLoadedOptions}
            >
                {childElements}
            </Masonry>
        );
    }
}
 
export default Gallery;