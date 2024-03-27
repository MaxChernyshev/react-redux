import { UseSelector, useDispatch, useSelector } from 'react-redux'
import './BookList.css'
import { BsBookmarkStarFill, BsBookmarkStar, BsFillTrash3Fill } from "react-icons/bs"
import { deleteBook, toggleFavorite } from '../../redux/books/actionCreators'
import { selectTitleFilter } from '../../redux/slices/filterSlice'


const BookList = () => {

    const books = useSelector((state) => state.books)

    const titleFilter = useSelector(selectTitleFilter)

    const dispatch = useDispatch()

    const handleDeleteBook = (id) => {
        dispatch(deleteBook(id))
    }

    const handleToggleFavorite = (id) => {
        dispatch(toggleFavorite(id))
    }

    const filteredBooks = books.filter((book) => {
        const matchesTitle = book.title.toLowerCase().includes(titleFilter.toLowerCase())
        return matchesTitle
        // console.log({ title: book.title, matchesTitle })
    })

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
                            {filteredBooks.map((book, i) => (
                                <li key={book.id} className='book-list'>
                                    <div>
                                        ID: {++i} Title: <strong>{book.title}</strong> by author: <strong>{book.author}</strong>
                                    </div>
                                    <div className='book-actions'>
                                        <span onClick={() => handleToggleFavorite(book.id)}>
                                            {book.isFavorite ?
                                                <BsBookmarkStarFill className='star-icon' />
                                                :
                                                <BsBookmarkStar className='star-icon' />
                                            }
                                        </span>
                                        <div id='bookDelete' className='star-icon' onClick={() => handleDeleteBook(book.id)}>
                                            <BsFillTrash3Fill />
                                        </div>
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