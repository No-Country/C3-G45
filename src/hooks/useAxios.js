import { useEffect, useState } from 'react';
import getItem from '../helpers/getItem';

const useAxios = () => {

    const [item, setItem] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        getItem()
            .then( productos => {
                setItem({
                    data: productos,
                    loading: false
                });
            })
            .catch( () => {
                alert("Hubo un problema al realizar la busqueda");
            })
    }, [])

    return item;
}

export default useAxios;