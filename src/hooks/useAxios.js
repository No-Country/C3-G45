import { useDispatch } from 'react-redux';
import { startGetEvents } from '../actions/events';
import { getItem } from '../helpers/crudFunctions';

const useAxiosGet = () => {

    const dispatch = useDispatch();

    getItem()
        .then(events => {
            dispatch( startGetEvents({
                data: events,
                loading: false
            }));
        })
        .catch(() => {
            alert("Hubo un problema al realizar la busqueda");
        })
}

export default useAxiosGet;