import { gql } from 'apollo-boost';

//books query:
const getBooksQuery = gql`
  {
    books {
      name,
      id
    }
  }
`

const getAuthorsQuery = gql`
  {
    authors {
      name,
      id
    }
  }
`

const addBookMutation = gql`
  mutation($name: String!, $genre: String!, $authorid: ID!){
    addBook(name: $name, genre: $genre, authorid: $authorid){
      name,
      id
    }
  }
`

const getBookQuery = gql`
  query($id: ID){
    book(id: $id){
      name
      genre
      id
      author{
        id
        name
        age
        books{
          name
          id
        }
      }
    }
  }
`

export {getAuthorsQuery, getBooksQuery, addBookMutation, getBookQuery};
