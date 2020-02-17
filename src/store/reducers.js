const defaulState = {
    focused:false,
}

export  default (state = defaulState,action)   =>{
    if(action.type =="search_fucsed") {
        const newState  = JSON.parse(JSON.stringify(state))
        newState.focused = true;
        return newState;
    };
    if(action.type =="search_blur") {
        const newState  = JSON.parse(JSON.stringify(state))
        newState.focused = false;
        console.log(newState.focused)
        return newState;
    }
    return state
 }