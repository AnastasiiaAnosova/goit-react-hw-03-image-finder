import { Component } from "react";
import { fetchImagesWithQuery } from './services/api';
import Searchbar from "./Searchbar";
import ImageGallery from './ImageGallery';
import Button from "./Button";
import Loader from "./Loader";


class App extends Component {
  state = {
    images: null,
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
      this.setState((prev) => ({
        images: prev.images ? [...prev.images, ...hits] : hits,
        showLoadMore: page < Math.ceil(totalHits / 12),
        // showLoadMore: page < Math.ceil(data.total_results / data.per_page),
      }))
    } catch (error) {
      this.setState({ error });
      console.log('error>>>>>>', error)
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

  render() {
    const { images, isLoading, showLoadMore } = this.state;
    return (
      <>
        <Searchbar submit={this.handleSetSearchQuery} />
        {isLoading && (<Loader />)}
        {images && (<ImageGallery images={this.state.images} />)}
        {showLoadMore && (<Button loadNextImages={this.handleloadNextImages} />)}
      </>
    )
  }

}

export default App;

// render() {
//   const { todo, filteredTodo, error, isLoading } = this.state;
//   const { createTodo, filterTodo, handleDelete, handleCheck, handleClick } = this;
//   return (
//     <div className='container'>
//       <button className='btn btn-success' onClick={handleClick}>Show all todo's</button>
//       <FormCreateTodo createTodo={createTodo} />
//       <FormFilterTodo filterTodo={filterTodo} />
//       {isLoading && <h1>Loading...</h1>}
//       {error && <h1>{error}</h1>}
//       {todo && (
//         <ul className='list-group'>
//           {(filteredTodo ?? todo).map((el) => (
//             <Todo
//               todo={el}
//               key={el.id}
//               handleDelete={handleDelete}
//               handleCheck={handleCheck}
//             />
//           ))}
//         </ul>
//       )}
//     </div>
//   )



// ## Опис компонента галереї`<Grid/>`

// Список карток зображень.Створює компонент наступної структури.

// ```jsx
// <Grid>
//   {/*
//     Набір <GridItem></GridItem> із зображеннями
//     */}
// </Grid>
// ```

// ## Опис компонента`<GridItem>`

// Компонент елемента списку із зображенням.Створює компонент наступної структури.

// ```jsx
// <GridItem>
//   <CardItem>
//     <img src="" alt="" />
//   </CardItem>
// </GridItem>
// ```