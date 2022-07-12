import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import "../../App.css"

const useStyles = makeStyles((theme) => ({

    orderStatus: {
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


export default function OrderShortStatus({ lang_mode }) {
    const classes = useStyles();
    const temp_arr = [
        "800",
        "700",
    ]
    return (
        <>
            <div className={classes.orderStatus}>
                <div >{lang_mode[0]}</div>
                <div className={classes.dataItems}>{temp_arr[0]}</div>
            </div>
            <div className={classes.orderStatus}>
                <div >{lang_mode[1]}</div>
                <div className={classes.dataItems}>{temp_arr[1]}</div>
            </div>
        </>


    );
}
