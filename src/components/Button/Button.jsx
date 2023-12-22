import React from 'react'
import { ButtonContainer } from './Button.styled';

const Button = ({ loadNextImages }) => {

    const handleLoad = () => {
        loadNextImages();
    }
    return (
        <ButtonContainer onClick={handleLoad}>Load more</ButtonContainer>
    )
}

export default Button
