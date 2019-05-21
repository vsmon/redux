import firebase from '../firebaseConnection'
import Realm from 'realm'

//[{id:2, nome:'teste', idade:30}]
const pessoasSchema = {
    name: 'pessoas',
    properties:{
        uid:'string',
        id:'string', 
        nome:'string', 
        idade:'string'
    }
}
export const pessoaRealmDelete = () => {
    return async dispatch => {
        try {
            const realm = await Realm.open([pessoasSchema])
            
            let pessoas = await realm.objects('pessoas')

            realm.write(async()=>{
                await realm.delete(pessoas)
            })
            dispatch({
                type:'pessoaRealm',
                payload:{
                    realm:pessoas
                }
            })
            
        } catch (error) {
            alert(error.message)
        }
    }
}

export const pessoaRealmAdd = () => {
    return async dispatch => {
        try {
            const realm = await Realm.open({schema:[pessoasSchema]})                
            
            await realm.write(()=>realm.create('pessoas', 
            {
                uid:'sldfjkalsdj',
                id:'1', 
                nome:'teste realm', 
                idade:'60'
            }))    
            const pessoas = await realm.objects('pessoas')
            
            dispatch({
                type:'pessoaRealm',
                payload:{
                    realm:pessoas
                }
            })
        } catch (error) {
            alert('ADD: ' + error.message)
        }        
    }
}

/* async function pessoaRealmSync(pPessoas = []){
    try {
        const realm = await Realm.open({schema:[pessoasSchema]})
        pPessoas.map(async item=>{
            await realm.write(()=>realm.create('pessoas',
            {
                uid:item.id.toString(),
                id:item.id.toString(), 
                nome:item.nome.toString(), 
                idade:item.idade.toString()
            }))
        })
        

    } catch (error) {
        alert('Sync:' + error.message)
    }
} */

export const pessoaRealmSync = (pPessoas) => {
    return async dispatch => {
        try {
            const realm = await Realm.open({schema:[pessoasSchema]})
            const pessoas = await realm.objects('pessoas')
            realm.write(async ()=>{
                await realm.delete(pessoas)
            })
            pPessoas.map(async item=>{
                await realm.write(()=>realm.create('pessoas',
                {
                    uid:item.id.toString(),
                    id:item.id.toString(), 
                    nome:item.nome.toString(), 
                    idade:item.idade.toString()
                }))
                const pessoas = await realm.objects('pessoas')
                dispatch({
                    type: 'pessoaRealmSync',
                    payload:{
                        realmSync:pessoas
                    }
                })
            })                        
    
        } catch (error) {
            alert('Sync:' + error.message)
        } 
    }
    
}

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

export const changeIdade = (idade) => {
    return{
        type: 'changeIdade',
        payload:{
            idade:idade
        }
    }
}

export const addPessoa = (uid, nome, idade) => {
    return async (dispatch) => {
        try {            
            const key  = await firebase.database().ref(uid).child('pessoas').push().key
            await firebase.database().ref(uid).child('pessoas').child(key).set({
            id:key,
            nome:nome,
            idade:idade,
        }) 
        } catch (error) {
            alert(error.message + uid)
        }        
    }
}