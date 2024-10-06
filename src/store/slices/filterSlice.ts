import { createSlice } from '@reduxjs/toolkit';

const initialState: { query: { [key: string]: string } } = { query: {} };
const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setQuery(state, action: { payload: { [key: string]: string } }) {
            state.query = action.payload;
        },
    },
});

export const { setQuery } = filterSlice.actions;
export default filterSlice.reducer;
