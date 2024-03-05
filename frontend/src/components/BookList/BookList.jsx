import { UseSelector, useSelector } from 'react-redux'
import './BookList.css'

const BookList = () => {

    const books = useSelector((state) => state.books)

    // console.log(books)

    return (
        <div className="app-block book-list">
            <h2>Book List Form</h2>
            {
                books.length === 0
                    ?
                    (<p>No books in the list</p>)
                    :
                    (
                        <ul>
                            {books.map((book, i) => (
                                <li key={book.id}>
                                    <div className='book-info'>
                                        ID: {++i} Title: <strong>{book.title}</strong> by author: <strong>{book.author}</strong>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    )
            }
        </div>
    )
}

export default BookList