import { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { useDispatch, useSelector } from 'react-redux';

const IOSSwitch = withStyles((theme) => ({
  root: {
    width: 42,
    height: 26,
    padding: 0,
    margin: theme.spacing(1),
    marginLeft: theme.spacing(3)

  },
  switchBase: {
    padding: 1,
    "&$checked": {
      transform: "translateX(16px)",
      color: "#e1f21f",
      "&$checked + $track": {
        backgroundColor: "#fff"
      }
    },
    "&$focusVisible $thumb": {
      color: "#52d869",
      border: "6px solid #000"
    }
  },
  thumb: {
    width: 24,
    height: 24
  },
  track: {
    borderRadius: 26 / 2,
    border: `1px solid ${theme.palette.grey[400]}`,
    backgroundColor: "#e1f21f",
    opacity: 1,
    transition: theme.transitions.create(["background-color", "border"])
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

export default function LanguageSwitches() {
  const dispatch = useDispatch();
  const lang_mode = useSelector(state => state.Languages.default.drawer.language_switches);

  const [lang_toggle, set_lang_toggle] = useState(true);


  const handleChange = (event) => {
    set_lang_toggle(event.target.checked)
    dispatch({ type: event.target.checked })
  };

  return (
    <Typography component="div" style={{
      marginLeft: "2rem", color: "#ffffff"
    }}>
      <Grid component="label" container alignItems="center" spacing={1}>
        <Grid item>{lang_toggle ? "قم بالتبديل إلى اللغة العربية" : "Switch to English"}</Grid>
        <Grid item>
          <FormControlLabel
            control={
              <IOSSwitch
                checked={lang_toggle}
                onChange={handleChange}
                name="checkedB"
              />
            }
          />
        </Grid>
      </Grid>
    </Typography>
  );
}
