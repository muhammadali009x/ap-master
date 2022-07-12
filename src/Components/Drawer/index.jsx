//#region  imports
import React, { Suspense, useEffect } from 'react';

import AddProductsList from "./AddProductsList";
import pagesname from "./pagesname";
import LanguageSwitches from "../Togglebutton/LanguageSwitches";
import AllRoutes from "./AllRoutes"
import "../../App.css"
import CircularProgress from "../../Components/ProgressBars/CircularProgress"

//#region material-ui
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@mui/material/Collapse';
import ListItemButton from '@mui/material/ListItemButton';
//#endregion

//#region react-router
import { Link, useRouteMatch } from "react-router-dom";
//#endregion


//#endregion

const drawerWidth = 220;
const useStyles = makeStyles((theme) => ({
    '@global': {
        '*::-webkit-scrollbar': {
            width: '0.4em'
        },
        '*::-webkit-scrollbar-track': {
            '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
        },
        '*::-webkit-scrollbar-thumb': {
            backgroundColor: '#5d5d5d',
            outline: '1px solid slategrey'
        }
    },
    root: {
        display: 'flex',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        backgroundColor: "transparent"
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    title1: {
        flexGrow: 1,
        color: "#000",
        fontWeight: "bold"
    },
    title2: {
        flexGrow: 1.5,
        color: "#000",
        fontWeight: "bold",
        // marginRight: "10rem"
    },
    menuButton: {
        marginRight: theme.spacing(2),
        color: "#000",
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
        backgroundColor: "#fff",
    },
    drawerList: {
        borderRadius: "1rem",
        backgroundColor: "#151515",
        margin: "0 0.5rem",
        overflowY: "auto",
        padding: 0,
        listStyle: "none",
        height: "100%",
        '&::-webkit-scrollbar': {
            width: '0.4em'
        },
        '&::-webkit-scrollbar-track': {
            boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
            webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)'
        },
        '&::-webkit-scrollbar-thumb': {
            backgroundColor: 'rgba(0,0,0,.1)',
            outline: '1px solid slategrey'
        }
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
        marginTop: "1rem"
    },
    drawerHeading: {
        color: "#202020",
        padding: "2rem",
        width: drawerWidth,
        position: " absolute",
        wordWrap: "break-word"
    },
    content: {
        marginLTop: "1rem",
        flexGrow: 1,
        padding: theme.spacing(3),
        backgroundColor: "#ffff",
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth + 30,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
        marginLTop: "1rem",
    },
    Link: {
        textDecoration: "none",
    },
    firstLink: {
        textDecoration: "none",
        color: "#ffffff",
        "& span": {
            color: "#ffffff"
        }
    },
    LinkListItem: {
        fontSize: "1rem",
        fontFamily: [
            'Roboto',
            '"Helvetica"',
            'Arial',
            'sans-serif',
        ].join(','),
        lineHeight: "1.5",
        marginLeft: "1rem",
        letterSpacing: "0.00938em",
        color: "#5d5d5d",
        textDecoration: "none",
        "& span": {
            fontWeight: "600",
        }
    },
    listItemSupport: {
        marginTop: "7rem"
    },
    ListItemText: {
        color: "#5d5d5d"
    },
    dvLoading: {
        display: "flex",
        justifyContent: "center",
        margin: "15rem auto",
    }
}));

