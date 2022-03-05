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
            image_event: e.image_event,
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

const postItem = async (username, first_name, email, pass) => {

    const url = `https://no-country-c03-g57-backend.herokuapp.com/api/v1/users`;
    await axios.post(url, {
        "username": username,
        "first_name": first_name,
        "email": email,
        "password": pass
    }).then( () => {
        console.log("User send successfully")
    }).catch( () => {
        console.log("Error in post user")
    })
}

export {
    getItem,
    postItem
}