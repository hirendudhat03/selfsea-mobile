import CreateReducer from './CreateReducer'

const initialState = {
    data: null,
}

console.log('call createProfileReducer')

export const CreateProfileReducer = CreateReducer(initialState, {
    ['CREATE_PROFILE_RESPONSE'] (state, action) {
        console.log('call CREATE_PROFILE_RESPONSE')
        console.log('state : ', state)
        console.log('action : ', action)
        return {
            data: action.payload,
        }
    },
    ['CREATE_PROFILE_REQUEST'] (state, action) {
        console.log('call CREATE_PROFILE_REQUEST')
        console.log('state : ', state)
        console.log('action : ', action)
        return {
            action: action,
        }
    },
})
