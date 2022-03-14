export const checkInLocalStorage = ( token, mail ) => {
    let storage = JSON.parse(localStorage.getItem("login"));

    if(storage === null){

        storage = localStorage.setItem("login", {
            token,
            mail
        })
        console.log("El local storage esta vacío!!")
    }else{
        console.log(storage)
    }
}
