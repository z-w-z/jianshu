import * as constants from './constants'

import {fromJS} from 'immutable'

const defaulState = fromJS({
    focused:false,
    list:[]
})

export  default (state = defaulState,action)   =>{
    console.log(action)
    if(action.type == constants.SEARCH_FOCUS) {
       return state.set('focused',true)
    };
    if(action.type == constants.SEARCH_BLUR ) {
        return state.set('focused',false)
    }
    if(action.type == constants.CHANGE_LIST ) {
        return state.set('list',action.data)
    }
    return state
}