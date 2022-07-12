import { useHistory } from "react-router";
import Popup from "./Popup";
export default function DeleteCategory({ location }) {
    const history = useHistory()
    let params = new URLSearchParams(location.search);

    if (params.get("categoryId") === "") history.push(window.location.pathname)
    return (
        params.get("DeleteCategory") && (
            <Popup isTrue={
                params.get("DeleteCategory") ? true : false
            }
                product_id={params.get("categoryId")}
            />
        )
    )
}