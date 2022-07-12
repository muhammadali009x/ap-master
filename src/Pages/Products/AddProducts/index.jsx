import Popup from "./Popup";
export default function AddProducts({ location }) {
    let params = new URLSearchParams(location.search);

    return (
        params.get("AddProducts") && (
            <Popup modal={
                params.get("AddProducts") ? true : false
            }/>
        )
    )
}