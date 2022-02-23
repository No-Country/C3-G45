import React from 'react';
import TicketsCards from '../TicketsCards/TicketsCards';

import './modals.css';

const NewEvents = () => {
    return (
        <div className="modal fade" id="newEvents" tabIndex="-1" aria-labelledby="newEventsLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-scrollable">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="newEventsLabel">New Events</h5>
                        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <TicketsCards />
                        <TicketsCards />
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewEvents;