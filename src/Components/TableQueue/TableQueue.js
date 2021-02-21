import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { Button, Typography } from '@material-ui/core';
import useStyles from './TableQueue.jss.js'; 

import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const columns = [
  { field: 'id', headerName: 'Queue Position', width: 150, type: 'number', align: 'center'},
  { field: 'name', headerName: 'Name', width: 350, align: 'left'},
  { field: 'email', headerName: 'Email', width: 350, align: 'left' },
  {
    field: 'identity',
    headerName: 'Identity',
    width: 300,
    align: 'left'
  }, 
  { field: 'waitTime', headerName: 'Estimated Time (min)', width: 200, type: 'number', align: 'center'}
];

const rows = [
  { id: 1, name: 'John Smith', email: 'johnsmith.abc.xyz', identity: 'General Public', waitTime: 5 },
  { id: 2, name: 'Mary Doe', email: 'marydoe.abc.xyz', identity: 'Healthcare Worker', waitTime: 10 },
  { id: 3, name: 'Mitzi Troia', email: 'mitzitroia.abc.xyz', identity: 'Student', waitTime: 15 },
  { id: 4, name: 'Hellen Horvath', email: 'hellenhorvath.abc.xyz', identity: 'General Public', waitTime: 20},
  { id: 5, name: 'Bud Norris', email: 'budnorris.abc.xyz', identity: 'General Public', waitTime: 25 },
  { id: 6, name: 'Felipe Smithers', email: 'felipesmithers.abc.xyz', identity: 'General Public', waitTime: 30 },
  { id: 7, name: 'Elba Baugh', email: 'elbabaugh.abc.xyz', identity: 'Healthcare Worker', waitTime: 35 },
  { id: 8, name: 'Marion Pena', email: 'marionpena.abc.xyz', identity: 'General Public', waitTime: 40},
  { id: 9, name: 'Vicky Hain', email: 'vickyhain.abc.xyz', identity: 'General Public', waitTime: 45},
  { id: 10, name: 'Asha Bigger', email: 'ashabigger.abc.xyz', identity: 'General Public', waitTime: 50 },
  { id: 11, name: 'Galen Jhonson', email: 'galenjhonson.abc.xyz', identity: 'General Public', waitTime: 55 },
  { id: 12, name: 'Daryl Bowie', email: 'darylbowie.abc.xyz', identity: 'Student', waitTime: 60 },
  { id: 13, name: 'Sonia Staller', email: 'soniastaller.abc.xyz', identity: 'General Public', waitTime: 65 },
  { id: 14, name: 'Altha Cella', email: 'althacella.abc.xyz', identity: 'Healthcare Worker', waitTime: 70 },
  { id: 15, name: 'Zoe Serrao', email: 'zoeserrao.abc.xyz', identity: 'General Public', waitTime: 75},
];

export default function TableQueue(props) {
    const classes = useStyles(); 
    return (
            <div className={classes.root}>
                <Button href="/" startIcon={<ArrowBackIcon />}>Back to Main</Button> 
                <Button href="/map" startIcon={<ArrowBackIcon />}>Back to Map</Button>
                <Typography align="left" variant="h2" className={classes.titleText}>
                    RIMAC Vaccination Site{props.siteName} <LocalHospitalIcon fontSize="large"/>
                </Typography>
                <Typography align="left" variant="h5" className={classes.timeText}>Hours of Operation: 2:00PM to 6:00PM {props.opTime}</Typography>
                <div style={{ width: '100%' }}>
                    <DataGrid rows={rows} columns={columns} pageSize={10} checkboxSelection autoHeight="true"/>
                </div>
            </div>
    );
}





