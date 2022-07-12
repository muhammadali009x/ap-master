import { useHistory } from "react-router";
import Popup from "./Popup";

export default function AddCategory({ location }) {
    const history = useHistory()
    let params = new URLSearchParams(location.search);

    return (
        params.get("AddCategory") && (
            <Popup modal={
                params.get("AddCategory") ? true : false
            } />
        )
    )
}