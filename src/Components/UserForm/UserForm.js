import React, { useState } from 'react'; 
import { Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import useStyles from "./UserForm.jss";

export default function UserForm(props) {
    // Required props: time range
    /* vvvvv placeholder info vvvvv */

    /* ^^^^^ placeholder info ^^^^^ */
    const classes = useStyles();
    const { timeSelected } = props;

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNum, setPhoneNum] = useState("");
    const [identity, setIdentity] = useState(0);
    
    const setTimeSelected = (e) => {
        props.setTimeSelected(e)
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();

        /* PUSH TO BACKEND HERE */
        alert(`Submitted info\nFirst Name: ${firstName}\nLast Name: ${lastName}\nEmail: ${email}\nPhone Number:${phoneNum}\nIdentity: ${identity}`)
    }

    return (
        <div>
            <div className={classes.cardFormTitle}>
                <Typography variant="h5"><strong>{ timeSelected }</strong></Typography>
                <Typography variant="h6">Please fill in your information.</Typography>
            </div>
            <div className={classes.cardFormBody}>
                <form onSubmit={handleFormSubmit}>
                    <div className={classes.cardFormFields}>
                        <TextField
                            id="firstName"
                            label="First Name"
                            placeholder="John"
                            variant="outlined"
                            className={classes.cardFormField}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={({ target: { value }}) => setFirstName(value)}
                        />
                        <TextField
                            id="lastName"
                            label="Last Name"
                            placeholder="Doe"
                            variant="outlined"
                            className={classes.cardFormField}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={({ target: { value }}) => setLastName(value)}
                        />
                        <TextField
                            id="email"
                            label="Email"
                            placeholder="Enter here..."
                            variant="outlined"
                            className={classes.cardFormField}
                            style= {{ minWidth: 400 }}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={({ target: { value }}) => setEmail(value)}
                        />
                        <TextField
                            id="phone"
                            label="Phone #"
                            placeholder="Enter here..."
                            variant="outlined"
                            className={classes.cardFormField}
                            style= {{ minWidth: 300 }}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={({ target: { value }}) => setPhoneNum(value)}
                        />
                        <FormControl 
                            id="identity"
                            variant="outlined" 
                            className={classes.cardFormField} 
                            style= {{ minWidth: 260 }}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={({ target: { value }}) => setIdentity(value)}
                        >
                            <InputLabel>Identity</InputLabel>
                            <Select label="Identity">
                                <MenuItem value={0}>General Public</MenuItem>
                                <MenuItem value={1}>Healthcare Worker</MenuItem>
                                <MenuItem value={2}>Immuno-Compromised</MenuItem>
                                <MenuItem value={3}>Elderly (65+)</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <Typography>
                        Remember to bring appropriate documentation to the vaccination site.
                    </Typography>
                    <div className={classes.cardFormButtons}>
                        <Button onClick={() => setTimeSelected(null)} size="medium" color="default" startIcon={<ArrowBackIcon />}>
                            Back
                        </Button>
                        <Button variant="contained" size="large" color="primary" type="submit">
                            Submit
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    )
}
