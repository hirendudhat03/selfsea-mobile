import CreateReducer from './CreateReducer'

const initialState = {
    data: null,
}

console.log('call HomeReducer')

export const HomeReducer = CreateReducer(initialState, {
    ['HOME_RESPONSE'] (state, action) {
        console.log('call HOME_RESPONSE')
        console.log('state : ', state)
        console.log('action : ', action)
        return {
            data: action.payload,
        }
    },
    ['HOME_REQUEST'] (state, action) {
        console.log('call HOME_REQUEST')
        console.log('state : ', state)
        console.log('action : ', action)
        return {
            action: action,
        }
    },
})
