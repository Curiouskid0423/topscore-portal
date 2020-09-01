import React from 'react';
import { connect } from "react-redux";
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import SignInDateBlock from "./SignInDateBlock";
import {startLogin} from "../actions/auth";
import themehelper from "../themes";

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href={"#"}> TopScore Education Inc</Link>
            {' '} {new Date().getFullYear()} {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
    },
    image: {
        backgroundImage: 'url(http://source.unsplash.com/random?night,sky)',
        backgroundRepeat: 'no-repeat',
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.success.light
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export const SignInSide = (props) => {
    const classes = useStyles();

    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={false} sm={4} md={7} className={classes.image}>
                <SignInDateBlock />
            </Grid>
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <ThemeProvider theme={themehelper}>
                    <div className={classes.paper}>
                        <img className = {"signin-box_img"} src={"/images/round-logo.png"} />
                        <Typography component="h2" variant="h5">
                            Welcome to TopScore
                        </Typography>
                        <div className={classes.form} noValidate>
                            {/*<TextField*/}
                            {/*    variant="outlined" margin="normal" required*/}
                            {/*    fullWidth id="email" label="Email Address"*/}
                            {/*    name="email" autoComplete="email" autoFocus*/}
                            {/*/>*/}
                            {/*<TextField*/}
                            {/*    variant="outlined" margin="normal" required*/}
                            {/*    fullWidth name="password" label="Password"*/}
                            {/*    type="password" id="password" autoComplete="current-password"*/}
                            {/*/>*/}
                            {/*<FormControlLabel*/}
                            {/*    control={<Checkbox value="remember" color="primary" />}*/}
                            {/*    label="Remember me"*/}
                            {/*/>*/}
                            <Button type="submit" fullWidth variant="contained"
                                    color="primary" className={classes.submit} onClick={props.dispatchLogin}
                            >
                                Sign In
                            </Button>
                            <Grid container>
                                <Grid item xs>
                                    <Link href="#" variant="body2">
                                        Forgot password?
                                    </Link>
                                </Grid>
                            </Grid>
                            <Box mt={5}> <Copyright /> </Box>
                        </div>
                    </div>
                </ThemeProvider>
            </Grid>
        </Grid>
    );
}

const mapDispatchToProps = (dispatch) => ({
    dispatchLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(SignInSide);