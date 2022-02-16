import React from 'react';
import miniature from '../../../assets/img/dua-lipa-miniature.jpg';

const MerchandisingSection = () => {
    return (
        <div className="container">
            <div className='row mt-5'>
                <h1>AVAILABLE EVENTS AND MERCHANDISING</h1>
                <div className='col'>
                    <div className="input-group mt-5">
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
                        <div className="card mb-5">
                            <img src={miniature} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                        <div className="card mb-5">
                            <img src={miniature} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                        <div className="card mb-5">
                            <img src={miniature} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                        <div className="card mb-5">
                            <img src={miniature} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                        <div className="card mb-5">
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
    )
}

export default MerchandisingSection;