import { firebase, googleAuthProvider, db } from '../base/firebase-config';

import { types } from "../types/types";

export const startLoginEmailPass = (email, password) => {
    return (dispatch) => {
        dispatch( login( email, password ) )
    }
}

export const startGoogleLogin = () => {
    return ( dispatch ) => {

        firebase.auth().signInWithPopup( googleAuthProvider )
            .then( ({ user }) => {
                dispatch(
                    login( user.uid, user.displayName )
                )
            });

    }
}

export const login = ( uid, displayName ) => ({
    type: types.login,
    payload: {
        uid,
        displayName
    }
});