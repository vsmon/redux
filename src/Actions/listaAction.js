import firebase from '../firebaseConnection'


const pessoas = [] //[{id:2, nome:'teste', idade:30}]

export const loadPessoas = () => {
    return async (dispatch) => {
        await firebase.database().ref(firebase.auth().currentUser.uid).child('pessoas').once('value', (snapshot)=>{
            snapshot.forEach((childItem)=>{
                pessoas.push({
                    id:childItem.val().id,
                    nome:childItem.val().nome,
                    idade:childItem.val().idade,
                })
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
    }    
}