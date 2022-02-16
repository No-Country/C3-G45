import React from 'react';

const Header = () => {
    return (
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
    )
}

export default Header;