import React from 'react';
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

export default function Report({ lang_mode }) {
    const classes = useStyles();
    const temp_arr = [
        "800 SR",
        "700 SR",
        "600 SR",
    ]
    return (
        <>
            <div className={classes.reports}>
                <div>{lang_mode[0]}</div>
                <div className={classes.dataItems}>{temp_arr[0]}</div>
            </div>
            <div className={classes.reports}>
                <div>{lang_mode[1]}</div>
                <div className={classes.dataItems}>{temp_arr[1]}</div>
            </div>
            <div className={classes.reports}>
                <div>{lang_mode[2]}</div>
                <div className={classes.dataItems} style={{ color: "#37dd97" }}>{temp_arr[2]}</div>
            </div>
        </>
    );
}
