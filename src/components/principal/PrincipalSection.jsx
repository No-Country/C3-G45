import React from 'react';
import './principalSection.css';

import Header from './sections/Header';
import VideoSection from './sections/VideoSection';
import MerchandisingSection from './sections/MerchandisingSection';
import './principalSection.css'
import useAxios from '../../hooks/useAxios';
import { useDispatch } from 'react-redux';
import { startGetEvents } from '../../actions/events';


const PrincipalSection = () => {

    useAxios();

    return (
        <>
            <Header />
            <VideoSection />
            <MerchandisingSection />
        </>
    )
}

export default PrincipalSection;