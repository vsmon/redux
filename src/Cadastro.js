import React, {Component} from 'react'
import {View, TextInput} from 'react-native'
import {connect} from 'react-redux'
import {changeEmail, changeSenha} from './Actions/loginAction'


export class Cadastro extends Component{
    render(){
        return(
            <View>
                <TextInput placeholder='Email...' value={this.props.email} onChangeText={(email)=>this.props.changeEmail(email)}/>
                <TextInput placeholder='Senha...' value={this.props.senha} onChangeText={(senha)=>this.props.changeSenha(senha)}/>
            </View>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        email:state.login.email,
        senha:state.login.senha,
    }
}

export default connect(mapStateToProps, {changeEmail,changeSenha})(Cadastro)