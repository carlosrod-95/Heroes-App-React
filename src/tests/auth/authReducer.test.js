import { authReducer } from "../../auth/authReducer"
import { types } from "../../types/types";


describe('Pruebas en authReducer', () => {
    test('debe de retornar el estado por defecto', () => {

        const state = authReducer({logged: false}, {});

        expect(state).toEqual({logged:false})
        
    })
    
    test('debe de autenticar y colocar el name del usuario', () => {

        const action = {
            type: types.login,
            payload: {
                name: 'Fernando'
            }
        }

        const state = authReducer({logged: false}, action)

        expect(state).toEqual({name: 'Fernando', logged: true})
        
    })

    test('debe de borrar el name del usuario y logged en false', () => {
        
        const action = {
            type: types.logout,
            payload: {
                logged: false
            }
        }

        const state = authReducer({logged: true, name: 'Fernando'}, action)

        expect(state).toEqual({logged: false})

    })
    
    
})

// const state = {
//     name: 'Fernando',
//     logged: true
// }
