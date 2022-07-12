import React, { useEffect, useState } from "react";
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
        // justifyContent: "space-between",
        margin: "1rem",
        flexWrap: "wrap",
        maxWidth: "30rem"

    },
    txtGroup: {
        maxWidth: "4rem",
        marginLeft: "4rem"
    },
    TextFields: {
        backgroundColor: "#f4f4f4",
        width: "7rem"
    }
}));

let arr = []
export default function AboutProduct({ lang_mode }) {
    const classes = useStyles();
    const dispatch = useDispatch();
    let aboutproduct = useSelector(state => state.EditAboutProduct);

    const [createVariation, setcreateVariation] = useState([])

    const handleChange = (prop) => (event) => {
        dispatch({
            type: "edit_about_products",
            payload: { [prop]: event.target.value }
        })
        console.log("aboutproduct", aboutproduct)
    }

    const OnAdd = () => {
        arr.push(
        )
        console.log(arr)
        setcreateVariation(arr.map((create, ind) => {
            console.log(create)
            return create

        }));
    }
    useEffect(() => {
        // OnAdd()
    }, [])
    return (
        <>
            {/* <button onClick={OnAdd}>Add</button> */}
            <br />
            {/* {createVariation} */}
            
            <Form className={`container ${classes.FormVariation}`}>
                <Form.Group className={`mb-3 ${classes.txtGroup}`} controlId="formBasic_color">
                    <Form.Label style={{ fontWeight: "600" }}>{lang_mode.add_variations_textboxes[0]}</Form.Label>
                    <Form.Control className={classes.TextFields} autoComplete="off" type="text"

                        onChange={handleChange("color")}
                    />
                </Form.Group>
                <Form.Group className={`mb-3 ${classes.txtGroup}`} controlId="formBasic_size">
                    <Form.Label style={{ fontWeight: "600" }}>{lang_mode.add_variations_textboxes[1]}</Form.Label>
                    <Form.Control className={classes.TextFields} autoComplete="off" type="number"

                        onChange={handleChange("size")} />
                </Form.Group>
                <Form.Group className={`mb-3 ${classes.txtGroup}`} controlId="formBasic_quantity">
                    <Form.Label style={{ fontWeight: "600" }}>{lang_mode.add_variations_textboxes[2]}</Form.Label>
                    <Form.Control className={classes.TextFields} autoComplete="off" type="number"

                        onChange={handleChange("quantity")} />
                </Form.Group>
            </Form>
        </>
    )
}

