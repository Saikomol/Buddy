import { useState, useEffect } from "react"; //useEffect for init call, //useState for store Data
import { fetchBooks } from "../API/Api";

const Home = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    async function getBooks() {
      // useEffect need to use function to work 1.
      const { books } = await fetchBooks(); //fetchBook() come from Api.jsx//
      setBooks(books); //set back to useState
    }
    getBooks(); // 1.
  }, []);
  console.log(books);
  return (
    <div>
      <h1>Welcome to Books</h1>
      <ul>
        {books.map((book) => (
          <li className="bookCard" key={book.id}>
           <h2>{book.title}</h2>
            <img style={{width: '400px', height: '500px'}} src={book.coverimage}></img>
            <p>By: {book.author}</p>
            <p>{book.description}</p>
            {book.available ? (
              <p style={{border: '1px solid #ccc', padding: '20px'} }>This Book is available</p>
            ) : (
              <p style={{color: 'red', border: '1px solid black', padding: '20px'} }>This Book is Check out</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Home;
