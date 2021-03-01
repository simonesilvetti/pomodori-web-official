
import React from 'react'
import { navigate } from "@reach/router"
import { FaSearch } from "react-icons/fa";


class SearchBarForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        //alert('A name was submitted: ' + this.state.value);
        navigate("/search", { state: { content: this.state.value } })
        event.preventDefault();
    }

    render() {
        return (
            <div className="navbar-item">
                <div className="field has-addons has-addons-centered">
                    <div className="control">
                        <form onSubmit={this.handleSubmit}>
                            <input className="input" type="text" placeholder="Cerca nel sito" value={this.state.value} onChange={this.handleChange} />
                        </form>
                    </div>
                    <div className="control">
                        <button className="button" onClick={this.handleSubmit} onKeyDown={this.handleSubmit}>
                            <FaSearch size="15px" />
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}


export default SearchBarForm