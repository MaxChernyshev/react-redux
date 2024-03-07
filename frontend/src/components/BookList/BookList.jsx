import { UseSelector, useDispatch, useSelector } from 'react-redux'
import './BookList.css'
import { FaRegHeart, FaTrash } from "react-icons/fa"
import { deleteBook } from '../../redux/books/actionCreators'

const BookList = () => {

    const books = useSelector((state) => state.books)

    const dispatch = useDispatch()

    const handleDeleteBook = (id) => {
        dispatch(deleteBook(id))
    }

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
                                <li key={book.id} className='book-list'>
                                    <div>
                                        ID: {++i} Title: <strong>{book.title}</strong> by author: <strong>{book.author}</strong>
                                    </div>
                                    <div className='book-actions'>
                                        <button>
                                            <FaRegHeart />
                                        </button>
                                        <button id='bookDelete' onClick={() => handleDeleteBook(book.id)}>
                                            <FaTrash />
                                        </button>
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