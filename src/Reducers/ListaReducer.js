
const intialState = {
    pessoas: [],
    nome:'',
    idade: '', //[{id:1,nome:'Rodrigo', idade:36}]
}

export const listaReducer = (state=intialState, action) => {
    
    switch(action.type){
        case 'loadPessoas':
            return {...state, pessoas:action.payload.pessoas}
        case 'changeNome':
            return {...state, nome:action.payload.nome}
    }
    return state
}