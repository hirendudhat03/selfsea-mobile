export function LoginResponse(data) {
    console.log('call SaveLoginResponse : ', data)

    return {
        type: 'LOGIN_RESPONSE',
        payload: data,
    }
}

export function LoginRequest(email, password, navigation) {
    // console.log('call SaveLoginResponse : ', data)

    return {
        type: 'LOGIN_REQUEST',
        email: email,
        password: password,
        navigation: navigation,
    }
}
