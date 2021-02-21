import React from 'react'; 
import SiteCard from "../SiteCard/SiteCard";

import { Button } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import useStyles from './MainPage.jss'

export default function LandingPage() {
    const classes = useStyles(); 

    return (
        <div className={classes.root}>
            <Button href="/" startIcon={<ArrowBackIcon />}>Back to Main</Button>
            <h1>Main Page Placeholder</h1>
            <SiteCard/>
        </div>
    )
}
