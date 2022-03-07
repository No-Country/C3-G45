import { useDispatch } from "react-redux"
import { removeError, setError } from "actions/ui"
import validator from "validator";


export const useIsFormValid = () => {

    const dispatch = useDispatch();

    const isFormValidRegister = ( firstName, lastName, userName, email, password ) => {
        
        if ( firstName === undefined && lastName === undefined && email === undefined && userName === undefined && password === undefined){
            dispatch( setError("The fields shouldn't empty") );
            return false;
        } else if ( firstName === undefined || firstName.trim().length <= 1 ) {
            dispatch( setError("First name is required and should be at least 2 characters") );
            return false;
        } else if ( lastName === undefined || lastName.trim().length <= 1 ) {
            dispatch( setError("Last name is required and should be at least 2 characters") );
            return false;
        } else if ( email === undefined || !validator.isEmail( email ) ) {
            dispatch( setError("Email is not valid") );
            return false;
        } else if ( userName === undefined || userName.trim().length <= 3 ) {
            dispatch( setError("User name is required and should be at least 3 characters") );
            return false;
        } else if ( password === undefined || password.length < 5 ) {
            dispatch( setError("Password is required and should be at least 6 characters") );
            return false;
        }
        
        dispatch( removeError() );
        return true;
    }

    const isFormValidLogin = ( email, password ) => {
        
        if( email === undefined || password === undefined ){
            dispatch( setError("The fields shouldn't empty") );
            return false;
        }else if( email === undefined || !validator.isEmail( email ) ){
            dispatch( setError("Email is not valid") );
            return false;
        }else if( password === undefined || password.length < 5 ){
            dispatch( setError("Password is required and should be at least 6 characters") );
            return false;
        }
        
        dispatch( removeError );
        return true;
    }

    return { isFormValidLogin, isFormValidRegister };
}


