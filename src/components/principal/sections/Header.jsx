import React from 'react';

const Header = () => {
    return (
        <div className="container-fluid App-main">
            <div className="container d-flex align-items-center App-background">
                <div className="row align-items-center">
                    <div className="col-md-12">
                        <h1>
                            <p className='title-header'>FUTURE</p>
                            <p className='title-header'>NOSTALGIA</p>
                        </h1>
                    </div>
                    <div className="col-md-12">
                        <p className='text-header'>Dua Lipa’s star studded, disco extravaganza “Studio 2054” is back! A celebration of the unconventional and unique, re-live Dua’s record breaking performance as she and her dancers flawlessly move through rooms inspired by surreal tv shows, roller discos, ecstatic raves, voguing ballrooms and diva style dressing rooms.</p>
                    </div>
                    <div className="col-md-12">
                        <button className="btn btn-primary">Buy Tickets</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;