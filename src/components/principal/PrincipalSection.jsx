import React from 'react';
import './principalSection.css'

import videoImg from '../../assets/img/dua-lipa.jpg'
import miniature from '../../assets/img/dua-lipa-miniature.jpg'

const PrincipalSection = () => {
    return (
        <>
            <div className="container-fluid App-main">
                <div className="container d-flex align-items-center App-background">
                    <div className="row align-items-center">
                        <div className="col-md-12">
                            <h1>
                                <p>FUTURE</p>
                                <p>NOSTALGIA</p>
                            </h1>
                        </div>
                        <div className="col-md-12">
                            <span>Lorem ipsum dolor at siamet</span>
                        </div>
                        <div className="col-md-12">
                            <button className="btn btn-primary">Buy Tickets</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mt-5">
                        <i className="fas fa-angle-down"></i>
                        <p>Did you see the last video</p>
                        <h2>LAST LP</h2>
                    </div>
                    <div className="col-md-6 mt-5 mb-4">
                        <img src={videoImg} alt="" />
                    </div>
                </div>
            </div>
            <hr />
            <div className="container">
                <h1>AVAILABLE EVENTS AND MERCHANDISING</h1>
                <div className='row'>
                    <div className='col'>
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="July 24, Toronto, Canada, 60USD" aria-label="search" />
                            <button className="btn btn-outline-secondary" type="button">Button</button>
                        </div>
                        <label className="form-label">Price Range</label>
                        <input type="range" className="form-range" min="0" max="5" step="0.5"></input>
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <div className="btn-toolbar justify-content-between" role="group" aria-label="Events">
                            <button type="button" className="btn btn-lg">Last Events!</button>
                            <button type="button" className="btn btn-lg">New Events!</button>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <div className="row row-cols-1 ">
                            <div className="card">
                                <img src={miniature} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                            <div className="card">
                                <img src={miniature} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                            <div className="card">
                                <img src={miniature} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                            <div className="card">
                                <img src={miniature} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                            <div className="card">
                                <img src={miniature} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PrincipalSection;