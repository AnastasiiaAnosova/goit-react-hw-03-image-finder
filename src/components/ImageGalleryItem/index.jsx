import React from 'react'

const ImageGalleryItem = ({ webformatURL, alt }) => {
    return (
        <img src={webformatURL} alt={alt} />
    )
}

export default ImageGalleryItem;
