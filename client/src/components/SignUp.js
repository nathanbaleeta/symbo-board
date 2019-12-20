import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";

import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { Redirect } from "react-router-dom";

import { connect } from "react-redux";
import { signUp } from "../actions/auth/auth";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="#">
        symboboard.io
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const styles = theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    zoom: "80%"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    background: "mediumvioletred"
  }
});

class SignUp extends Component {
  state = {
    first_name: "",
    last_name: "",
    email: "",
    password: ""
  };

  clearSignUpForm = e => {
    this.setState({
      first_name: "",
      last_name: "",
      email: "",
      password: ""
    });
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = event => {
    // Prevent from submitting empty form
    event.preventDefault();

    const { first_name, last_name, email, password } = this.state;

    // Call signUp action creator
    this.props.signUp(first_name, last_name, email, password);

    // Clear textfields in sign up form
    this.clearSignUpForm();
  };

  render() {
    const { classes } = this.props;
    const { first_name, last_name, email, password } = this.state;

    if (this.props.isAuthenticated) {
      return <Redirect to="/" />;
    }

    return (
      <Fragment>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <form onSubmit={this.onSubmit} className={classes.form} noValidate>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="first_name"
                    label="Firstname"
                    name="first_name"
                    value={first_name}
                    autoComplete="first_name"
                    onChange={this.onChange}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="last_name"
                    label="Lastname"
                    name="last_name"
                    value={last_name}
                    autoComplete="last_name"
                    onChange={this.onChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    value={email}
                    autoComplete="email"
                    onChange={this.onChange}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="password"
                    label="Password"
                    type="password"
                    name="password"
                    value={password}
                    autoComplete="current-password"
                    onChange={this.onChange}
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Sign Up
              </Button>
              <Grid container justify="flex-end">
                <Grid item>
                  <Link href="/auth/signin" variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
          <Box mt={5}>
            <Copyright />
          </Box>
        </Container>
      </Fragment>
    );
  }
}

SignUp.propTypes = {
  classes: PropTypes.object.isRequired,
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { signUp }
)(withStyles(styles)(SignUp));
