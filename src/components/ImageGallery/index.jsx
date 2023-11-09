import { Component } from "react";
import ImageGalleryItem from "./ImageGalleryItem";


class ImageGallery extends Component{
    render() {
        const { images } = this.props;
        return (
            <>
                {images.map(({ webformatURL, largeImageURL, tags }, id) => (
                    <ImageGalleryItem
                        key={id}
                        webformatURL={webformatURL}
                        largeImageURL={largeImageURL}
                        tags={tags}
                    />
                ))}
            </>
        )
    }
}


export default ImageGallery;

