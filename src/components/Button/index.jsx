import React from 'react'

const Button = ({ loadNextImages }) => {

    const handleLoad = () => {
        loadNextImages();
    }
    return (
        <button onClick={handleLoad}>Load more</button>
    )
}

export default Button

/**
 * При натисканні на кнопку Load more повинна довантажуватись наступна порція зображень і
 *  рендеритися разом із попередніми. Кнопка повинна рендеритися лише тоді, коли є якісь завантажені зображення. 
 * Якщо масив зображень порожній, кнопка не рендериться.
 */

/**
 * const data = await pixabayApiInstance.fetchPhotos();
        pixabayApiInstance.changePage();
        if (data.hits.length < pixabayApiInstance.per_page) {
            loadMoreButton.style.display = 'none';
            Notify.failure("We're sorry, but you've reached the end of search results.");
            return;
        }
        const markup = markupPhotos(data.hits);
        renderMarkup(markup);
        scrollToUp();
 */