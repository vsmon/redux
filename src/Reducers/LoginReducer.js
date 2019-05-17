const initialState = {
    email:'rodrigo@gmail.com',
    senha:'123456',
    uid:'',
}



export const loginReducer = (state = initialState, action) => {
    
    switch(action.type){
        case 'changeEmail':
            return {...state, email:action.payload.email}
        case 'changeSenha':
            return {...state, senha:action.payload.senha}
        case 'login':
            return {...state, uid:action.payload.uid}            
    }            
    return state
}