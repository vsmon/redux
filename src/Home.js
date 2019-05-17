import React, {Component} from 'react'
import {View, Text, Button} from 'react-native'

export default class Home extends Component{
    render(){
        return(
            <View>
                <Button title='Login' onPress={()=>this.props.navigation.navigate('Login')}/>
                <Button title='Cadastro' onPress={()=>this.props.navigation.navigate('Cadastro')}/>
                <Button title='Lista' onPress={()=>this.props.navigation.navigate('Lista')}/>
            </View>
        )
    }
}