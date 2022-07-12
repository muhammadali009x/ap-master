import { useHistory } from "react-router";
import Popup from "./Popup";

export default function AddVariations({ location }) {
    const history = useHistory()
    let params = new URLSearchParams(location.search);

    return (
        params.get("AddVariations") && (
            <Popup modal={
                params.get("AddVariations") ? true : false
            } />
        )
    )
}