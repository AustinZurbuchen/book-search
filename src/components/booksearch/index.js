import React, { Component } from 'react';
import "./index.scss";
import Button from '../button';

class BookSearch extends Component {
    constructor() {
        super();
        this.state = {
        };
        this.onInputchange = this.onInputchange.bind(this);
        this.onSubmitForm = this.onSubmitForm.bind(this);
    }
    
    onInputchange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    onSubmitForm() {
        console.log(this.state);
    }

    render() {
        const { items } = this.state;
        return (
            <div className="booksearch">
                <input id="title" name="title" type="text" value={this.state.title} onChange={this.onInputchange} placeholder="Book Title"></input>
                <input id="author" name="author" type="text" value={this.state.author} onChange={this.onInputchange} placeholder="Book Author"></input>
                <Button text="Search" onClick={this.onSubmitForm}></Button>
            </div>
        )
    }
}
export default BookSearch;