import React, {Component} from 'react'
import {View, Button, FlatList, Text, TextInput} from 'react-native'
import {connect} from 'react-redux'
import {loadPessoas, changeNome} from './Actions/listaAction'

export class Lista extends Component{
    componentWillMount(){
        this.props.loadPessoas(this.props.uid)
    }
    render(){
        return(
            <View>
                <TextInput placeholder='Nome...' onChangeText={(nome)=>this.props.changeNome(nome)}/>
                <TextInput placeholder='Idade...'/>
                <Button title='Salvar' onPress={()=>this.props.addPessoa(this.props.pessoa)}/>
                <FlatList
                    data={this.props.lista}
                    renderItem={({item})=><Text>ID: {item.id} Nome:{item.nome} Idade:{item.idade}</Text>}
                    keyExtractor={(item)=>item.id.toString()}
                />
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        lista:state.lista.pessoas,
        uid:state.login.uid,
        nome:state.login.nome,
    }
}

export default connect(mapStateToProps, {loadPessoas, changeNome})(Lista)