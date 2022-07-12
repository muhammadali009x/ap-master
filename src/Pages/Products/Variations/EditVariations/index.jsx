import { useHistory } from "react-router";
import Popup from "./Popup";
export default function EditVariations({ location }) {
    const history = useHistory()
    let params = new URLSearchParams(location.search);

    if (params.get("variationsId") === "") history.push(window.location.pathname);
    
    return (
        params.get("EditVariations") && (
            <Popup isTrue={
                params.get("EditVariations") ? true : false
            }
                product_id={params.get("variationsId")}
            />
        )
    )
}