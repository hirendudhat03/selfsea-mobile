import {combineReducers} from 'redux'

import {LoginReducer} from './LoginReducer'
import { SignupReducer } from './SignupReducer'
import { CreateProfileReducer } from './CreateProfileReducer'

export default combineReducers({
    LoginReducer,
    SignupReducer,
    CreateProfileReducer,
})
