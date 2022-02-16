import React from 'react';

const VideoSection = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 mt-5 video-section-text">
                    <i className="fas fa-angle-down"></i>
                    <p>Did you see the last video?</p>
                    <h2>
                        <p>LAST</p>
                        <p>LP</p>
                    </h2>
                </div>
                <div className="col-md-6 mt-5 mb-4">
                    <div className="video-bg">
                        <button className="btn-video">
                            <i class="fas fa-play"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoSection;