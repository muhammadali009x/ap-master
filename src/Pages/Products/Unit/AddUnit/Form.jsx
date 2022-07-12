import { useDispatch, useSelector } from 'react-redux';

import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import { BootstrapInput } from "../../../../Components/StylesComponents/Products/AddProducts/BootstrapInput";
import { Form } from 'react-bootstrap';
import { UseStyles } from "./usestyles";
import { categoryData } from "./categoryData"


export default function AddUnitForm({ lang_mode }) {
    const classes = UseStyles();
    const dispatch = useDispatch();

    let productdetails = useSelector(state => state.AddUnits);

    const handleChange = (prop) => (event) => {
        console.log(event.target.value)
        console.log(productdetails)
        dispatch({ type: "add_units", payload: { [prop]: event.target.value } })
    }

    return (
        <Form className={`container ${classes.FormVariation}`}>
            {/* unit */}
            <Form.Group className={`mb-3 ${classes.txtGroup}`} controlId="formBasic_type">
                <Form.Label style={{ fontWeight: "600" }}>{lang_mode[0]}</Form.Label>
                <Form.Control className={classes.TextFields} autoComplete="off" type="text"
                    // value={productVariations.type}
                    onChange={handleChange("unit")}
                />
            </Form.Group>

            {/* short_name */}
            <Form.Group className={`mb-3 ${classes.txtGroup}`} controlId="formBasic_value">
                <Form.Label style={{ fontWeight: "600" }}>{lang_mode[1]}</Form.Label>
                <Form.Control className={classes.TextFields} autoComplete="off" type="text"
                    // value={productVariations.value}
                    onChange={handleChange("short_name")}
                />
            </Form.Group>

            {/* allow_decimal_category */}
            <Form.Group className={`mb-3 ${classes.txtGroup}`} controlId="formBasic_category">
                <Form.Label style={{ fontWeight: "600" }}>{lang_mode[2]}</Form.Label>
                <Form.Select aria-label="Default select example" className={classes.TextFields}
                    onChange={handleChange("allow_decimal_category")}
                >
                    <option disabled value="">{lang_mode[3]}</option>
                    {categoryData.map((val, ind) => <option key={ind} value={val}>{val}</option>)}
                </Form.Select>
            </Form.Group>
        </Form>
    )
}