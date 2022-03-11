import React from "react";
import Pagination from "components/Pagination/Pagination";
import MyTicketsCard from "components/User/components/MyTicketsCard/MyTicketsCard";
import "./MyTickets.css";
import { useSelector } from "react-redux";

const items = [
  {
    id: 4,
    name_event: "Buenos Aires Concert",
    description: "",
    status_event: "SOON",
    get_image:
      "https://no-country-c03-g57-backend.herokuapp.com/media/events/road-g8566cdfab_640.jpg",
    get_thumbnail:
      "https://no-country-c03-g57-backend.herokuapp.com/media/events/ticket_latam.jpeg",
    date_event: "2022-02-28T18:12:50Z",
    city: "Ciudad Autonoma de Buenos Aires",
    location: "Estadio SC",
    get_absolute_url: "/tour-latam-2022/santiago-concert-santiago/",
    products: [],
    tickets: [],
    id_tour: "Latam 2022",
  },
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
    status_event: "AVAILABLE",
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
        name_product: "Guitar",
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

const MyTickets = () => {
  const { auth, order } = useSelector((state) => state);

  // order.order.order.map( tickets => {
  //   console.log(tickets.items[0])  
  // })

  return (
    <>
      <div className="container-fluid cont-tickets">
        <div className="container-fluid">
          <div className="bg-my-tickets">
            <div className="sticky">
              <p className="text-presentation">
                Welcome, {auth.name} <br></br>
                Are you ready for the Show?
              </p>
            </div>
          </div>
        </div>
        <div className="container-fluid text-intro">
          <h3> <i className="fas fa-angle-right"></i>Check the latest Tickets</h3>
        </div>
      </div>
      <div className="container " >
        <div className="text-intro" >
          <h2>Upcoming Events</h2>
        </div>
        <Pagination
          component={<MyTicketsCard />}
          itemsPerPage={3}
          items={items}
        />
      </div>
    </>
  );
};

export default MyTickets;
