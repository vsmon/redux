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