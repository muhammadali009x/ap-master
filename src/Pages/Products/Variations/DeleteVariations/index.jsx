import { useHistory } from "react-router";
import Popup from "./Popup";
export default function DeleteVariations({ location }) {
    const history = useHistory()
    let params = new URLSearchParams(location.search);

    if (params.get("variationsId") === "") history.push(window.location.pathname)
    return (
        params.get("DeleteVariations") && (
            <Popup isTrue={
                params.get("DeleteVariations") ? true : false
            }
                product_id={params.get("variationsId")}
            />
        )
    )
}