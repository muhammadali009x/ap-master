import { useSelector } from "react-redux"
import Content from "./Content/"
import MainHeadings, { PopUpMainHeading } from "../../Components/Headings/MainHeadings";
export default function Settings() {
    const lang_mode = useSelector(state => state.Languages.default.settings)

    return (
        <>
            <MainHeadings headingName={lang_mode.main_heading} />
            <Content lang_mode={lang_mode} />
        </>
    )
}