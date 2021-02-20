import React from 'react';
import { Button } from "@material-ui/core";
import useStyles from "./TimeTable.jss";

export default function TimeTable(props) {
    const setTimeSelected = (time) => {
        props.setTimeSelected(time);
    }

    return (
        <div>
            <h1> PLACEHOLDER TIME TABLE </h1>
            <Button onClick={() => setTimeSelected("2:00pm - 3:00pm")}>
                2-3pm
            </Button>
            <Button onClick={() => setTimeSelected("3:00pm - 4:00pm")}>
                3-4pm
            </Button>
            <Button onClick={() => setTimeSelected("4:00pm - 5:00pm")}>
                4-5pm
            </Button>
        </div>
    )
}
