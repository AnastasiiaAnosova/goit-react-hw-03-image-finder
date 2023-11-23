import { Component } from 'react';

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
            <>
                <header className="searchbar">
                    <form className="form" onSubmit={this.handleSubmit}>
                        <button type="submit" className="button">
                            <span className="button-label">Search</span>
                            {/* <SearchIcon /> */}
                        </button>

                        <input
                            className="input"
                            type="text"
                            name="searchQuery"
                            autoComplete="off"
                            autoFocus
                            placeholder="Search images and photos"
                            onChange={this.handleChange}
                            required
                        />
                    </form>
                </header>
            </>
        )
    }
}

export default Searchbar;
