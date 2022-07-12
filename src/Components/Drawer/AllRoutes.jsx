import React from 'react';

//#region react-router
import {
    Route,
    Switch, useRouteMatch
}
    from "react-router-dom";


//#region Components Pages
const Dashboard = React.lazy(() => import("../../Pages/Dashboard"))

//#region Products Components Pages

//#region AllProducts Components Page
const Products = React.lazy(() => import("../../Pages/Products/AllProducts"))
const AddProducts = React.lazy(() => import("../../Pages/Products/AddProducts"))
const EditProducts = React.lazy(() => import("../../Pages/Products/EditProducts"))
//#endregion

//#region Products Unit Components Pages
const Unit = React.lazy(() => import("../../Pages/Products/Unit"));
const AddUnit = React.lazy(() => import("../../Pages/Products/Unit/AddUnit"));
const EditUnit = React.lazy(() => import("../../Pages/Products/Unit/EditUnit"));
const DeleteUnit = React.lazy(() => import("../../Pages/Products/Unit/DeleteUnit"));
//#endregion

//#region Products Category Components Pages
const Category = React.lazy(() => import("../../Pages/Products/Category"));
const AddCategory = React.lazy(() => import("../../Pages/Products/Category/AddCategory"));
const EditCategory = React.lazy(() => import("../../Pages/Products/Category/EditCategory"));
const DeleteCategory = React.lazy(() => import("../../Pages/Products/Category/DeleteCategory"));
//#endregion

//#region Products Variations Components Pages
const Variations = React.lazy(() => import("../../Pages/Products/Variations"));
const AddVariations = React.lazy(() => import("../../Pages/Products/Variations/AddVariations/"));
const EditVariations = React.lazy(() => import("../../Pages/Products/Variations/EditVariations"));
const DeleteVariations = React.lazy(() => import("../../Pages/Products/Variations/DeleteVariations"));
//#endregion

//#endregion

const Settings = React.lazy(() => import("../../Pages/Settings"))
//#endregion

export default function AllRoutes() {
    let { path, url } = useRouteMatch();
    return (
        <>
            <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route
                    path="/Products"
                    render={({ match: { url } }) => (
                        <>
                            <Route path={`${url}/`} component={Products} exact />
                            <Route path={`${url}/Unit`} component={Unit} />
                            <Route path={`${url}/Category`} component={Category} />
                            <Route path={`${url}/Variations`} component={Variations} />
                        </>
                    )}
                />
                <Route path="/Settings" component={Settings} />

            </Switch>
             {/* All Products */}
            <Route path="/Products" component={AddProducts} />
            <Route path="/Products" component={EditProducts} />

             {/* All Unit */}
            <Route path="/Products/Unit" component={AddUnit} />
            <Route path="/Products/Unit" component={EditUnit} />
            <Route path="/Products/Unit" component={DeleteUnit} />
            
             {/* All Category */}
            <Route path="/Products/Category" component={AddCategory} />
            <Route path="/Products/Category" component={EditCategory} />
            <Route path="/Products/Category" component={DeleteCategory} />
            
             {/* All Variations */}
            <Route path="/Products/Variations" component={AddVariations} />
            <Route path="/Products/Variations" component={EditVariations} />
            <Route path="/Products/Variations" component={DeleteVariations} />
        </>
    )
}