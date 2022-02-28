import axios from 'axios';

const getItem = async () => {

    const url = `https://no-country-c03-g57-backend.herokuapp.com/api/v1/event-list/`;
    const { data } = await axios.get(url);

    const item = data.map( e => {
        return {
            city: e.city,
            date_event: e.date_event,
            description: e.description,
            get_absolute_url: e.get_absolute_url,
            get_image: e.get_image,
            get_thumbnail: e.get_thumbnail,
            id: e.id,
            id_tour: e.id_tour,
            location: e.location,
            name_event: e.name_event,
            products: e.products,
            status_event: e.status_event,
            tickets: e.tickets
        }
    });

    return item;
}

export default getItem;