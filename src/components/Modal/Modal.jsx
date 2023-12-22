import { Component } from "react";
import { createPortal } from 'react-dom';

import { Overlay, ModalImg } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {

    backDropClose = (e) => {
        e.target === e.currentTarget && this.props.onClose()
    }

    handleEsc = (e) => {
        e.code === 'Escape' && this.props.onClose()
    }
    componentDidMount() {
        document.addEventListener('keydown', this.handleEsc)
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleEsc)
    }

    render() {
        const { largeImageURL, alt } = this.props;
        return createPortal(
            <Overlay onClick={this.backDropClose}>
                <ModalImg
                    src={largeImageURL}
                    alt={alt}
                />
            </Overlay >
            , modalRoot)
    }
}


export default Modal
