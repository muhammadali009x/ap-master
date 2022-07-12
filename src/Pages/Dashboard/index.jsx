
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import DetailedActiveOrders from "./OrderDescription/ActiveOrders";
import CompletedOrders from "./OrderDescription/CompletedOrders";

import OrderShortStatus from "./OrderShortStatus";
import Report from "./Report";
import AllOrders from "./AllOrders";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        height: '100vh'
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        flex: '1 0 auto',
        margin: theme.spacing(1),
        borderRadius: "0.5rem",
    },
    dvTop: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    dvBottom: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    topCharts: {
        backgroundColor: "#f6f6f6",
        margin: "1rem",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        flexWrap: "wrap",
        borderRadius: "1rem",
        flex: 3,
        boxShadow: "0px 6px 6px -3px rgb(0 0 0 / 20%), 0px 10px 14px 1px rgb(0 0 0 / 14%), 0px 4px 18px 3px rgb(0 0 0 / 12%)"
    },
    topCharts3: {
        backgroundColor: "#f6f6f6",
        margin: "1rem",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        flexWrap: "wrap",
        borderRadius: "1rem",
        flex: 1,
        boxShadow: "0px 6px 6px -3px rgb(0 0 0 / 20%), 0px 10px 14px 1px rgb(0 0 0 / 14%), 0px 4px 18px 3px rgb(0 0 0 / 12%)"
    },
    ordersChart: {
        backgroundColor: "#f6f6f6",
        margin: "1rem",
        display: "flex",
        flex: 3,
        flexDirection: "column",
        justifyContent: "flex-start",
        flexWrap: "wrap",
        borderRadius: "1rem",
        boxShadow: "0px 6px 6px -3px rgb(0 0 0 / 20%), 0px 10px 14px 1px rgb(0 0 0 / 14%), 0px 4px 18px 3px rgb(0 0 0 / 12%)"
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
    reports: {
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        margin: "1rem",
        fontWeight: "bold",
        textAlign: "center",
        color: "#000000"
    },
    ordersTitle: {
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        fontWeight: "bold",
        textAlign: "center",
        color: "#000000"

    },
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

export default function Dashboard() {
    const classes = useStyles();
    const lang_mode = useSelector(state => state.Languages.default.dashboard)
    return (
        <div className="container-xxl">

            <div className={classes.dvTop}>
                <div className={`${classes.topCharts}`}>
                    <Report lang_mode={lang_mode.reports} />
                </div>

                <div className={`${classes.topCharts}`}>
                    <OrderShortStatus lang_mode={lang_mode.orders} />
                </div>

                <div className={`${classes.topCharts3}`}>
                    <AllOrders lang_mode={lang_mode.orders}/>
                </div>
            </div>

            <div className={classes.dvBottom}>
                <div className={`${classes.ordersChart}`}>
                    <DetailedActiveOrders lang_mode={lang_mode}/>
                </div>
                <div className={`${classes.ordersChart}`}>
                    <CompletedOrders lang_mode={lang_mode}/>
                </div>
            </div>

        </div>
    )
}
Dashboard.propTypes = {
    width: PropTypes.oneOf(['lg', 'md', 'sm', 'xl', 'xs']).isRequired,
};
