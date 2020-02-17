import { combineReducers } from 'redux';
import  headerReducer  from '../common/header/store/reducer.js';


const reducer = combineReducers({
        header: headerReducer,
});

export default reducer;