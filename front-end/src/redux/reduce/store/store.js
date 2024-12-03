// import { configureStore } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { thunk } from 'redux-thunk';
import { ProjectsUserWithReducer } from '../ProjectsUserWithReducer';
import { TaskReducer } from '../SavedTasks';

const rootReducer = combineReducers({
    projects : ProjectsUserWithReducer,
    savedTasks : TaskReducer,
});


const store = configureStore(
    {
        reducer : rootReducer,
        middleware : (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
    }
)

export default store;