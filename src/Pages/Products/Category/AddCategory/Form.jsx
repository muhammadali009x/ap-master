import { useDispatch, useSelector } from 'react-redux';

import { Form } from 'react-bootstrap';
import { UseStyles } from "./usestyles";


export default function AddCategoryForm({ lang_mode }) {
    const classes = UseStyles();
    const dispatch = useDispatch();

    let addcategory = useSelector(state => state.AddCategory);

    const handleChange = (prop) => (event) => {
        console.log(addcategory)
        dispatch({ type: "add_category", payload: { [prop]: event.target.value } })
    }

    return (
        <Form className={`container ${classes.FormVariation}`}>
            {/* Category */}
            <Form.Group className={`mb-3 ${classes.txtGroup}`} controlId="formBasic_type">
                <Form.Label style={{ fontWeight: "600" }}>{lang_mode[0]}</Form.Label>
                <Form.Control className={classes.TextFields} autoComplete="off" type="text"
                    value={addcategory.category}
                    onChange={handleChange("category")}
                />
            </Form.Group>

            {/* Description */}
            <Form.Group className={`mb-3 ${classes.txtGroup}`} controlId="formBasic_type">
                <Form.Label style={{ fontWeight: "600" }}>{lang_mode[1]}</Form.Label>
                <Form.Control
                    as="textarea"
                    onChange={handleChange("description")}
                    value={addcategory.description}
                    className={classes.TextFields}
                    placeholder={lang_mode[1]}
                    style={{ height: '100px' }}
                />
            </Form.Group>
        </Form>
    )
}