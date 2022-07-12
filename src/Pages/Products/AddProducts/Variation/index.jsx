import React, { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import {  Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { createElement } from 'react-create-element';
import VariationForm from "./VariationForm"

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

let arr = []
export default function Variation({ lang_mode }) {
    const classes = useStyles();

    const [createVariation, setcreateVariation] = useState()

    const OnAdd = () => {
        arr.push(createElement(React, VariationForm, { lang_mode }))
        setcreateVariation(arr.map((create) => {
            return create
        }));
    }
    return (
        <>
            <h3>Add Variation</h3>
            <button onClick={OnAdd}>Add</button>
            <br />
            {/* {createVariation} */}
            {createVariation}
            
        </>
    )
}

