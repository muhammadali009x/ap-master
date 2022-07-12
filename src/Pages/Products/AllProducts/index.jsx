import DataTable from "./DataTable";
import { Link, useRouteMatch } from "react-router-dom"
export default function Products() {
    let { path, url } = useRouteMatch();
    return (
        <>
            <DataTable />
        </>
    )
}