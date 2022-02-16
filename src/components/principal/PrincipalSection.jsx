import React from 'react';
import './principalSection.css';

/**/
import Header from './sections/Header';
import VideoSection from './sections/VideoSection';
import MerchandisingSection from './sections/MerchandisingSection';

const PrincipalSection = () => {
    return (
        <>
            <Header />
            <VideoSection />
            <hr />
            <MerchandisingSection />
        </>
    )
}

export default PrincipalSection;