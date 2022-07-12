import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import "../../App.css"

const useStyles = makeStyles((theme) => ({
    reports: {
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        margin: "1rem",
        fontWeight: "bold",
        textAlign: "center",
        color: "#000000"
    },
    dataItems: {
        marginTop: "2rem"
    }
}));

export default function AllOrders({lang_mode}) {
    const classes = useStyles();
    return (

        <div className={classes.reports}>
            <div>{lang_mode[2]}</div>
            <div className={classes.dataItems}>800</div>
        </div>


    );
}
