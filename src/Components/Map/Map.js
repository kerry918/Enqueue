import React, { Component } from 'react'; 
import {GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow} from "react-google-maps"; 
import mapStyles from "./mapStyles"; 

const center = {
    lat: 32.880096421618646,
    lng: -117.2339813156968,
};

const options = {
    styles: mapStyles
}

const markers = [
    {},
    {
        lat: 32.875640319038006, 
        lng: -117.23165873850279, 
        name: "VA San Diego Healthcare System", 
        desc:  `The Recreation, Intramural, and Athletic Complex is a sports complex 
        at the University of California San Diego comprising an arena, a weight room 
        and various other event and athletic facilities. It is one of the largest college 
        athletic facilities in the country.`, 
        link: "https://ucsdnews.ucsd.edu/pressrelease/uc-san-diego-health-opens-vaccination-site-on-university-campus", 
        hour: "Open: 2:00 PM - 6:00 PM"
    }, 
    {
        lat: 32.88552731197406, 
        lng: -117.23992775965468, 
        name: "RIMAC (Available Vaccination Center)", 
        desc:  `The Recreation, Intramural, and Athletic Complex is a sports complex 
        at the University of California San Diego comprising an arena, a weight room 
        and various other event and athletic facilities. It is one of the largest college 
        athletic facilities in the country.`, 
        link: "https://ucsdnews.ucsd.edu/pressrelease/uc-san-diego-health-opens-vaccination-site-on-university-campus", 
        hour: "Open: 2:00 PM - 6:00 PM"
    }, 
    {
        lat: 32.88578139324258, 
        lng: -117.2256209662402, 
        name: "Scripps Memorial Hospital La Jolla", 
        desc:  `The Recreation, Intramural, and Athletic Complex is a sports complex 
        at the University of California San Diego comprising an arena, a weight room 
        and various other event and athletic facilities. It is one of the largest college 
        athletic facilities in the country.`, 
        link: "https://ucsdnews.ucsd.edu/pressrelease/uc-san-diego-health-opens-vaccination-site-on-university-campus", 
        hour: "Open: 2:00 PM - 6:00 PM"
    }, 
]

class Map extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedPark: null, 
            index: 0
        };
    }

    render(){
        return (
            <div>
                <GoogleMap 
                    defaultZoom={14}
                    defaultCenter={center}
                    defaultOptions={options}
                >
                    
                    {markers.map((loc, index) => (
                        <Marker 
                        key={index}
                        position={{
                            lat: loc.lat, 
                            lng: loc.lng
                        }}
                        onClick={() => {
                            this.setState({
                                selectedPark: "yes",
                                index: index
                            })
                        }}
                        />
                    ))}

                    {this.state.selectedPark && this.state.index &&
                            <InfoWindow
                            position={{
                                lat: markers[this.state.index].lat, 
                                lng: markers[this.state.index].lng
                            }}
                            onCloseClick={() => {
                                this.setState({
                                    selectedPark: null, 
                                    index: null
                                })
                            }}
                            >
                                <div>
                                    <h2 className="highlight-b">{markers[this.state.index].name}</h2>
                                    <p>{markers[this.state.index].desc}</p>
                                    <a 
                                    href={markers[this.state.index].link} 
                                    target="_blank">
                                            More Info
                                    </a>
                                    <p>{markers[this.state.index].hour}</p>
                                </div>
                            </InfoWindow>
                    }
                </GoogleMap>
            </div>
        ); 
    }
}

const WrappedMap = withScriptjs(withGoogleMap(Map)); 

export default WrappedMap; 
