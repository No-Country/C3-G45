import React from 'react';
import { useSelector } from 'react-redux';
import miniature from "../../assets/img/dua-lipa-miniature.jpg";

const TicketsCards = () => {

    const { data } = useSelector( state => state )

    if(data.events === undefined){
        return (
            <div>
                CARGANDO....
            </div>
        )
    }
    return (
        <div className="container container-tickets mt-5">
            <div className="row">
                <div className="col">
                    <div className="row row-cols-1 ">
                        {
                            data.events.map( e => {
                                return (
                                    <div key={e.id} className="container card mb-5 p-0">
                                        <div className="row g-0">
                                            <div className="col-4 p-2 d-flex alig-items-center justify-content-center body-ticket">
                                                <img src={miniature} alt="..." />
                                            </div>
                                            <div className="col-8">
                                                <div className="container">
                                                    <div className="row">
                                                        <div className="col-xs-12 col-md-6 p-2 body-ticket">
                                                            <h3>{e. name_event}</h3>
                                                            <p>{e.city}</p>
                                                            <p>{e.location}</p>
                                                            <p className="text-muted">{e.date_event}</p>
                                                        </div>
                                                        <div className="col-xs-12 col-md-6 p-2 d-flex justify-content-center align-items-end">
                                                            <button className="btn btn-primary">
                                                                Buy ticket
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TicketsCards;