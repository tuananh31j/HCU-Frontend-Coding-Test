import { combineReducers } from '@reduxjs/toolkit';
import filter from '~/store/slices/filterSlice';

const rootReducers = combineReducers({
    filter,
});

export default rootReducers;
