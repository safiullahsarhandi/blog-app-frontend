import { configureStore } from '@reduxjs/toolkit';
import { actions } from './actions';
import initialState from './state';

const reducer = (state = initialState,action)=> {
        
        switch(action.type){
            case actions.SET_POSTS:
                return {...state,posts: action.payload};
            case actions.SET_POST:
                return {...state,post: action.payload};
            default: 
                
                return state;
            
        }
};




const store = configureStore({
    reducer
});
export default store;