import React, { useState } from 'react'; 
import { Divider, Typography } from "@material-ui/core";
import useStyles from "./SiteCard.jss";
import moment from "moment";

import UserForm from "../UserForm/UserForm"
import TimeTable from "../TimeTable/TimeTable"

export default function SiteCard() {
    // Required props: site
    /* vvvvv placeholder info vvvvv */
    const props = {
        site: {
            name: "RIMAC Vaccination Site",
            startTime: new moment({ hour: 14, minute: 0 }),
            endTime: new moment({ hour: 18, minute: 0 }),
        }
    }
    /* ^^^^^ placeholder info ^^^^^ */
    const [timeSelected, setTimeSelected] = useState(null);

    const classes = useStyles();
    const { site } = props

    return (
        <div className={classes.cardContainer}>
            <div className={classes.cardHeader}>
                <Typography variant="h3" style={{fontFamily: 'Andale Mono, monospace'}}>{ site.name }</Typography>
                <Typography variant="h6" style={{fontFamily: 'Andale Mono, monospace'}}>
                    { `Available Hours: ${site.startTime.format("h:mma")} - ${site.endTime.format("h:mma")}` }
                </Typography>
            </div>
            <Divider />
            <div className={classes.cardBody}>
                {
                    (timeSelected) ? 
                    <UserForm timeSelected={timeSelected} setTimeSelected={setTimeSelected} /> : 
                    <TimeTable site={site} setTimeSelected={setTimeSelected} />
                }
            </div>
        </div>
    )
}
