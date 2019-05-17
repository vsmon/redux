import React, {Component} from 'react'
import {View, Button, FlatList, Text} from 'react-native'
import {connect} from 'react-redux'
import {loadPessoas} from './Actions/listaAction'

export class Lista extends Component{
    componentWillMount(){
        this.props.loadPessoas()
    }
    render(){
        return(
            <View>
                <Button title='Carregar' onPress={()=>this.props.loadPessoas()}/>
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
        lista:state.lista.pessoas
    }
}

export default connect(mapStateToProps, {loadPessoas})(Lista)