import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { lighten, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList';
import { Link } from "react-router-dom"
import rowValues from "./dataRows"
import { useSelector } from "react-redux"

function createData(image, sku, productName, status, stock, price, category, date) {
    return { image, sku, productName, status, stock, price, category, date };
}

let rows = []
function dataValues() {
    rowValues.map((val) => {
        const { image, sku, productName, status, stock, price, category, date } = val;
        rows.push(createData(image, sku, productName, status, stock, price, category, date))
    })
}
dataValues()

function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function getComparator(order, orderBy) {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) return order;
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}


function EnhancedTableHead(props) {
    const { classes, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
    };
    const lang_mode = useSelector(state => state.Languages.default.products.all_products.row_titles)

    const headCells = [
        { id: 'image', numeric: false, disablePadding: true, label: lang_mode[0] },
        { id: 'sku', numeric: false, disablePadding: false, label: lang_mode[1] },
        { id: 'productName', numeric: false, disablePadding: false, label: lang_mode[2] },
        { id: 'status', numeric: false, disablePadding: false, label: lang_mode[3] },
        { id: 'stock', numeric: false, disablePadding: false, label: lang_mode[4] },
        { id: 'price', numeric: false, disablePadding: false, label: lang_mode[5] },
        { id: 'category', numeric: false, disablePadding: false, label: lang_mode[6] },
        { id: 'date', numeric: false, disablePadding: false, label: lang_mode[7] },
    ];
    return (
        <TableHead>
            <TableRow>
                <TableCell padding="checkbox">
                    <Checkbox
                        indeterminate={numSelected > 0 && numSelected < rowCount}
                        checked={rowCount > 0 && numSelected === rowCount}
                        onChange={onSelectAllClick}
                        inputProps={{ 'aria-label': 'select all desserts' }}
                    />
                </TableCell>
                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align={headCell.numeric ? 'right' : 'left'}
                        padding={headCell.disablePadding ? 'none' : 'normal'}
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : 'asc'}
                            onClick={createSortHandler(headCell.id)}
                        >
                            {headCell.label}
                            {orderBy === headCell.id ? (
                                <span className={classes.visuallyHidden}>
                                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                </span>
                            ) : null}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

EnhancedTableHead.propTypes = {
    classes: PropTypes.object.isRequired,
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
};

const useToolbarStyles = makeStyles((theme) => ({
    root: {
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(1),
    },
    highlight:
        theme.palette.type === 'light'
            ? {
                color: theme.palette.secondary.main,
                backgroundColor: lighten(theme.palette.secondary.light, 0.85),
            }
            : {
                color: theme.palette.text.primary,
                backgroundColor: theme.palette.secondary.dark,
            },
    title: {
        flex: '1 1 100%',
    },
}));

const EnhancedTableToolbar = (props) => {
    const classes = useToolbarStyles();
    const { numSelected } = props;
    const lang_mode = useSelector(state => state.Languages.default.products.all_products.others[0])

    return (
        <Toolbar
            className={clsx(classes.root, {
                [classes.highlight]: numSelected > 0,
            })}
        >
            {numSelected > 0 ? (
                <Typography className={classes.title} color="inherit" variant="subtitle1" component="div">
                    {numSelected} {lang_mode}
                </Typography>
            ) : ("")
            }

            {numSelected > 0 ? (
                <Tooltip title="Delete">
                    <IconButton aria-label="delete">
                        <DeleteIcon />
                    </IconButton>
                </Tooltip>
            ) : (
                <Tooltip title="Filter list">
                    <IconButton aria-label="filter list">
                        <FilterListIcon />
                    </IconButton>
                </Tooltip>
            )}
        </Toolbar>
    );
};

EnhancedTableToolbar.propTypes = {
    numSelected: PropTypes.number.isRequired,
};

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    paper: {
        width: '100%',
        marginBottom: theme.spacing(2),
    },
    table: {
        minWidth: 750,
    },
    visuallyHidden: {
        border: 0,
        clip: 'rect(0 0 0 0)',
        height: 1,
        margin: -1,
        overflow: 'hidden',
        padding: 0,
        position: 'absolute',
        top: 20,
        width: 1,
    },
    tableRow: {
        backgroundColor: "#fff5f5",
        marginTop: "1rem",
        border: "transparent"
    },
    emptyimage: {
        width: 50,
        height: 50,
        backgroundColor: "#bebebe",
        borderRadius: "0.5rem"
    },
    rowImages: {
        borderRadius: "0.5rem",
        width: 50
    }
}));

