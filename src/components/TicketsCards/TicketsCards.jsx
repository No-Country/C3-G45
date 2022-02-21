import React from 'react';
import miniature from "../../assets/img/dua-lipa-miniature.jpg";

const TicketsCards = () => {
    return (
        <div className="container container-tickets mt-5">
            <div className="row">
                <div className="col">
                    <div className="row row-cols-1 ">
                        <div className="container card mb-5 p-0">
                            <div className="row g-0">
                                <div className="col-4 p-2 d-flex alig-items-center justify-content-center body-ticket">
                                    <img src={miniature} alt="..." />
                                </div>
                                <div className="col-8">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-xs-12 col-md-6 p-2 body-ticket">
                                                <h3>12/06/2022</h3>
                                                <p>Buenos Aires</p>
                                                <p>Estadio River Plate</p>
                                                <p className="text-muted">20:00</p>
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
                        <div className="container card mb-5 p-0">
                            <div className="row g-0">
                                <div className="col-4 p-2 d-flex alig-items-center justify-content-center body-ticket">
                                    <img src={miniature} alt="..." />
                                </div>
                                <div className="col-8">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-xs-12 col-md-6 p-2 body-ticket">
                                                <h3>12/06/2022</h3>
                                                <p>Buenos Aires</p>
                                                <p>Estadio River Plate</p>
                                                <p className="text-muted">20:00</p>
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
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TicketsCards;