import { Component } from "react";
import { fetchImagesWithQuery } from '../services/api';
import Searchbar from "../Searchbar/Searchbar";
import ImageGallery from '../ImageGallery/ImageGallery';
import Button from "../Button/Button";
import Loader from "../Loader/Loader";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import Modal from "../Modal/Modal";
import { AppContainer } from "./App.styled";


class App extends Component {
  state = {
    images: null,
    isLoading: false,
    error: null,
    largeImageURL: '',
    alt: '',
    showModal: false,
    searchQuery: '',
    page: 1,
    showLoadMore: false,
  }

  componentDidUpdate(_, prevState) {
    if (
      this.state.searchQuery !== prevState.searchQuery ||
      this.state.page !== prevState.page
    ) this.fetchImages();
  }

  fetchImages = async () => {
    const { searchQuery, page } = this.state;
    try {
      this.setState({ isLoading: true });
      const { hits, totalHits } = await fetchImagesWithQuery(searchQuery, page);
      console.log('hits in function fetchImages:', hits);
      console.log('totalHits in function fetchImages:', totalHits);
      // hits.length === 12 ? Notify.success(`Hooray! We found ${totalHits} images.`) : Notify.warning(`Hm! We found only ${hits.length} images.`);
      if (hits.length === 12) {
        page === 1 && Notify.success(`Hooray! We found ${totalHits} images.`, {
          timeout: 6000,
        },);
      } else if (hits.length < 12) {
        Notify.warning(`Hm! We found only ${hits.length} images.`, {
          timeout: 6000,
        },);
      } else {
        console.log('Else branch executed');
        Notify.failure('Sorry, there are no images matching your search query. Please try again.', {
          timeout: 6000,
        },);
      }
      this.setState((prev) => ({
        images: prev.images ? [...prev.images, ...hits] : hits,
        showLoadMore: page < Math.ceil(totalHits / 12),
        // showLoadMore: page < Math.ceil(data.total_results / data.per_page),
      }))
    } catch (error) {
      this.setState({ error });
      Notify.failure('Sorry, some error occurred. Please try again.', {
        timeout: 6000,
      },);
    } finally {
      this.setState({ isLoading: false });
    }
  }

  handleSetSearchQuery = (searchQuery) => {
    this.setState({
      searchQuery,
      images: null,
      page: 1,
      showLoadMore: false,
    });
  }

  handleloadNextImages = () => {
    this.setState(prev => ({ page: prev.page + 1 }));
  }

  handleToogleModal = (url) => {
    this.setState((prev) => ({
      showModal: !prev.showModal,
      largeImageURL: url
    }));
  }

  render() {
    const { images, isLoading, showLoadMore, showModal, largeImageURL, alt } = this.state;
    return (
      <AppContainer>
        <Searchbar submit={this.handleSetSearchQuery} />
        {isLoading && (<Loader />)}
        {images && (<ImageGallery images={images} toogleModal={this.handleToogleModal} />)}
        {showLoadMore && (<Button loadNextImages={this.handleloadNextImages} />)}
        {showModal && (<Modal url={largeImageURL} alt={alt} onClose={this.handleToogleModal} />)}
      </AppContainer>
    )
  }

}

export default App;
