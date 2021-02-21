import React from 'react'; 
import SiteCard from "../SiteCard/SiteCard";

import { Button } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import useStyles from './MainPage.jss'; 
 
import vaccineImg from '../../Assets/Images/vaccine.jpg'; 
import virusImg from '../../Assets/Images/virus.jpg'; 

export default function LandingPage() {
    const classes = useStyles(); 

    return (
        <div className={classes.root}>
            <Button href="/" startIcon={<ArrowBackIcon />}>Back to Main</Button>
            <h1>Main Page Placeholder</h1>
            <SiteCard/>
            <img src={vaccineImg} className={classes.img1}/>
            <img src={virusImg} className={classes.img2}/>
        </div>
    )
}
