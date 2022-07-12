import { useHistory } from "react-router";
import Popup from "./Popup";

export default function AddUnit({ location }) {
    const history = useHistory()
    let params = new URLSearchParams(location.search);

    return (
        params.get("AddUnit") && (
            <Popup modal={
                params.get("AddUnit") ? true : false
            } />
        )
    )
}