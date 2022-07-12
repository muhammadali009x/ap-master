
import SubHeadings from "../../../Components/Headings/SubHeadings/";

import AdminInfo from "../Content/AdminInfo/"
import PaymentSettings from "../Content/PaymentSettings"
import ProfileSettings from "../Content/ProfileSettings"
import TaxSettings from "../Content/TaxSettings"

export default function Content({ lang_mode }) {


    const top_headings = lang_mode.headings;
    const all_content = [
        <ProfileSettings lang_mode={lang_mode.profile_settings} />,
        <AdminInfo lang_mode={lang_mode.admin_info}/>,
        <TaxSettings lang_mode={lang_mode.tax_settings}/>,
        <PaymentSettings lang_mode={lang_mode.payment_settings}/>
    ]

    return (
        <>
            <div>
                {top_headings.map((val, ind) => {
                    return (
                        <>
                            <SubHeadings headingName={val} otherProps={{ textDecoration: "underline" }} />
                            {all_content.filter(get => get.type.name === val.replaceAll(" ", ""))}
                        </>
                    )
                })}
            </div>
        </>
    )
}