import React from "react";
import Pagination from "../../Pagination/Pagination";

const items = [
  {
    id: 4,
    name_product: "Botas concierto",
    get_absolute_url: "/futuro-event-2022/botas-concierto/",
    description: "sdasda",
    price: "0.00",
    stock: 0,
    get_image: "http://127.0.0.1:8000/media/products/dogs-g795068e1f_640.jpg",
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
];

const MyTickets = () => {
  return <Pagination itemsPerPage={4} items={items} />;
};

export default MyTickets;