export default function DataTable() {
    const classes = useStyles();
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('sku');
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [dense, setDense] = React.useState(false);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const lang_mode = useSelector(state => state.Languages.default.products.all_products)

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelecteds = rows.map((n) => n.sku);
            setSelected(newSelecteds);
            return;
        }
        setSelected([]);
    };

    const handleClick = (event, name) => {
        const selectedIndex = selected.indexOf(name);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, name);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            );
        }

        setSelected(newSelected);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleChangeDense = (event) => {
        setDense(event.target.checked);
    };

    const isSelected = (name) => selected.indexOf(name) !== -1;

    const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

    let onlineStatus = 0;

    const statusChecking = () => {
        rows.map((row) => {
            if (row.status === "online")
                ++onlineStatus;
        })
        return onlineStatus
    }

    return (
        <div className={classes.root}>
            <Typography className={classes.title} variant="h6" id="tableTitle" component="div">
                {lang_mode.heading}
            </Typography>
            <Typography className={classes.title} variant="subtitle1" id="tableTitle" component="a">

                {`${lang_mode.links[0]} (${rows.length})`}
            </Typography>
            <Typography className={classes.title} variant="subtitle1" id="tableTitle" component="a">
                {`${lang_mode.links[1]}`} <span>{`(${statusChecking()})`}</span>
            </Typography>

            <Link
                to={{
                    pathname: `/Products`,
                    search: "?AddProducts=true",
                }}
                style={{ color: "red" }}
            >
                Add New Product
            </Link>
            <Paper className={classes.paper}>
                <EnhancedTableToolbar numSelected={selected.length} />
                <TableContainer>
                    <Table
                        className={classes.table}
                        aria-labelledby="tableTitle"
                        size={dense ? 'small' : 'medium'}
                        aria-label="enhanced table"
                    >
                        <EnhancedTableHead
                            classes={classes}
                            numSelected={selected.length}
                            order={order}
                            orderBy={orderBy}
                            onSelectAllClick={handleSelectAllClick}
                            onRequestSort={handleRequestSort}
                            rowCount={rows.length}
                        />
                        <TableBody>
                            {stableSort(rows, getComparator(order, orderBy))
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row, index) => {

                                    const isItemSelected = isSelected(row.sku);
                                    const labelId = `enhanced-table-checkbox-${index}`;

                                    return (
                                        <>
                                            <TableRow
                                                hover
                                                onClick={(event) => handleClick(event, row.sku)}
                                                role="checkbox"
                                                aria-checked={isItemSelected}
                                                tabIndex={-1}
                                                key={row.sku}
                                                selected={isItemSelected}
                                                className={classes.tableRow}
                                            >
                                                <TableCell padding="checkbox">
                                                    <Checkbox
                                                        checked={isItemSelected}
                                                        inputProps={{ 'aria-labelledby': labelId }}
                                                    />
                                                </TableCell>
                                                <TableCell>
                                                    {
                                                        !row.image || row.image === "" ?
                                                            <div className={classes.emptyimage}></div>
                                                            :
                                                            <img src={row.image} className={classes.rowImages} />
                                                    }
                                                </TableCell>
                                                <TableCell>{row.sku}</TableCell>
                                                <TableCell>{row.productName}</TableCell>
                                                <TableCell>
                                                    {row.status === "Pending" || row.status === "pending" ?
                                                        <span
                                                            style={{
                                                                backgroundColor: "#797979",
                                                                padding: "0.2rem 1rem",
                                                                borderRadius: "0.2rem",
                                                                color: "#ffffff"
                                                            }}
                                                        >{row.status}</span>
                                                        :
                                                        row.status === "online" || row.status === "Online" ?
                                                            <span
                                                                style={{
                                                                    backgroundColor: "#51c03e",
                                                                    padding: "0.2rem 1rem",
                                                                    borderRadius: "0.2rem",
                                                                    color: "#ffffff"
                                                                }}>{row.status}</span>
                                                            :
                                                            <span
                                                                style={{
                                                                    backgroundColor: "#c70606",
                                                                    padding: "0.2rem 1rem",
                                                                    borderRadius: "0.2rem",
                                                                    color: "#ffffff"
                                                                }}>{row.status}</span>
                                                    }
                                                </TableCell>
                                                <TableCell>{row.stock}</TableCell>
                                                <TableCell>{row.price}</TableCell>
                                                <TableCell>{row.category}</TableCell>
                                                <TableCell>{row.date}</TableCell>
                                                <TableCell>
                                                    <Link
                                                to={
                                                    {
                                                        pathname: "/Products",
                                                        search: `?EditProducts=true&productId=${row.sku}`,

                                                    }}>
                                                {lang_mode.links[3]}
                                            </Link></TableCell>
                                            </TableRow>
                                          
                                        </>
                                    );
                                })}
                            {emptyRows > 0 && (
                                <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                                    <TableCell colSpan={6} />
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
            <FormControlLabel
                control={<Switch checked={dense} onChange={handleChangeDense} />}
                label="Dense padding"
            />
        </div >
    );
}
