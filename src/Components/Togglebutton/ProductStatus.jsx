import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { purple } from "@material-ui/core/colors";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import Grid from "@material-ui/core/Grid";
import { useDispatch } from 'react-redux';

const IOSSwitch = withStyles((theme) => ({
  root: {
    width: 42,
    height: 26,
    padding: 0,
    margin: theme.spacing(1)
  },
  switchBase: {
    padding: 1,
    "&$checked": {
      transform: "translateX(16px)",
      color: "#7d7d7d",
      "& + $track": {
        backgroundColor: "#51c03e",
        opacity: 1,
        border: "none"
      }
    },
    "&$focusVisible $thumb": {
      color: "#52d869",
      border: "6px solid #fff"
    }
  },
  thumb: {
    width: 24,
    height: 24
  },
  track: {
    borderRadius: 26 / 2,
    color: "#000",
    border: `1px solid ${theme.palette.grey[400]}`,
    backgroundColor: "#51c03e",
    opacity: 1,
    transition: theme.transitions.create(["background-color", "border", "color"])
  },
  checked: {},
  focusVisible: {}
}))(({ classes, ...props }) => {
  return (
    <Switch
      focusVisibleClassName={classes.focusVisible}
      disableRipple
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked
      }}
      {...props}
    />
  );
});

export default function CustomizedSwitches({ status, lang_mode }) {
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch({ type: "edit_product_details", payload: { ["status"]: event.target.checked } })
  };

  return (
    <FormGroup>
      <Grid component="label" container alignItems="center" spacing={1}>
        <Grid item>{lang_mode}</Grid>
        <Grid item>
          <FormControlLabel
            control={
              <IOSSwitch
                checked={status}
                onChange={handleChange}
                name="status"
              />
            }
          />
        </Grid>
      </Grid>
    </FormGroup>
  );
}
