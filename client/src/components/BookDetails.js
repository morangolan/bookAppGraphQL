import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getBookQuery } from '../queries/queries';

class BookDetails extends Component {
  displayBookDetails(){
    const { book } = this.props.data;
    if(book){
      return(
        <div>
          <div className = "title">
            <h2> {book.name} </h2>
            <span> {book.genre} </span>
          </div>
          <div className = "author"> Writen by: {book.author.name} </div>
          <p> Other books by this author: </p>
          <ul className = "other-books">
            { book.author.books.map(item => {
              return <li key={item.id}> {item.name}</li>
            })}
          </ul>
        </div>
      )
    } else {
      return(
        <div> No book selected... </div>
      )
    }
  }

  render() {
    return (
      <div id="book-details">
        { this.displayBookDetails() }
      </div>
    );
  }
}

export default graphql(getBookQuery, {
  options: (props) => {
    return {
      variables: {
        id: props.bookId
      }
    }
  }
})(BookDetails);
