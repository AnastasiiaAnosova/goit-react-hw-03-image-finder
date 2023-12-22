import React from 'react'
import { ImageGalleryItemStyles, ImageGalleryItemImgStyles } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ webformatURL, alt, onClick, largeImageURL }) => {

    const handleClick = () => {
        onClick(largeImageURL);
    }

    return (
        <ImageGalleryItemStyles>
            <ImageGalleryItemImgStyles src={webformatURL} alt={alt} onClick={handleClick} />
        </ImageGalleryItemStyles>
    )
}

export default ImageGalleryItem;
