import CreateReducer from './CreateReducer'

const initialState = {
    data: null,
}

console.log('call CreateProfile')

export const SignupReducer = CreateReducer(initialState, {
    ['SIGNUP_RESPONSE'](state, action) {
        console.log('call SIGNUP_RESPONSE')
        console.log('state : ', state)
        console.log('action : ', action)
        return {
            data: action.payload,
        }
    },
    ['SIGNUP_REQUEST'](state, action) {
        console.log('call SIGNUP_REQUEST')
        console.log('state : ', state)
        console.log('action : ', action)
        return {
            action: action,
        }
    },
})
