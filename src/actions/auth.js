import { auth, googleAuthProvider, signInWithPopup } from 'base/firebase-config';
import { signinUser, signupUser } from 'helpers/crudFunctions';

import { types } from "types/types";
import { setError } from './ui';

/* Login and Google Login actions */
export const startLoginEmailPass = ( email, password, navigate) => {
    return (dispatch) => {

        signinUser( email, password )
            .then( (data) => {
                console.log("succefully login!!");

                dispatch(login(data.access, email));
                navigate("/home");
            })
            .catch( () => {
                dispatch(setError( "Email/password incorrect!" ));
            });
    }
}

export const startGoogleLogin = (navigate) => {
    return (dispatch) => {

        signInWithPopup(auth, googleAuthProvider)
            .then(({ user }) => {
                console.log(user)
                dispatch(
                    login(user.uid, user.displayName)
                )

                navigate('/home');
            });
    }
}

export const login = ( accessToken, displayName ) => ({
    type: types.login,
    payload: {
        accessToken,
        displayName,
    }
});

/* Register actions */
export const startRegister = (firstName, userName, lastName, email, password, navigate) => {
    return (dispatch) => {
        signupUser(userName, firstName, lastName, email, password)
        .then( () => {
            console.log("User register successfully");

            dispatch(register(firstName, userName, lastName, email, password));

            dispatch(startLoginEmailPass(email, password, navigate));
            
        }).catch(() => {
            dispatch(setError( "User with this Email already exists." ));
        });
    }
}

export const register = (firstName, userName, email, password) => ({
    type: types.register,
    payload: {
        firstName,
        userName,
        email,
        password
    }
})

/* Logout actions */
export const startLogout = () => {
    return (dispatch) => {
        dispatch(logout())
    }
}

export const logout = () => ({
    type: types.logout,
    payload: {}
})