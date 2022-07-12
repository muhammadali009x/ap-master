import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';

import { DialogTitle } from "../../../../Components/StylesComponents/Products/AddProducts/DialogTitle"
import { DialogContent } from "../../../../Components/StylesComponents/Products/AddProducts/DialogContent"
import { DialogActions } from "../../../../Components/StylesComponents/Products/AddProducts/DialogActions"
import Form from "./Form"


export default function CustomizedDialogs({ modal }) {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  // const formValues = useSelector(state => state.AddProductDetails);
  const lang_mode = useSelector(state => state.Languages.default.products.variations.add_variation)

  const history = useHistory()

  useEffect(() => {
    setOpen(true)
  }, [modal])


  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    history.push(window.location.pathname)
  };
  const OnCreateProduct = () => {
    setOpen(false);
    history.push(window.location.pathname);
  };
  const OnAddNew = () => {
  }
  return (
    <div>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose} style={{ textAlign: "center" }}>
          {lang_mode.heading}
        </DialogTitle>
        <DialogContent dividers>
          <Form lang_mode={lang_mode.textFields}/>
        </DialogContent>
        <DialogActions className="mb-2" style={{
          justifyContent: "center"
        }}>
          <Button autoFocus size="lg" onClick={OnAddNew} variant="contained" color="primary" style={{ width: "10rem" }}>
            {lang_mode.button}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
