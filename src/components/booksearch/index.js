import React, { Component } from "react";
import "./index.scss";
import Button from "../button";
import axios from "axios";
import Bookdisplay from "../bookdisplay";

class BookSearch extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      author: "",
      data: {},
      showData: false,
    };
    this.onInputchange = this.onInputchange.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
  }

  onInputchange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  onSubmitForm() {
    axios
      .post("http://192.168.1.11:5001/book", {
        title: this.state.title,
        author: this.state.author,
      })
      .then((response) => {
        this.setState({
          data: response.data,
          showData: true,
        });
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {
    const { showData } = this.state;
    return (
      <div className="book">
        <div className="booksearch">
          <input
            id="title"
            name="title"
            type="text"
            value={this.state.title}
            onChange={this.onInputchange}
            placeholder="Book Title"
          ></input>
          <input
            id="author"
            name="author"
            type="text"
            value={this.state.author}
            onChange={this.onInputchange}
            placeholder="Book Author"
          ></input>
          <Button text="Search" onClick={this.onSubmitForm}></Button>
        </div>
        <div
          className="bookdisplay"
          style={{ display: showData ? "flex" : "none" }}
        >
          <Bookdisplay
            title={this.state.data.title}
            authors={this.state.data.authors}
            publishDate={this.state.data.publishedDate}
            rating={this.state.data.averageRating}
            link={this.state.data.infoLink}
            description={this.state.data.description}
          ></Bookdisplay>
        </div>
      </div>
    );
  }
}
export default BookSearch;
