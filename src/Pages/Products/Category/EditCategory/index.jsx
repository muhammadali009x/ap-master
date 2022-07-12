import { useHistory } from "react-router";
import Popup from "./Popup";
export default function EditCategory({ location }) {
    const history = useHistory()
    let params = new URLSearchParams(location.search);

    if (params.get("categoryId") === "") history.push(window.location.pathname)
    return (
        params.get("EditCategory") && (
            <Popup isTrue={
                params.get("EditCategory") ? true : false
            }
                product_id={params.get("categoryId")}
            />
        )
    )
}