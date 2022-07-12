import "../style.css"
export default function SubHeadings({ headingName, otherProps }) {
    return (
        <>
            <h2 className="subHeadings" style={otherProps}>{headingName}</h2>
        </>
    )
}