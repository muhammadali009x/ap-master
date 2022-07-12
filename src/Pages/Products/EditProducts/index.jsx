import { useHistory } from "react-router";
import Popup from "./Popup";
export default function EditProducts({ location }) {
    const history = useHistory()
    let params = new URLSearchParams(location.search);

    if (params.get("productId") === "") history.push(window.location.pathname)
    return (
        params.get("EditProducts") && (
            <Popup modal={
                params.get("EditProducts") ? true : false
            }
                product_id={params.get("productId")}
            />
        )
    )
}