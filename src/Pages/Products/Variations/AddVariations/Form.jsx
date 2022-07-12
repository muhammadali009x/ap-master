import { useDispatch, useSelector } from 'react-redux';
import { Form } from 'react-bootstrap';
import { UseStyles } from "./usestyles";
import { useState } from "react"

export default function AddVariationForm({ lang_mode }) {
    const classes = UseStyles();
    const dispatch = useDispatch();

    const addVariation = useSelector(state => state.AddVariation);
    const handleChange = (prop) => (event) => {
        dispatch({ type: "add_variation", payload: { [prop]: event.target.value } })
    }

    return (
        <Form className={`container ${classes.FormVariation}`}>
            {/* variation_name */}
            <Form.Group className={`mb-3 ${classes.txtGroup}`} controlId="formBasic_type">
                <Form.Label style={{ fontWeight: "600" }}>{lang_mode[0]}</Form.Label>
                <Form.Control className={classes.TextFields} autoComplete="off" type="text"
                    value={addVariation.variation_name}
                    onChange={handleChange("variation_name")}
                />
            </Form.Group>

            {/* variation_values */}

            <Form.Group className={`mb-3 ${classes.txtGroup}`} controlId="formBasic_type">
                <Form.Label style={{ fontWeight: "600" }}>{lang_mode[1]}</Form.Label>
                <Form.Control className={classes.TextFields} autoComplete="off" type="text"
                    value={addVariation.variation_values}
                    onChange={handleChange("variation_values")}
                />
                <button>Click</button>
            </Form.Group>

        </Form>
    )
}