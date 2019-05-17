import firebase from '../firebaseConnection'

export const changeEmail = (email) => {
    return{
        type:'changeEmail',
        payload:{
            email:email
        }      
    }
    
}

export const changeSenha = (senha) => {
    return{
        type:'changeSenha',
        payload:{
            senha:senha
        }
    }
}

export const login = (usuario, senha) => {
    return async (dispatch) => {
        try {
            await firebase.auth().signInWithEmailAndPassword(usuario,senha)
            dispatch(
                {
                    type:'login',
                    payload:{
                        uid:firebase.auth().currentUser.uid
                    }
                }
                
            )
        } catch (error) {
            alert(error.code)
        }
        
    }
}