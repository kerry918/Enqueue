import React, { Component } from 'react'; 
import {GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow} from "react-google-maps"; 
import mapStyles from "./mapStyles"; 

const center = {
    lat: 32.890096421618646,
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
        desc:  `We anticipate offering vaccines next to Veterans less than 65 years of age with 
        three or more high-risk conditions. We will open vaccinations to other eligible groups as more vaccine becomes available.
        COVID-19 vaccines may be available at non-VA sites and are generally without cost to the recipient. 
        However, please note, because 2nd dose vaccines are being sent to the same place as where each person 
        gets their 1st dose, you must get your 2nd dose from the same source as your 1st (except under very rare circumstances). 
        This will ensure 2nd dose vaccines are available for Veterans who were previously vaccinated at the VA San 
        Diego Healthcare System. As with most services and care we provide, we are unable to administer vaccinations 
        to unenrolled spouses and other family members.`, 
        link: "https://www.sandiego.va.gov/", 
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
        desc:  `Scripps Memorial Hospital, La Jolla has been providing quality clinical and surgical services since 1924. 
        For over 90 years, Scripps Memorial Hospital has been recognized as a premier medical center for quality 
        patient care and a wide array of medical services. An intensive care unit, cancer care, orthopedic services, 
        as well as women’s health care, including OB-GYN and labor and delivery services, are just a portion of what 
        Scripps Memorial has to offer. This nationally recognized Southern California hospital also provides a Level 
        II Trauma center and 24-hour emergency services.`, 
        link: "https://scrippsamg.com/hospital/scripps-memorial-hospital-la-jolla/", 
        hour: "Open: 2:00 PM - 6:00 PM"
    }, 
    {
        lat: 32.97392140244049, 
        lng: -117.25652661547099, 
        name: "North Coastal – Scripps Del Mar Fairgrounds Park Super Station", 
        desc:  `The Scripps Del Mar Fairgrounds Vaccination Super Station, which will be located at 
        2260 Jimmy Durante Blvd., will provide drive-through and walk-through services on an 
        appointment-only basis to anyone eligible to receive a shot under County of San Diego guidelines. `, 
        link: "https://www.scripps.org/news_items/7153-covid-vaccination-super-station-at-del-mar-fairgrounds-opening-friday", 
        hour: "Open: 8:00 AM - 12:00 PM"
    }, 
    {
        lat: 32.80994447572534, 
        lng: -117.15042720349678, 
        name: "San Diego Rady Children's Hospital", 
        desc:  `Since Rady Children’s first opened its doors in 1954, our mission has been “to restore, 
        sustain and enhance the health and developmental potential of children through excellence in care, 
        education, research and advocacy.” Our goal is to help create a region where all children can go to 
        school healthy and ready to learn how to be productive, responsible citizens. Today’s children are 
        tomorrow’s leaders. `, 
        link: "https://www.rchsd.org/", 
        hour: "Open: 7:00 AM - 3:00 PM"
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
                    defaultZoom={12}
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
