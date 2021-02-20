import React from 'react'; 
import useStyles from './LandingPage.jss'; 

export default function LandingPage() {
    const classes = useStyles(); 

    return (
        <div className={classes.root}>
            <h1> Landing Page </h1>
        </div>
    )
}
