import { Component } from "react";
import axios from 'axios';
import { fetchImagesWithQuery } from './services/api';
import Searchbar from "./Searchbar";
import Loader from "./Loader";
import ImageGallery from './ImageGallery';

class App extends Component {
  state = {
    images: [],
    isLoading: false,
    error: null,
    largeImageURL: '',
    showModal: false,
    searchQuery: '',
    page: 1,
    showLoadMore: false,
  }

  componentDidUpdate(_, prevState) {
    if (
      this.state.searchQuery === prevState.searchQuery ||
      this.state.page === prevState.page
    ) return;
    this.fetchImages();
  }

  fetchImages = async () => {
    const { searchQuery, page } = this.state;
    if (!searchQuery) return;
    this.setState({ isLoading: true });
    try {
      const { hits, totalHits } = await fetchImagesWithQuery(searchQuery, page);
      this.setState((prev) => ({
        images: [...prev.images, ...hits],
        showLoadMore: prev.page < Math.ceil(totalHits / 12),
      }))
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ isLoading: false });
    }
  }

  // componentDidUpdate = async (_, prevState) => {
  //   if (
  //     this.state.query !== prevState.query ||
  //     this.state.page !== prevState.page
  //   ) {
  //     const { query, page } = this.state;

  //     try {
  //       this.setState({
  //         isLoading: true,
  //       });
  //       const { hits, totalHits } = await getGalleryItems(query, page);
  //       this.setState(state => ({
  //         items: [...state.items, ...hits],
  //         showLoadMore: this.state.page < Math.ceil(totalHits / 12),
  //       }));

  //       notificationAPI.success(totalHits, page);
  //       notificationAPI.info(totalHits, page);
  //     } catch (error) {
  //       notificationAPI.error();
  //     } finally {
  //       this.setState({
  //         isLoading: false,
  //       });
  //     }
  //   }
  // };

  handleSearch = (searchQuery) => {
    this.setState({ searchQuery }, this.fetchImages);
  }

  render() {
    const { images, isLoading, error, showModal, showLoadMore } = this.state;

    return (
      <>
        <Searchbar handleSearch={this.handleSearch} />
        {isLoading && <Loader />}
        {error && <p>{error}</p>}
        {images.length > 0 && <ImageGallery images={images} />}
      </>
    )
  }

}