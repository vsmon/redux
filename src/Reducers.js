import {combineReducers} from 'redux'
import {loginReducer}  from './Reducers/LoginReducer'
import {listaReducer} from './Reducers/ListaReducer'
 
const reducers = combineReducers({
    login:loginReducer,
    lista:listaReducer,
})

export default reducers