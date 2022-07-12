import { combineReducers } from 'redux';

import Languages from "./Languages";
import AddProductDetails from "./Products/AddProducts";
import AddProductCoverImage from "./Products/AddProducts/CoverImage";
import AddProductVaritions from "./Products/AddProducts/AddVariations";

import EditProductsDetails from "./Products/EditProducts";
import EditProductVaritions from "./Products/EditProducts/EditVariations";
import EditAboutProduct from "./Products/EditProducts/AboutProduct";
import EditProductCoverImage from "./Products/EditProducts/CoverImage";

import AddUnits from "./ProductsUnits/AddUnits";
import AddCategory from "./ProductsCategory/AddCategory";
import AddVariation from "./ProductsVariation/AddVariation";

export default combineReducers({
    Languages: Languages,
    AddProductDetails: AddProductDetails,
    AddProductCoverImage: AddProductCoverImage,
    AddProductVaritions: AddProductVaritions,
    
    EditProductCoverImage: EditProductCoverImage,
    EditProductsDetails: EditProductsDetails,
    EditProductVaritions: EditProductVaritions,
    EditAboutProduct: EditAboutProduct,

    AddUnits: AddUnits,
    AddCategory: AddCategory,
    AddVariation: AddVariation,
})