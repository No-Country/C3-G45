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

    const { data } = useAxios();
    const dispatch = useDispatch();

    if(data.length > 0){
        dispatch( startGetEvents(data) )
    }
    return (
        <>
            <Header />
            <VideoSection />
            <MerchandisingSection />
        </>
    )
}

export default PrincipalSection;