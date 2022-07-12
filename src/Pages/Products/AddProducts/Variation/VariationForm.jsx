import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
    FormVariation: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: "row",
        border: "1px solid #000",
        borderRadius: "0.5rem",
        margin: "1rem",
        marginRight: "2rem",
        flexWrap: "wrap",
        maxWidth: "33.5rem"

    },
    txtGroup: {
        maxWidth: "4rem",
        marginLeft: "1.2rem"
    },
    TextFields: {
        backgroundColor: "#f4f4f4",
        width: "5rem"
    }
}));

export default function VariationForm({ lang_mode }) {
    const classes = useStyles();
    const dispatch = useDispatch();
    let productVariations = useSelector(state => state.AddProductVaritions);

    const handleChange = (prop) => (event) => {
        dispatch({
            type: "add_product_variations",
            payload: { [prop]: event.target.value }
        })
        console.log("productVariations", productVariations)
    }

    return (
            <Form className={`container ${classes.FormVariation}`}>
                {/* type */}
                <Form.Group className={`mb-3 ${classes.txtGroup}`} controlId="formBasic_type">
                    <Form.Label style={{ fontWeight: "600" }}>{lang_mode.add_variations_textboxes[0]}</Form.Label>
                    <Form.Control className={classes.TextFields} autoComplete="off" type="text"
                        value={productVariations.type}
                        onChange={handleChange("type")}
                    />
                </Form.Group>

                {/* value */}
                <Form.Group className={`mb-3 ${classes.txtGroup}`} controlId="formBasic_value">
                    <Form.Label style={{ fontWeight: "600" }}>{lang_mode.add_variations_textboxes[1]}</Form.Label>
                    <Form.Control className={classes.TextFields} autoComplete="off" type="text"
                        value={productVariations.value}
                        onChange={handleChange("value")}
                    />
                </Form.Group>

                {/* sku */}
                <Form.Group className={`mb-3 ${classes.txtGroup}`} controlId="formBasic_sku">
                    <Form.Label style={{ fontWeight: "600" }}>{lang_mode.add_variations_textboxes[2]}</Form.Label>
                    <Form.Control className={classes.TextFields} autoComplete="off" type="text"
                        value={productVariations.sku}
                        onChange={handleChange("sku")}
                    />
                </Form.Group>

                {/* Quantity */}
                <Form.Group className={`mb-3 ${classes.txtGroup}`} controlId="formBasic_quantity">
                    <Form.Label style={{ fontWeight: "600" }}>{lang_mode.add_variations_textboxes[3]}</Form.Label>
                    <Form.Control className={classes.TextFields} autoComplete="off" type="text"
                        value={productVariations.quantity}
                        onChange={handleChange("quantity")}
                    />
                </Form.Group>

                {/* Unit */}
                <Form.Group className={`mb-3 ${classes.txtGroup}`} controlId="formBasic_unit">
                    <Form.Label style={{ fontWeight: "600" }}>{lang_mode.add_variations_textboxes[4]}</Form.Label>
                    <Form.Control className={classes.TextFields} autoComplete="off" type="text"
                        value={productVariations.unit}
                        onChange={handleChange("unit")}
                    />
                </Form.Group>

                {/* Price */}
                <Form.Group className={`mb-3 ${classes.txtGroup}`} controlId="formBasic_price">
                    <Form.Label style={{ fontWeight: "600" }}>{lang_mode.add_variations_textboxes[5]}</Form.Label>
                    <Form.Control className={classes.TextFields} autoComplete="off" type="text"
                        value={productVariations.price}
                        onChange={handleChange("price")}
                    />
                </Form.Group>
            
             
            
            </Form>

    )
}

