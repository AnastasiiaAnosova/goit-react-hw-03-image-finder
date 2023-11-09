import { Component } from 'react';
import { SearchHeader, SearchForm, SearchInput, SearchIcon } from './Searchbar.styled';

class Searchbar extends Component {
    state = { 
         searchQuery: '',
    }

    handleChange = (e) => {
        this.setState({ searchQuery: e.target.value });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.handleSearch(this.state.searchQuery);
        this.setState({ searchQuery: '' });
    };

    render() {
        return (
            <>
                <SearchHeader>
                    <SearchForm onSubmit={this.handleSubmit}>
                        <SearchInput
                            type="text"
                            name="searchQuery"
                            placeholder="Search images and photos..."
                            autoFocus
                            autoComplete='off'
                            value={this.state.searchQuery}
                            onChange={this.handleChange}
                            required
                        />
                        <button type="submit">
                            <SearchIcon/>
                        </button>
                    </SearchForm>
                </SearchHeader>
            </>
        )
    }
}


