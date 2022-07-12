
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import TextField from "@material-ui/core/TextField";
import { BootstrapInput } from "../../../Components/StylesComponents/Products/AddProducts/BootstrapInput";
import UseStyles from "../../../Components/StylesComponents/Products/AddProducts/useStyles";
import CoverImage from "./CoverImage"
import { useDispatch, useSelector } from 'react-redux';
import { category_type } from "./selectValues";
import MultipleSelect from "../../../Components/DropDownSelect/ProductType/"
import ProductStatus from "../../../Components/Togglebutton/ProductStatus"

import AboutProduct from "./AboutProduct"
import Variation from "./Variation"

export default function Form() {
    const classes = UseStyles();
    const dispatch = useDispatch();

    const lang_mode = useSelector(state => state.Languages.default.products.edit_products);

    let productdetails = useSelector(state => state.EditProductsDetails);

    const handleChange = (prop) => (event) => {
        dispatch({ type: "addproduct_details", payload: { [prop]: event.target.value } })
    }

    return (
        <div className={classes.root}>
            <div>
                <CoverImage />
            </div>
            <div>
                <BootstrapInput
                    id="demo-customized-textbox" placeholder={lang_mode.textboxes[0]}
                    name="product_name_en"
                    onChange={handleChange("product_name_en")}
                    value={productdetails.product_name_en}
                />
            </div>
            <div>
                <BootstrapInput id="demo-customized-textbox" placeholder={lang_mode.textboxes[1]}
                    name="product_name_ar"
                    onChange={handleChange("product_name_ar")}
                    value={productdetails.product_name_ar} />
            </div>

            <Variation id="editvariation" lang_mode={lang_mode} />
            <div>
                <FormControl className={classes.margin}>
                    <NativeSelect
                        id="category_type-native-label-placeholder"
                        name="product_category"
                        value={productdetails.product_category}
                        onChange={handleChange("product_category")}
                        defaultValue=""
                        input={<BootstrapInput />}
                    >
                        <option value="" disabled >
                            {lang_mode.dropdowns.product_category[0]}
                        </option>
                        {category_type.map((val, ind) => (<option key={ind} value={val}>{val}</option>))}

                    </NativeSelect>
                </FormControl>
                <FormControl className={classes.margin}>
                    <NativeSelect
                        id="sub_category_type-native-label-placeholder"
                        name="product_sub_category"
                        value={productdetails.product_category}
                        onChange={handleChange("product_sub_category")}
                        defaultValue=""
                        input={<BootstrapInput />}
                    >
                        <option value="" disabled >
                            {lang_mode.dropdowns.product_category[1]}
                        </option>
                        {category_type.map((val, ind) => (<option key={ind} value={val}>{val}</option>))}

                    </NativeSelect>
                </FormControl>
            </div>
            <div>
                <MultipleSelect placeholder="Product Type" product_type_values={productdetails.product_type}/>
                <ProductStatus status={productdetails.status} lang_mode={lang_mode.buttons[2]}/>
            </div>

            <AboutProduct id="editvariation" lang_mode={lang_mode} />

            <div>
                <TextField
                    id="outlined-multiline-static"
                    label=""
                    multiline
                    rows={4}
                    value={productdetails.product_description_en}
                    placeholder={lang_mode.textarea[0]}
                    onChange={handleChange("product_description_en")}
                    variant="outlined"
                />
            </div>
            <div>
                <TextField
                    id="outlined-multiline-static"
                    label=""
                    multiline
                    rows={4}
                    value={productdetails.product_description_ar}
                    onChange={handleChange("product_description_ar")}
                    placeholder={lang_mode.textarea[1]}
                    variant="outlined"
                />
            </div>

        </div>
    )
}