import { useHistory } from "react-router";
import Popup from "./Popup";
export default function EditUnit({ location }) {
    const history = useHistory()
    let params = new URLSearchParams(location.search);

    if (params.get("unitId") === "") history.push(window.location.pathname)
    return (
        params.get("EditUnit") && (
            <Popup isTrue={
                params.get("EditUnit") ? true : false
            }
                product_id={params.get("unitId")}
            />
        )
    )
}