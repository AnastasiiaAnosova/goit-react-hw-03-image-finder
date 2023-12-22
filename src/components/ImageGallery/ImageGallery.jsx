import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem";
import { ImageGalleryContainer } from './ImageGallery.styled';


const ImageGallery = ({ images, toogleModal }) => {

    return (
        <ImageGalleryContainer>
            {images.map(({ id, webformatURL, largeImageURL, tags }) => (
                <ImageGalleryItem
                    key={id}
                    webformatURL={webformatURL}
                    largeImageURL={largeImageURL}
                    alt={tags}
                    onClick={toogleModal}
                />
            ))}
        </ImageGalleryContainer>
    )
}

export default ImageGallery;