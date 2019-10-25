import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import SignIn from '../components/SignIn';
import { withRouter } from "react-router-dom";
import axios from 'axios';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/CS-EU-Build-Week/CS-Build-Week1-FE">
        LAMBDA MUD
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
      height: '100%',


    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const SignUp = props => {
  const classes = useStyles();
  const [userCredentials, setUser] = useState({
    username: "",
    password1: "",
    password2: ""
  });
  const [error, setError] = useState("");
  const validateForm = () => {
    return (
      userCredentials.username.length > 1 &&
      userCredentials.password1.length > 7 &&
      userCredentials.password2.length > 7
    );
  };

  const handleSubmit = e => {
    e.preventDefault();
    setError("");
    axios
      .post("https://lambda-mud-test.herokuapp.com/api/registration/", userCredentials)
      .then(res => {
        console.log(res);
        localStorage.setItem("token", res.data.key);
        props.history.push("/game");
      })
      .catch(err => {
        console.log(err);
        setError(err);
        setTimeout(() => {
          setError("");
        }, 2500);
      });
      setUser({
      username: "",
      password1: "",
      password2: ""
    });
  };



  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            
            <Grid item xs={12}>
            <TextField
                variant="outlined"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                value={userCredentials.username}
                onChange={e => setUser({ ...userCredentials, username: e.target.value })}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password1"
                label="Password"
                type="password"
                id="password1"
                autoComplete="current-password"
                value={userCredentials.password1}
                onChange={e => setUser({ ...userCredentials, password1: e.target.value })}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password2"
                label="Confirm Password"
                type="password"
                id="password2"
                autoComplete="current-password"
                value={userCredentials.password2}
                onChange={e => setUser({ ...userCredentials, password2: e.target.value })}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            disabled={!validateForm()}
          >
            Register
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href={SignIn} variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
          {error && <p style={{ color: "darkred" }}>{error}</p>}
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
};
export default withRouter(SignUp);
