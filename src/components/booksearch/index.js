import React, { Component } from 'react';
import "./index.scss";
import Button from '../button';
import axios from 'axios';

class BookSearch extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            author: ''
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
        axios.post("http://192.168.1.11:5000/book", { "title": this.state.title, "author": this.state.author }).then(response => {
            console.log(response.data);
        }).catch((e) => {
            console.log(e);
        });
    }

    render() {
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