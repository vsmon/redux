import React, {Component} from 'react'
import {View, Button, FlatList, Text, TextInput} from 'react-native'
import {connect} from 'react-redux'
import {loadPessoas, changeNome, changeIdade, addPessoa, pessoaRealmAdd, pessoaRealmDelete, pessoaRealmSync} from './Actions/listaAction'

export class Lista extends Component{
    componentWillMount(){
        this.props.loadPessoas(this.props.uid)    
        this.props.pessoaRealmSync(this.props.lista)    
    }
    componentDidMount(){
        
    }
    render(){
        return(
            <View>
                <TextInput 
                    placeholder='Nome...' 
                    onChangeText={(nome)=>this.props.changeNome(nome)} 
                    value={this.props.nome}
                />
                <TextInput 
                    placeholder='Idade...' 
                    onChangeText={(idade)=>{this.props.changeIdade(idade)}}
                    value={this.props.idade}
                />
                <Button 
                    title='Salvar' 
                    onPress={()=>this.props.addPessoa(this.props.uid, this.props.nome, this.props.idade)}
                />
                <FlatList
                    data={this.props.lista}
                    renderItem={({item})=><Text>ID: {item.id} Nome:{item.nome} Idade:{item.idade}</Text>}
                    keyExtractor={(item)=>item.id.toString()}
                />
                <Button 
                    title='Salvar' 
                    onPress={()=>this.props.pessoaRealmAdd()}
                />
                <Button 
                    title='Excluir' 
                    onPress={()=>this.props.pessoaRealmDelete()}
                />
                <Button 
                    title='Carregar' 
                    onPress={()=>this.props.pessoaRealmSync(this.props.lista)}
                />
                <FlatList
                    data={this.props.listaRealmSync}
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
        listaRealm:state.lista.pessoasRealm,
        listaRealmSync:state.lista.realmSync,
        uid:state.login.uid,
        nome:state.lista.nome,
        idade:state.lista.idade,
    }
}

export default connect(mapStateToProps, {loadPessoas, changeNome, changeIdade, addPessoa, pessoaRealmAdd, pessoaRealmDelete, pessoaRealmSync})(Lista)