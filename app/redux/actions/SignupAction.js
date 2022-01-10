export function SignupResponse(data) {
    console.log('call SaveLoginResponse : ', data)

    return {
        type: 'SIGNUP_RESPONSE',
        payload: data,
    }
}

export function SignupRequest(email, Password,  birthMonth, birthYear, userName, navigation) {
    // console.log('call SaveLoginResponse : ', data)

    return {
        type: 'SIGNUP_REQUEST',
        email: email,
        Password: Password,
        birthMonth: birthMonth,
        birthYear: birthYear,
        userName: userName,
        navigation: navigation,
    }
}
