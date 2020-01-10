import React from 'react';


// Use it whenever you need to manage state
class SearchBar extends React.Component {
    state = { term: '' }

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.term);
    }

    render() {
        // onInputChange should not have the parenthesis. <- callback function to event handler.
        // onClick | onSubmit | onChange
        // Controlled vs Uncontrolled - 
        // controlled means that REACT will determine what value is in the input
        // uncontrolled means that the value will only be known by the DOM and not react
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Search Image</label>
                        <input
                            type="text"
                            value={this.state.term}
                            onChange={(e) => { this.setState({ term: e.target.value }) }}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;