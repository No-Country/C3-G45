import axios from "axios";

const getItem = async () => {
  const url = `https://no-country-c03-g57-backend.herokuapp.com/api/v1/event-list/`;
  const { data } = await axios.get(url);

  const item = data.map((e) => {
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
      tickets: e.tickets,
    };
  });

  return item;
};

const signupUser = async (username, first_name, last_name, email, password) => {
  const url = `https://no-country-c03-g57-backend.herokuapp.com/auth/signup/`;
  await axios.post(url, {
    username: username,
    first_name: first_name,
    last_name: last_name,
    email: email,
    password: password,
  });
};

const signinUser = async (email, password) => {
  const url =
    "https://no-country-c03-g57-backend.herokuapp.com/auth/jwt/create";
  const { data } = await axios.post(url, {
    email: email,
    password: password,
  });

  return data;
};
const postOrder = async (token, cart) => {
  let config = { headers: { Authorization: `Bearer ${token}` } };
  let url = "https://no-country-c03-g57-backend.herokuapp.com/api/v1/order-view";

  //, token header auth
  const { data } = await axios.post(url, {
    product: null,
    ticket: cart.id,
    quantity: 0,
    quantity_tickets: 1,
  }, config);
  
  return data;
};
const getOrder = async (token) => {
  let url = "https://no-country-c03-g57-backend.herokuapp.com/api/v1/order-view/";
  const config = { headers: { Authorization: `Bearer ${token}` } };
  //para mi usuario, que tiene el id_ user, con el token para auth

  const { data } = await axios.get(url, config);
  return data;
};

export { getItem, signupUser, signinUser, postOrder, getOrder };
