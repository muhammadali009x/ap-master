import React, { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
    FormVariation: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: "row",
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

let arr = []
export default function Variation({ lang_mode }) {
    const classes = useStyles();
    const dispatch = useDispatch();
    let productVariations = useSelector(state => state.EditProductVaritions);

    const handleChange = (prop) => (event) => {
        dispatch({
            type: "edit_product_variations",
            payload: { [prop]: event.target.value }
        })
        console.log("productVariations", productVariations)
    }

    return (
        // Make sure all are number if number then change it to map function
        <Form className={`container ${classes.FormVariation}`}>

            {/* price */}
            <Form.Group className={`mb-3 ${classes.txtGroup}`} controlId="formBasic_price">
                <Form.Label style={{ fontWeight: "600" }}>{lang_mode.about_product_textboxes[0]}</Form.Label>
                <Form.Control className={classes.TextFields} autoComplete="off" type="number"
                    value={productVariations.price}
                    onChange={handleChange("price")}
                />
            </Form.Group>

            {/* currency */}
            <Form.Group className={`mb-3 ${classes.txtGroup}`} controlId="formBasic_currency">
                <Form.Label style={{ fontWeight: "600" }}>{lang_mode.about_product_textboxes[1]}</Form.Label>
                <Form.Control className={classes.TextFields} autoComplete="off" type="text"
                    value={productVariations.currency}
                    onChange={handleChange("currency")}
                />
            </Form.Group>

            {/* sku */}
            <Form.Group className={`mb-3 ${classes.txtGroup}`} controlId="formBasic_sku">
                <Form.Label style={{ fontWeight: "600" }}>{lang_mode.about_product_textboxes[2]}</Form.Label>
                <Form.Control className={classes.TextFields} autoComplete="off" type="number"
                    value={productVariations.sku}
                    onChange={handleChange("sku")}
                />
            </Form.Group>

            {/* unit */}
            <Form.Group className={`mb-3 ${classes.txtGroup}`} controlId="formBasic_unit">
                <Form.Label style={{ fontWeight: "600" }}>{lang_mode.about_product_textboxes[3]}</Form.Label>
                <Form.Control className={classes.TextFields} autoComplete="off" type="number"
                    value={productVariations.unit}
                    onChange={handleChange("unit")}
                />
            </Form.Group>
        </Form>
    )
}

