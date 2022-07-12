import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        margin: "3rem"
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default function Report() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={6}>
                <Grid item xs={4}>
                    <Paper className={classes.paper}>
                        <Grid container item xs={12} spacing={3}>

                            {/* Headings */}
                            <Grid item xs={4}>
                                Sales
                            </Grid>
                            <Grid item xs={4}>
                                Tax
                            </Grid>
                            <Grid item xs={4}>
                                Earnings
                            </Grid>

                            {/* Data */}
                            <Grid item xs={4}>
                                840 SR
                            </Grid>
                            <Grid item xs={4}>
                                126 SR
                            </Grid>
                            <Grid item xs={4}>
                                714 SR
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper className={classes.paper}>

                        <Grid container item xs={12}>
                            <Grid item xs={6}>
                                item
                            </Grid>
                            <Grid item xs={6}>
                                item
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item xs={2}>
                    <Paper className={classes.paper}>
                        <Grid container item xs={4} spacing={3}>
                            <Grid item xs={4}>
                                item
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>


                <Grid item xs={6}>
                    <Paper className={classes.paper}>xs=6</Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>xs=6</Paper>
                </Grid>
            </Grid>
        </div>

    );
}
