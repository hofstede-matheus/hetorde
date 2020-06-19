import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import logo from "../../assets/logo_mini.png";

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    logo: {
        height: 40,
        width: 40,
    }
  }));

export default function Header() {
    const classes = useStyles();
    return (
        <>
            <div className={classes.root}>
                <AppBar position="static" style={{backgroundColor: "#1565c0"}}>
                    <Toolbar>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <img src={logo} className={classes.logo}/>
                        </IconButton>
                        <Typography align="left" variant="h6" className={classes.title}>
                            Het or De
                        </Typography>
                    </Toolbar>
                </AppBar>
    </div>
        </>
    );
}
