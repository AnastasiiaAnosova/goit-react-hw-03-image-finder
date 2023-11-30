import React from 'react'
import { ImageGalleryItemImg } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ webformatURL, alt }) => {
    return (
        <ImageGalleryItemImg src={webformatURL} alt={alt} />
    )
}

export default ImageGalleryItem;
