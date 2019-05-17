import firebase from '../firebaseConnection'


//[{id:2, nome:'teste', idade:30}]

export const loadPessoas = (uid) => {
    return async (dispatch) => {
        try {            
            await firebase.database().ref(uid).child('pessoas').on('value', (snapshot)=>{                
                let pessoas = []
                snapshot.forEach((childItem)=>{
                    pessoas.push({
                        id:childItem.val().id,
                        nome:childItem.val().nome,
                        idade:childItem.val().idade,
                    })
                })
                dispatch(
                    {
                        type:'loadPessoas',
                        payload:{
                            pessoas:pessoas
                        }
                    }
                )
            })            
        } catch (error) {
            alert(error.message)
        }
        
    }    
}

export const changeNome = (nome) => {
    return{
        type: 'changeNome',
        payload:{
            nome:nome
        }
    }
}

export const addPessoa = (pessoa, uid) => {
    return async dispatch => {
        try {
            const key = await firebase.ref(uid).child('pessoas').push().key
            await firebase.database().ref(uid).child('pessoas').child(key).set({
            id:value.key,
            nome:pessoa.nome,
            idade:pessoa.idade,
        })
        } catch (error) {
            alert(error.message)
        }        
    }
}