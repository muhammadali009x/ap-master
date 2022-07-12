
const initialstate={
    product_name_en:"",
    product_name_ar:"",
    product_category:"",
    product_type:[],
    product_category:"",
    product_description_en:"",
    product_description_ar:""

}

function AddProductDetails(state=initialstate, action){
    switch (action.type) {
        case "addproduct_details":
            return {
                ...state,...action.payload
            }
        case "clear_addproduct_details":
            return initialstate

        default:
            return state
    }
}

export default AddProductDetails;