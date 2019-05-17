
const intialState = {
    pessoas: [] //[{id:1,nome:'Rodrigo', idade:36}]
}

export const listaReducer = (state=intialState, action) => {
    
    switch(action.type){
        case 'loadPessoas':
            return {...state, pessoas:action.payload.pessoas}
    }
    
    
    
    return state
}