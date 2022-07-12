
// import SubHeadings from "../../../Components/Headings/SubHeadings/";
export default function ProfileSettings({ lang_mode }) {

    return (
        <>
            <div>
                {lang_mode.map((val, ind) => {
                    return (
                        <div key={ind}>{val}</div>
                    )
                })}
            </div>
        </>
    )
}