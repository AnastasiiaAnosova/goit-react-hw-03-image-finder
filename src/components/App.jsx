import { Component } from "react";
import axios from 'axios';
import api from './services/api';

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
}

async componentDidMount() {
  const { searchQuery, page } = this.state;
  if (!searchQuery) return;
  this.setState({ isLoading: true });
  try {
    const { hits, totalHits } = api.fetchImagesWithQuery(searchQuery, page);
    this.setState()
  } catch (error) {
    
  }
}





export default App;