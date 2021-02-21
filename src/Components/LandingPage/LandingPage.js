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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
                velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
            <p align="center">
<<<<<<< HEAD
                <Button href="/map" size="large" className={classes.button}>Sign up<ArrowRightAltIcon/></Button>
=======
                <Button onClick={() => setAuthenticated(true)} size="large" className={classes.button}>Sign up<ArrowRightAltIcon/></Button>
>>>>>>> a29f78c98594fc1074cba8bf5369b4019c90816d
            </p>
            <img src={vaccineImg} className={classes.img1}/>
            <img src={virusImg} className={classes.img2}/>
            <img src={covidImg} className={classes.img3}/>
            <img src={worldImg} className={classes.img4}/>
        </div>
    )
}
