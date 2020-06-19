import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import screenshots from '../../assets/screenshots.png'
import {Grid} from "@material-ui/core";
import googlePlayBadge from "../../assets/google-play-badge.png";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    gridCointainer: {
        height: "100vh",
    },
    screenshots: {
        height: "90%",
        width: "90%",
    }

}));

export default function Section1() {
    const classes = useStyles();
    return (
        <>
            <div className={classes.root}>
                <Grid container
                      direction="row"
                      justify="center"
                      alignItems="center"
                      className={classes.gridCointainer}
                >
                    <Grid item xs={12} sm={6}>
                        <img src={screenshots} className={classes.screenshots}/>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Grid item xs={12}>
                            <Typography
                                align="left"
                                variant="h5"
                                component="h5"
                                style={{color: "#000", margin: 10}}
                            >
                                Just type a noum and know which article to use
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </>
    );
}

