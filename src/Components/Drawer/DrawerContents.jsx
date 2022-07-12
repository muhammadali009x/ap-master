//#region imports
import React from 'react';
//#region imports @material-ui
import { makeStyles } from '@material-ui/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@mui/material/Collapse';
import ListItemButton from '@mui/material/ListItemButton';
//#endregion

//#region imports customs components
import pagesname from "./pagesname";
//#endregion
//#endregion

const useStyles = makeStyles((theme) => ({
    drawerContainer: {
      overflow: 'auto',
      backgroundColor: "#151515",
    },
    ListLinkItem: {
      padding: "0.5rem",
      paddingLeft: "1.5rem",
      color: "#7a7a7a",
  
    },
    nestedListText: {
      color: "#676767",
    },
  
}))

function DrawerContents() {
    const classes = useStyles();
  
    const [btn_active, set_btn_active] = React.useState({})
    const [open, setOpen] = React.useState(false);
    
    const handleClick = () => {
        setOpen(!open);
      };

    return (
        <div className={classes.drawerContainer}>
            {pagesname.map((text, index) => (

                text !== "Products" ?
                    <List>
                        <ListItem button key={text} className={classes.ListLinkItem}>
                            <ListItemText className={classes.ListItemText} primary={text} />
                        </ListItem>
                    </List>
                    :
                    <List>
                        <ListItem button key={text} className={classes.ListLinkItem}
                            style={btn_active}
                            onClick={handleClick}>
                            <ListItemText className={classes.ListItemText} primary={text} />
                        </ListItem>
                        <Collapse in={open} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton sx={{ pl: 4, color: "#676767" }} >
                                    <ListItemText primary="All Products" className={classes.nestedListText} />
                                </ListItemButton>
                                <ListItemButton sx={{ pl: 4, color: "#676767" }} >
                                    <ListItemText primary="Add Products" className={classes.nestedListText} />
                                </ListItemButton>
                                <ListItemButton sx={{ pl: 4, color: "#676767" }} >
                                    <ListItemText primary="Unit" className={classes.nestedListText} />
                                </ListItemButton>
                                <ListItemButton sx={{ pl: 4, color: "#676767" }} >
                                    <ListItemText primary="Category" className={classes.nestedListText} />
                                </ListItemButton>
                                <ListItemButton sx={{ pl: 4, color: "#676767" }} >
                                    <ListItemText primary="Variations" className={classes.nestedListText} />
                                </ListItemButton>
                            </List>
                        </Collapse>
                    </List>
            ))}
        </div>
    );
}

export default DrawerContents;
