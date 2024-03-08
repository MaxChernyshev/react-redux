import { useState } from "react"
import { useDispatch } from "react-redux"
import { v4 as uuidv4 } from 'uuid'
import booksData from "../../data/books.json"
import { addBook } from "../../redux/books/actionCreators"
import './BookForm.css'

const BookForm = () => {

    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        if (title && author) {
            const book = {
                title: title,
                author: author,
                id: uuidv4(),
                isFavorite: false,
            }
            dispatch(addBook(book))

            setTitle('')
            setAuthor('')
        }
    }

    const handleAddRandomBook = () => {

        const randomIndex = Math.floor(Math.random() * booksData.length)
        const randomBook = booksData[randomIndex]
        const randomBookWithId = {
            ...randomBook,
            id: uuidv4(),
            isFavorite: false,
        }

        // Short version

        // const randomBookWithId = {
        //     ...booksData[Math.floor(Math.random() * booksData.length)],
        //     id: uuidv4(),
        // }

        // END Short version

        dispatch(addBook(randomBookWithId))
    }



    return (
        <div className="app-block book-form">
            <h2>
                Add new book
            </h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Title:</label>
                    <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>

                <div>
                    <label htmlFor="author">Author:</label>
                    <input type="text" id="author" value={author} onChange={(e) => setAuthor(e.target.value)} />
                </div>

                <div>
                    <button type="submit">Add book</button>
                </div>
                <div>
                    <button type="button" onClick={handleAddRandomBook}>Add random book</button>
                </div>
            </form>
        </div>
    )
}

export default BookForm