import React, { useEffect } from 'react';
import { useHistory } from 'react-router';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';

import { DialogTitle } from "../../../Components/StylesComponents/Products/AddProducts/DialogTitle"
import { DialogContent } from "../../../Components/StylesComponents/Products/AddProducts/DialogContent"
import { DialogActions } from "../../../Components/StylesComponents/Products/AddProducts/DialogActions"
import Form from "./Form"
import { useSelector, useDispatch } from 'react-redux';


export default function CustomizedDialogs({ modal }) {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const formValues = useSelector(state => state.AddProductDetails);
  const cover_image = useSelector(state => state.AddProductCoverImage);
  const lang_mode = useSelector(state => state.Languages.default.products.add_products);
 
  const history = useHistory()

  useEffect(() => {
    modal ? 
    setOpen(true)
    : setOpen(false)
  }, [modal])

  const handleClickOpen = () => {
    setOpen(true);
    history.push("/Products/AddProducts")
  };
  const handleClose = () => {
    setOpen(false);
    history.push(window.location.pathname)
    dispatch({ type: "clear_addproduct_details" });
    dispatch({ type: "clear_cover_image" });
  };
  const OnCreateProduct = () => {
    setOpen(false);
    history.push(window.location.pathname);
    dispatch({ type: "clear_addproduct_details" });
    dispatch({ type: "clear_cover_image" });
  };
  const OnAddNew = () => {
    dispatch({ type: "clear_addproduct_details" });
    dispatch({ type: "clear_cover_image" });
  }
  return (
    <div>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose} style={{ textAlign: "center" }}>
         
        {lang_mode.heading}
        </DialogTitle>
        <DialogContent dividers>
          <Form />
        </DialogContent>
        <DialogActions>
          <Button onClick={OnCreateProduct} variant="outlined">
            {lang_mode.buttons[1]}
          </Button>
          <Button autoFocus onClick={OnAddNew} variant="contained" color="primary">
            {lang_mode.buttons[2]}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
