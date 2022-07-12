
import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 240;
export const UseStyles = makeStyles((theme) => ({
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
        backgroundColor: "#151515",
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        marginLTop: "1rem",
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
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
        // padding: "2rem"
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
        color: "#fff",
        letterSpacing: "0.00938em",
        fontWeight: "400",
        color: "#5d5d5d",
        textDecoration: "none"
    },
    ListItemText: {
        color: "#5d5d5d"
    },
    dvLoading: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        margin: "12rem auto",
    }
}));
export default UseStyles