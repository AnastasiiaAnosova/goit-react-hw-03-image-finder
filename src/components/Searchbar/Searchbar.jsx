import { Component } from 'react';
import { SearchbarHeader, SearchForm, SearchFormButton, SearchFormInput, SearchFormIcon } from './Searchbar.styled';

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
                        <SearchFormIcon />
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

