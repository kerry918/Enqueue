import React from 'react'; 
import useStyles from './LandingPage.jss'; 

import { Button } from '@material-ui/core';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import TouchAppIcon from '@material-ui/icons/TouchApp';

import vaccineImg from '../../Assets/Images/pic1.jpg'; 
import virusImg from '../../Assets/Images/pic2.jpg'; 
import covidImg from '../../Assets/Images/pic3.jpg'; 
import worldImg from '../../Assets/Images/pic4.jpg'; 

export default function LandingPage(props) {
    const classes = useStyles(); 

    const setAuthenticated = (e) => {
        props.setAuthenticated(e)
    }

    return (
        <div className={classes.root}>
            <p align="center" className={classes.titleText}>enqueue<TouchAppIcon fontSize="large"/></p>
            <p align="center" className={classes.descText}>
            Immunizations, also known as vaccinations, help protect you from getting an infectious disease. 
            An overwhelming majority of health professionals and medical researchers recommend immunization. Getting immunized is important for at least 
            two reasons: to protect yourself and to protect those around you. Vaccines are the best 
            way we have to prevent infectious disease. A successful immunization program depends on the 
            co-operation of every person.
            </p>
            <p align="center">
                <Button onClick={() => setAuthenticated(true)} size="large" className={classes.button}>Sign up<ArrowRightAltIcon/></Button>
            </p>
            <img src={vaccineImg} className={classes.img1}/>
            <img src={virusImg} className={classes.img2}/>
            <img src={covidImg} className={classes.img3}/>
            <img src={worldImg} className={classes.img4}/>
        </div>
    )
}
