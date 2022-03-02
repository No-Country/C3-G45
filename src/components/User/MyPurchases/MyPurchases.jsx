import React from "react";
import Pagination from "../../Pagination/Pagination";
import MyTicketsCard from "../components/MyTicketsCard/MyTicketsCard";
import MyTicketsCard2 from "../components/MyTicketsCard2/MyTicketsCard2";

const items = [
  {
    id: 3,
    name_event: "Santiago Concert",
    description: "",
    status_event: "SOON",
    get_image:
      "https://no-country-c03-g57-backend.herokuapp.com/media/events/road-g8566cdfab_640.jpg",
    get_thumbnail:
      "https://no-country-c03-g57-backend.herokuapp.com/media/events/ticket_latam.jpeg",
    date_event: "2022-02-28T18:12:50Z",
    city: "Santiago",
    location: "Estadio SC",
    get_absolute_url: "/tour-latam-2022/santiago-concert-santiago/",
    products: [],
    tickets: [],
    id_tour: "Latam 2022",
  },
  {
    id: 2,
    name_event: "New Album",
    description: "ANother event for New Album",
    status_event: "DISPONIBLE",
    get_image: "",
    get_thumbnail: "",
    date_event: "2022-02-25T17:52:42Z",
    city: "Sao Paulo",
    location: "Estadio SP",
    get_absolute_url: "/tour-latam-2022/new-album-sp/",
    products: [
      {
        id: 1,
        name_product: "camiseta New Album",
        get_absolute_url: "/new-album-sp/camiseta-na/",
        description: "The best shirt for concert",
        price: "50.00",
        stock: 100,
        get_image: "",
        get_thumbnail: "",
      },
    ],
    tickets: [],
    id_tour: "Latam 2022",
  },
  {
    id: 1,
    name_event: "Future World",
    description: "Evento en BS 2022",
    status_event: "SOON",
    get_image:
      "https://no-country-c03-g57-backend.herokuapp.com/media/events/spaghetti-gefe47898d_640.jpg",
    get_thumbnail:
      "https://no-country-c03-g57-backend.herokuapp.com/media/events/events/spaghetti-gefe47898d_640.jpg",
    date_event: "2022-02-25T17:51:26Z",
    city: "Buenos Aires",
    location: "Estadio BA",
    get_absolute_url: "/tour-latam-2022/futuro-event-2022/",
    products: [
      {
        id: 4,
        name_product: "Botas concierto",
        get_absolute_url: "/futuro-event-2022/botas-concierto/",
        description: "sdasda",
        price: "0.00",
        stock: 0,
        get_image:
          "http://127.0.0.1:8000/media/products/dogs-g795068e1f_640.jpg",
        get_thumbnail:
          "http://127.0.0.1:8000/media/products/products/dogs-g795068e1f_640.jpg",
      },
      {
        id: 3,
        name_product: "guitarra",
        get_absolute_url: "/futuro-event-2022/guitarra-fw/",
        description: "The classic guitarra from the band",
        price: "500.00",
        stock: 5,
        get_image: "",
        get_thumbnail: "",
      },
      {
        id: 2,
        name_product: "Disco Future World",
        get_absolute_url: "/futuro-event-2022/disco-fw/",
        description: "The best products for the concert",
        price: "100.00",
        stock: 10,
        get_image: "",
        get_thumbnail: "",
      },
    ],
    tickets: [],
    id_tour: "Latam 2022",
  },
];

const MyPurchases = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="contianer-fluid bg-my-tickets">
            Hi, {/* Hi, {state.auth.name} */}
          </div>

          <button></button>
        </div>
        <div className="row">
          <div className="col-12 text-center">
            <h1 className="profile-h1">My Tickets</h1>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="text-center">
                <h2>Upcoming Events</h2>
                <Pagination
                  component={<MyTicketsCard2 />}
                  itemsPerPage={2}
                  items={items}
                />
              </div>
            </div>
          </div>
          <div className="col-12 card-container">
            {/* <BtnProfile
              title="Purchases"
              iconClassNames="fas fa-shopping-bag icon-profile"
              linkTo="/myPurchases"
              className="onHover"
            /> */}
          </div>
        </div>
      </div>
      ;
    </>
  );
};

export default MyPurchases;
