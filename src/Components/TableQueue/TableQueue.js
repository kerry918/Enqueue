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
    width: 400,
    align: 'left'
  }
];

const rows = [
  { id: 1, name: 'John Smith', email: 'johnsmith.abc.xyz', identity: 'General Public' },
  { id: 2, name: 'Mary Doe', email: 'marydoe.abc.xyz', identity: 'Healthcare Worker' },
  { id: 3, name: 'Mitzi Troia', email: 'mitzitroia.abc.xyz', identity: 'Student' },
  { id: 4, name: 'Hellen Horvath', email: 'hellenhorvath.abc.xyz', identity: 'General Public' },
  { id: 5, name: 'Bud Norris', email: 'budnorris.abc.xyz', identity: 'General Public' },
  { id: 6, name: 'Felipe Smithers', email: 'felipesmithers.abc.xyz', identity: 'General Public' },
  { id: 7, name: 'Elba Baugh', email: 'elbabaugh.abc.xyz', identity: 'Healthcare Worker' },
  { id: 8, name: 'Marion Pena', email: 'marionpena.abc.xyz', identity: 'General Public' },
  { id: 9, name: 'Vicky Hain', email: 'vickyhain.abc.xyz', identity: 'General Public' },
  { id: 10, name: 'Asha Bigger', email: 'ashabigger.abc.xyz', identity: 'General Public' },
  { id: 11, name: 'Galen Jhonson', email: 'galenjhonson.abc.xyz', identity: 'General Public' },
  { id: 12, name: 'Daryl Bowie', email: 'darylbowie.abc.xyz', identity: 'Student' },
  { id: 13, name: 'Sonia Staller', email: 'soniastaller.abc.xyz', identity: 'General Public' },
  { id: 14, name: 'Altha Cella', email: 'althacella.abc.xyz', identity: 'Healthcare Worker' },
  { id: 15, name: 'Zoe Serrao', email: 'zoeserrao.abc.xyz', identity: 'General Public' },
];

export default function TableQueue(props) {
    const classes = useStyles(); 
    return (
            <div className={classes.root}>
                <Button href="/" startIcon={<ArrowBackIcon />}>Back to Main</Button>
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





