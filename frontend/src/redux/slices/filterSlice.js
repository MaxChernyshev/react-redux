import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    title: '',
    // author: '',
    // onlyFavorite: false,
}

const filterSlice = createSlice({
    name: 'filter',
    initialState: initialState,
    reducers: {
        setTitleFilter: (state, action) => {
            // mutation the object (make a new one) Immer library
            state.title = action.payload;

            // make a new object
            // return { ...state, title: action.payload 
        },
        resetFilters: (state) => {
            return initialState
        }
    }
})



// console.log(filterSlice.actions.setTitleFilter())

export const { setTitleFilter, resetFilters } = filterSlice.actions

export const selectTitleFilter = (state) => state.filter.title

export default filterSlice.reducer