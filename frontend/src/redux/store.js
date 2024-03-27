import { configureStore } from "@reduxjs/toolkit"
import booksReduser from "./books/reducer"
import filterReducer from './slices/filterSlice'


const store = configureStore({
    reducer: {
        books: booksReduser,
        filter: filterReducer,

    }
})

export default store
