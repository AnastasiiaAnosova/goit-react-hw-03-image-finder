import { Component } from "react";
import { fetchImagesWithQuery } from './services/api';
import Searchbar from "./Searchbar";
// import Loader from "./Loader";
// import ImageGallery from './ImageGallery';

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

  // componentDidUpdate(_, prevState) {
  //   if (
  //     this.state.searchQuery === prevState.searchQuery ||
  //     this.state.page === prevState.page
  //   ) return;
  //   this.fetchImages();
  // }

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

  render() {

    return (
      <>
        <Searchbar submit={this.handleSetSearchQuery} />
      </>
    )
  }

}

export default App;