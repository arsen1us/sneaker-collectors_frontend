import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import PopularSneakerCollection from '../components/PopularSneakerCollections';
import HipeModels from '../components/HipeModels';
import News from '../components/News';
import TheMostInsaneCollectors from '../components/TheMostInsaneCollectors';

function MainPage() {
    return(
        <div>
            <PopularSneakerCollection/>
            <HipeModels/>
            <News/>
            <TheMostInsaneCollectors/>
        </div>
    );
};

export default MainPage;