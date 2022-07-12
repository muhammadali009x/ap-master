import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide({ isTrue }) {
  const [open, setOpen] = React.useState(false);
  const lang_mode = useSelector(state => state.Languages.default.products.unit.delete_unit)
  const history = useHistory()

  useEffect(() => {
    isTrue ?
      setOpen(true)
      : setOpen(false)
  }, [isTrue])

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    history.push(window.location.pathname)
  };

  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title"> {lang_mode.heading}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
          {lang_mode.title}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
          {lang_mode.buttons[0]}
          </Button>
          <Button onClick={handleClose} color="primary">
          {lang_mode.buttons[1]}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
