import { GoogleMap, LoadScript } from '@react-google-maps/api';
import React from 'react';
import { API_KEY } from './Config';

const containerStyle = {
    width: '500px',
    height: '500px'
};

const location = {
    lat: 23.684994,
    lng: 90.356331
};


function Map() {
    return (
        <LoadScript
            googleMapsApiKey={API_KEY}
        >
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={location}
                zoom={10}
            >
            </GoogleMap>
        </LoadScript>
    )
}

export default React.memo(Map)