import React from "react";

const VideoSection = () => {
  const videoLink = () => {
    window.location.href = "https://www.youtube.com/watch?v=BC19kwABFwc";
  };

  return (
    <div className="container mt-5 mb-5">
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
            <button onClick={videoLink} className="btn-video">
              <i className="fas fa-play"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
