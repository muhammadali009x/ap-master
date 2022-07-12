import "./style.css"
export default function MainHeadings({ headingName }) {
    return (
        <>
            <h2 className="mainHeadings">{headingName}</h2>
        </>
    )
}
export function PopUpMainHeading({ headingName }) {
    return (
        <>
            <h2 className="popup_mainHeadings">{headingName}</h2>
        </>
    )
}