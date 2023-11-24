import React from 'react'

const Button = () => {

    const handleLoad = () => {
    }
    return (
        <button onClick={this.handleLoad}>Load more</button>
    )
}

export default Button

/**
 * При натисканні на кнопку Load more повинна довантажуватись наступна порція зображень і
 *  рендеритися разом із попередніми. Кнопка повинна рендеритися лише тоді, коли є якісь завантажені зображення. 
 * Якщо масив зображень порожній, кнопка не рендериться.
 */