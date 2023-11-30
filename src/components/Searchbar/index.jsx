import { Component } from 'react';
import { SearchbarHeader, SearchForm, SearchFormButton, SearchFormInput } from './Searchbar.styled';
import { IoSearch } from 'react-icons/io5';

class Searchbar extends Component {
    state = {
        searchQuery: '',
    }

    handleChange = ({ target: { value } }) => {
        this.setState({ searchQuery: value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.submit(this.state.searchQuery);
        this.setState({ searchQuery: '' });
    };

    render() {
        return (

            <SearchbarHeader >
                <SearchForm onSubmit={this.handleSubmit}>
                    <SearchFormButton type="submit">
                        <IoSearch />
                    </SearchFormButton>

                    <SearchFormInput
                        type="text"
                        name="searchQuery"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        value={this.state.searchQuery}
                        onChange={this.handleChange}
                        required
                    />
                </SearchForm>
            </SearchbarHeader>

        )
    }
}

export default Searchbar;

