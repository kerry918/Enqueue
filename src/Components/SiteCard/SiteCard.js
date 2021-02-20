import React, { useState } from 'react'; 
import { Divider, Typography } from "@material-ui/core";
import useStyles from "./SiteCard.jss";

import UserForm from "../UserForm/UserForm"
import TimeTable from "../TimeTable/TimeTable"

export default function SiteCard() {
    // Required props: site
    /* vvvvv placeholder info vvvvv */
    const props = {
        site: {
            name: "RIMAC Vaccination Site",
            startTime: "2:00pm",
            endTime: "6:00pm",
        }
    }
    /* ^^^^^ placeholder info ^^^^^ */
    const [timeSelected, setTimeSelected] = useState(null);

    const classes = useStyles();
    const { name, startTime, endTime } = props.site

    return (
        <div className={classes.cardContainer}>
            <div className={classes.cardHeader}>
                <Typography variant="h3">{ name }</Typography>
                <Typography variant="h6">
                    { `Available Hours: ${startTime} - ${endTime}` }
                </Typography>
            </div>
            <Divider />
            <div className={classes.cardBody}>
                {
                    (timeSelected) ? 
                    <UserForm timeSelected={timeSelected} setTimeSelected={setTimeSelected} /> : 
                    <TimeTable setTimeSelected={setTimeSelected} />
                }
            </div>
        </div>
    )
}
