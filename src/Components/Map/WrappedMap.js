import React from 'react'
import WrappedMap from './Map'; 

import { Button } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

export default function MapMain(props) {
    return (
        <div style={{height: '80vh', width: '90vw', padding: '3%' }}>
            <Button href="/landingpage" startIcon={<ArrowBackIcon />}>Back to Main</Button>
            <WrappedMap 
                googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&
                libraries=geometry,drawing,places&key=AIzaSyCTn-yznomhbeamrh14IdBGTusMbnOBCYk`}
                loadingElement={<div style={{height: "100%"}}/>}
                containerElement={<div style={{height: "100%"}}/>}
                mapElement={<div style={{height: "100%"}}/>}
            />
        </div>
    )
}