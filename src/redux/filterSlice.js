import { createSlice } from "@reduxjs/toolkit";

const filterInitialState = '';

const filterSlice = createSlice({
    name: 'filter',
    initialState: filterInitialState,
    reducers: {
        changeFilter(state, action) {
            return action.payload;
        }
    }
})

export const filterReducer = filterSlice.reducer;
export const { changeFilter } = filterSlice.actions;

export default filterSlice;