export default function DrawerPage() {

    //#region Const Valriables
    const classes = useStyles();

    const theme = useTheme();
    const [open, setOpen] = React.useState(true);
    const [dropDown_open, setdropDown_open] = React.useState(false);

    let setstyle_product_dropdown = {
        backgroundColor: "#e1f21f",
        borderRadius: "0.5rem",
        maxWidth: "8rem",
        padding: "0.2rem 0",
        textAlign: "center",
        color: "#000000",
    }

    useEffect(() => {
        try {
            const drawerChilds = document.getElementById("drawer");
            drawerChilds.firstChild.style.border = "none";
        }
        catch { }
    }, [open])

    const handleClick = () => {
        setdropDown_open(!dropDown_open);
    };

    //#endregion

    //#region handles
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };
    //#endregion

    return (
        <div className={classes.root}>

            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
                style={{ boxShadow: "none" }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, open && classes.hide)}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <CssBaseline />
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                id="drawer"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <h5 className={classes.drawerHeading}>Welcome, Vendor </h5>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon style={{ color: "#000" }} /> : <ChevronRightIcon />}
                    </IconButton>
                </div>
                <List className={classes.drawerList} >
                    <br />
                    {pagesname.map((text, index) => {
                        return (
                            text !== "Products" ?
                                <>
                                    <Link key={index} className={classes.Link}
                                        to={
                                            text === "Dashboard" ? "" :
                                                `/${text.replaceAll(" ", "")}`
                                        }
                                    >
                                        {
                                            text === "Support" ?

                                                <ListItem button
                                                    className={`${classes.LinkListItem} ${classes.listItemSupport}`}
                                                    id={text}>
                                                    <ListItemText primary={text}
                                                        className={classes.ListItemText}
                                                    />
                                                </ListItem>
                                                :
                                                <ListItem button className={classes.LinkListItem} id={text}>
                                                    <ListItemText primary={text}
                                                        className={classes.ListItemText}
                                                    />
                                                </ListItem>
                                        }
                                    </Link>

                                </>
                                :
                                <>
                                    <List>
                                        <Link to="/Products" className={classes.Link}>
                                            <ListItem button key={text}
                                                className={classes.ListLinkItem}
                                                id={text.replaceAll(" ", "")}
                                                onClick={handleClick}>
                                                <ListItemText className={classes.LinkListItem} primary={text}
                                                    style={!dropDown_open ? null : setstyle_product_dropdown}
                                                >
                                                </ListItemText>
                                            </ListItem>
                                        </Link>
                                        <Collapse in={dropDown_open} timeout="auto" unmountOnExit>
                                            <List component="div" disablePadding>
                                                {
                                                    AddProductsList.map((val, ind) => (
                                                        <>
                                                            {
                                                                <Link
                                                                    className={val !== "All Products" ? classes.Link : classes.firstLink}
                                                                    key={ind}
                                                                    id={val.replaceAll(" ", "")}
                                                                    to={val === "All Products" ? "/Products" :
                                                                        val === "Add Products" ?

                                                                            {
                                                                                pathname: "/Products",
                                                                                search: `?${val.replaceAll(" ", "")}=true`,
                                                                            }
                                                                            :
                                                                            `/Products/${val.replaceAll(" ", "")}`

                                                                    }
                                                                    onClick={
                                                                        () => {
                                                                            const this_id = document.getElementById(val.replaceAll(" ", ""))
                                                                            this_id.firstChild.firstChild.firstChild.style.color = "#ffffff";
                                                                            const otherChildLists = AddProductsList.filter((value) => value !== val);
                                                                            otherChildLists.map((this_val) => {
                                                                                document.getElementById(this_val.replaceAll(" ", ""))
                                                                                    .firstChild.firstChild.firstChild.style.color = "#5d5d5d"
                                                                            })

                                                                        }
                                                                    }
                                                                >
                                                                    <ListItemButton sx={{ pl: 4, color: "#676767" }} >
                                                                        <ListItemText primary={val} className={classes.LinkListItem} id={val.replaceAll(" ", "")} />
                                                                    </ListItemButton>
                                                                </Link>
                                                            }
                                                        </>
                                                    ))
                                                }
                                            </List>
                                        </Collapse>
                                    </List>
                                </>
                        )
                    }
                    )}

                    <LanguageSwitches />
                </List>
            </Drawer>
            <main
                className={clsx(classes.content, {
                    [classes.contentShift]: open,
                })}
            >
                <Suspense fallback={
                    <div className={classes.dvLoading}>
                        <CircularProgress />
                    </div>
                }>
                    <AllRoutes />
                </Suspense>
            </main>
        </div>
    );
}
