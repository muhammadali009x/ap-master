import { useHistory } from "react-router";
import Popup from "./Popup";
export default function DeleteUnit({ location }) {
    const history = useHistory()
    let params = new URLSearchParams(location.search);

    if (params.get("unitId") === "") history.push(window.location.pathname)
    return (
        params.get("DeleteUnit") && (
            <Popup isTrue={
                params.get("DeleteUnit") ? true : false
            }
                product_id={params.get("unitId")}
            />
        )
    )
}