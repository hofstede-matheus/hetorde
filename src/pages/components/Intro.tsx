import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import netherlands_silluete from '../../assets/netherlands_silluete.png'
import google_play_badge from '../../assets/google-play-badge.png'
import {Grid} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        height: "100vh",
        backgroundColor: "#1565c0"
    },
    gridCointainer: {
        height: "100vh",
    },
    netherlandsSilluete: {
        height: "80%",
        width: "80%",
    }


}));

export default function Intro() {
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
                        <a href="https://www.w3schools.com">
                            <img className={classes.netherlandsSilluete} src={netherlands_silluete}/>

                        </a>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Grid container>
                            <Grid item xs={12}>
                                <Typography
                                    align="left"
                                    variant="h2"
                                    component="h2"
                                    color="textPrimary"
                                    style={{color: "#fff", margin: 10}}
                                >
                                    Dutch Articles on the go
                                </Typography>

                            </Grid>
                            <Grid item xs={12}>
                                <Typography
                                    align="left"
                                    variant="h5"
                                    component="h5"
                                    style={{color: "#fff", margin: 10}}
                                >
                                    Easily find which dutch article to use.
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <a target="_blank" href="https://play.google.com/store/apps/details?id=com.hofstedematheus.hetorde">
                                    <img
                                        height="80"
                                        src={google_play_badge}
                                    />
                                </a>

                            </Grid>

                        </Grid>
                    </Grid>

                </Grid>

            </div>
        </>
    );
}
