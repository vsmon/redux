import React, {Component} from 'react'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import {createStackNavigator, createAppContainer} from 'react-navigation'

import reducers from './src/Reducers'

import Home from './src/Home'
import Login from './src/Login'
import Cadastro from './src/Cadastro'
import Lista from './src/Lista'
import thunk from 'redux-thunk'

const store = createStore(reducers, applyMiddleware(thunk))

const navigator = createStackNavigator({
    Home:{
        screen:Home
    },
    Login:{
        screen:Login
    },
    Cadastro:{
        screen:Cadastro
    },
    Lista:{
        screen:Lista
    },
})
const Navigator =  createAppContainer(navigator)

export default class App extends Component{
    render(){
        return(
            <Provider store={store}>
                <Navigator/>
            </Provider>
        )
    }
}