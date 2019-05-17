import React, {Component} from 'react'
import {View, TextInput, Button} from 'react-native'
import {connect} from 'react-redux'
import {changeEmail, changeSenha, login} from './Actions/loginAction'


export class Login extends Component{
    componentDidUpdate(){
        if(this.props.uid != ''){
            this.props.navigation.navigate('Lista')
        }
    }
    render(){
        return(
            <View>
                <TextInput placeholder='Email...' value={this.props.email} onChangeText={(email)=>this.props.changeEmail(email)}/>
                <TextInput placeholder='Senha...' value={this.props.senha} onChangeText={(senha)=>this.props.changeSenha(senha)}/>
                <Button title='Logar' onPress={()=>this.props.login(this.props.email, this.props.senha)}/>
            </View>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        email:state.login.email,
        senha:state.login.senha,
        uid:state.login.uid,
    }
}

export default connect(mapStateToProps, {changeEmail, changeSenha, login})(Login)