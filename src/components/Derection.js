import { DirectionsRenderer, DirectionsService, GoogleMap, LoadScript } from '@react-google-maps/api';
import React, { useState } from 'react';
import { API_KEY } from './Config';

const containerStyle = {
    width: '500px',
    height: '500px'
};

const location = {
    lat: 23.684994,
    lng: 90.356331
};



function Derection() {
    const [derectionResponse, setDerectionResponse] = useState(null)

    return (
        <LoadScript
            googleMapsApiKey={API_KEY}
        >
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={location}
                zoom={10}
            >

                <DirectionsService
                    // required
                    options={{
                        destination: 'Gulsan 1 circle Dhaka Bangladesh',
                        origin: 'Banani 11 City Bank Dhaka Bangladesh',
                        travelMode: 'DRIVING'
                    }}
                    // required
                    callback={res => {
                        if (res !== null) {
                            setDerectionResponse(res);
                        }
                    }}
                />

                {derectionResponse && <DirectionsRenderer
                    // required
                    options={{
                        directions: derectionResponse
                    }}
                />}
            </GoogleMap>
        </LoadScript>
    )
}

export default Derection;