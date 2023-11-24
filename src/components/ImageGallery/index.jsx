import ImageGalleryItem from "components/ImageGalleryItem";


const ImageGallery = ({ images }) => {
    console.log('images', images);
    return (
        <ul className="gallery">
            {images.map(({ id, webformatURL, largeImageURL, tags }) => (
                <ImageGalleryItem
                    key={id}
                    webformatURL={webformatURL}
                    largeImageURL={largeImageURL}
                    alt={tags} />
            ))}
        </ul>
    )
}

export default ImageGallery;