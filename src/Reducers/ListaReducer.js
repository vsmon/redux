
const intialState = {
    pessoas: [],
    pessoasRealm: [], //[{id:1,nome:'teste realm', idade:10}],
    realmSync:[],
    nome:'teste',
    idade: '99', //[{id:1,nome:'Rodrigo', idade:36}]
}

export const listaReducer = (state=intialState, action) => {
    
    switch(action.type){
        case 'loadPessoas':
            return {...state, pessoas:action.payload.pessoas}
        case 'changeNome':
            return {...state, nome:action.payload.nome}
        case 'changeIdade':
            return {...state, idade:action.payload.idade}   
        case 'pessoaRealm':
            return {...state, pessoasRealm:action.payload.realm}  
        case 'pessoaRealmSync':
            return {...state, realmSync:action.payload.realmSync}                       
    }
    return state
}