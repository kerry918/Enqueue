import React from 'react'; 
import SiteCard from "../SiteCard/SiteCard";

import { Button } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

export default function LandingPage() {
    return (
        <div>
            <Button href="/" startIcon={<ArrowBackIcon />}>Back to Main</Button>
            <h1>Main Page Placeholder</h1>
            <SiteCard />
        </div>
    )
}
