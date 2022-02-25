import { auth, googleAuthProvider, signInWithPopup } from '../base/firebase-config';

import { types } from "../types/types";

/* Login and Google Login actions */
export const startLoginEmailPass = (uid, email, password) => {
    return (dispatch) => {
        dispatch( login( uid, email, password ) );
    }
}

export const startGoogleLogin = ( navigate ) => {
    return ( dispatch ) => {

        signInWithPopup( auth, googleAuthProvider )
            .then( ({ user }) => {
                console.log(user)
                dispatch(
                    login( user.uid, user.displayName )
                )

                navigate('/home');
            });
    }
}

export const login = ( uid, displayName, password ) => ({
    type: types.login,
    payload: {
        uid,
        displayName,
        password
    }
});

/* Register actions */
export const startRegister = ( uid, firstName, lastName, userName, email, password ) => {
    return (dispatch) => {
        dispatch( register( uid, firstName, lastName, userName, email, password ) );
    }
}

export const register = ( uid, firstName, lastName, userName, email, password ) => ({
    type: types.register,
    payload: {
        uid,
        firstName,
        lastName,
        userName,
        email,
        password
    }
})

/* Logout actions */
export const startLogout = () => {
    return (dispatch) => {
        dispatch( logout() )
    }
}

export const logout = () => ({
    type: types.logout,
    payload: {  }
})