import * as constants from './constants'

const defaulState = {
    focused:false,
}

export  default (state = defaulState,action)   =>{
    console.log(action)
    if(action.type == constants.SEARCH_FOCUS) {
        const newState  = JSON.parse(JSON.stringify(state))
        newState.focused = true;
        return newState;
    };
    if(action.type == constants.SEARCH_BLUR ) {
        const newState  = JSON.parse(JSON.stringify(state))
        newState.focused = false;
        console.log(newState.focused)
        return newState;
    }
    return state
}