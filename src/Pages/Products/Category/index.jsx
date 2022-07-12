import { Table, Button } from "react-bootstrap"
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux"
import { tableData } from "./tableData"

export const useStyles = makeStyles((theme) => ({
    tableRow: {
        padding: "1rem"
    }
}))

export default function Category() {
    const classes = useStyles();

    const lang_mode = useSelector(state => state.Languages.default.products.unit)
    return (
        <>
            <h3>{lang_mode.main_heading}</h3>
            <span>{lang_mode.sub_heading}</span>
            <Link to={{
                pathname: "/Products/Category",
                search: `?AddCategory=true`,
            }}>
                {lang_mode.buttons[0]}
            </Link>
            <Table striped borderless hover>
                <thead>
                    <tr>
                        <th>{lang_mode.table_heading[0]}</th>
                        <th>{lang_mode.table_heading[1]}</th>
                        <th>{lang_mode.table_heading[2]}</th>
                        <th>{lang_mode.table_heading[3]}</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((val, ind) => {
                        return (
                            <tr className={classes.tableRow} key={ind}>
                                <td>{val.name}</td>
                                <td>{val.short_name}</td>
                                <td>{val.allow_decimal}</td>
                                <td colSpan="3">
                                    <Link
                                        to={{
                                            pathname: "/Products/Category",
                                            search: `?EditCategory=true&categoryId=${ind}`,
                                        }}>
                                        <Button variant="primary" size="sm" style={{ padding: "0.1rem 1rem" }}>
                                            {lang_mode.buttons[1]}
                                        </Button>
                                    </Link>
                                    <Link
                                        to={{
                                            pathname: "/Products/Category",
                                            search: `?DeleteCategory=true&categoryId=${ind}`,
                                        }}>
                                        <Button variant="danger" size="sm" style={{ padding: "0.1rem 1rem", marginLeft: "1rem" }}>
                                            {lang_mode.buttons[2]}
                                        </Button>
                                    </Link>
                                </td>
                            </tr>
                        )

                    })}

                </tbody>
            </Table>
        </>
    )
}