import React from 'react';
import { Button } from "@material-ui/core";
import useStyles from "./TimeTable.jss";
import moment from "moment";
import { useEffect } from 'react';

function splitTime(startTime, endTime, interval) {
    const result = [startTime.format("h:mma")];
    let time = startTime.add(interval, "m");
    while (time.isBetween(startTime, endTime, undefined, [])) {
        result.push(time.format("h:mma"));
        time = time.add(interval, "m");
    }
    return result;
}

export default function TimeTable(props) {
    // TODO: pass site through props
    const startTime = new moment({ hour: 14, minute: 0 });
    const endTime = new moment({ hour: 18, minute: 0 });

    const classes = useStyles();

    const setTimeSelected = (time) => {
        props.setTimeSelected(time);
    }

    const interval = 30;
    const timeblocks = splitTime(startTime, endTime, interval);
    const timeblockComponents = [];

    for (let i = 0; i < timeblocks.length - 1; i++) {
        const rangeStr = `${timeblocks[i]} - ${timeblocks[i+1]}`
        timeblockComponents.push(
            <Button key={i} className={classes.timeBlock} onClick={() => setTimeSelected(rangeStr)}>
                { rangeStr }
            </Button>
        )
    }

    return (
        <div className={classes.tableContainer}>
            { timeblockComponents }
        </div>
    )
}
