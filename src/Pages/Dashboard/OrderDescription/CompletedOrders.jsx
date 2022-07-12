import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import PopOver from "./PopOvers/OrderPopOver"


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
    completedOrders: {
        backgroundColor: "#f6f6f6",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        flexWrap: "wrap",
        borderRadius: "1rem"

    },
    completedOrdersData: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        flexWrap: "wrap",
        padding: "0 1.7rem"

    },
    ordersTitle: {
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        fontWeight: "bold",
        textAlign: "center",
        color: "#000000"

    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        flex: '1 0 auto',
        margin: theme.spacing(1),
        borderRadius: "0.5rem",
    },
}));

export default function CompletedOrders({lang_mode}) {
    const classes = useStyles();
    let temp = [
        {
            order: 3264,
            status: "Ready",
            time: "01:12"
        },
        {
            order: 3264,
            status: "Ready",
            time: "01:12"
        },
        {
            order: 3264,
            status: "Ready",
            time: "01:12"
        },
    ]
    return (


        <div className={`${classes.reports}`}>
            <div >{lang_mode.orders[1]}</div>
            <hr />

            <div className={`${classes.completedOrders}`}>

                {/* headings */}
                {/* headings */}
                {lang_mode.orders_details.map((val, ind) => {
                    return (
                        <div className={classes.ordersTitle} key={ind}>
                            <div>{val}</div>
                        </div>
                    )
                })}
                {/* values */}
                <Grid item xs={12}>
                    {temp.map((val) => {
                        return (
                            <Paper className={classes.paper}>
                                <div className={`${classes.completedOrdersData}`}>
                                    <div className={classes.ordersTitle}>
                                        <div>
                                            <PopOver order={val.order} />
                                        </div>
                                    </div>
                                    <div className={classes.ordersTitle}>
                                        <div>{val.status}</div>
                                    </div>
                                    <div className={classes.ordersTitle}>
                                        <div>{val.time}</div>
                                    </div>
                                </div>
                            </Paper>

                        )
                    })}
                </Grid>
            </div>
        </div>


    );
}
