import { Component } from "react";
import { fetchImagesWithQuery } from './services/api';
import Searchbar from "./Searchbar";
// import Loader from "./Loader";
import ImageGallery from './ImageGallery';
import Button from "./Button";

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
      this.state.searchQuery !== prevState.searchQuery ||
      this.state.page !== prevState.page
    ) this.fetchImages();
  }

  fetchImages = async () => {
    const { searchQuery, page } = this.state;
    try {
      this.setState({ isLoading: true });
      const { hits, totalHits } = await fetchImagesWithQuery(searchQuery, page);
      console.log('hits', hits);
      console.log('totalHits', totalHits);
      this.setState({ images: hits });
    } catch (error) {
      this.setState({ error });
      console.log('error>>>>>>', error)
    } finally {
      this.setState({ isLoading: false });
    }
  }

  handleSetSearchQuery = (searchQuery) => {
    this.setState({ searchQuery });
    this.resetPage();
  }

  resetPage = () => {
    this.setState({ page: 1 })
  }

  handleloadNextImages = () => {

  }
  render() {

    return (
      <>
        <Searchbar submit={this.handleSetSearchQuery} />
        <ImageGallery images={this.state.images} />
        <Button loadNextImages={this.handleloadNextImages} />
      </>
    )
  }

}

export default App;