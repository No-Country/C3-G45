import React from 'react';
import './principalSection.css';

import Header from './sections/Header';
import VideoSection from './sections/VideoSection';
import MerchandisingSection from './sections/MerchandisingSection';
import './principalSection.css'

const PrincipalSection = () => {
    return (
        <>
            <Header />
            <VideoSection />
            <MerchandisingSection />
        </>
    )
}

export default PrincipalSection;