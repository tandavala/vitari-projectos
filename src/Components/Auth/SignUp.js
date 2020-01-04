import React, { Component } from "react";

//To access store and reducer
import { connect } from "react-redux";
//To access action
import { signUp } from "../../store/actions/authAction";

//import Redirect module
import { Redirect } from "react-router-dom";

import {
  Typography,
  Paper,
  Avatar,
  Button,
  FormControl,
  Input,
  InputLabel
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import withStyles from "@material-ui/core/styles/withStyles";
import { Link, withRouter } from "react-router-dom";

const styles = theme => ({
  main: {
    width: "auto",
    display: "block", // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
      .spacing.unit * 3}px`
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing.unit
  },
  submit: {
    marginTop: theme.spacing.unit * 3
  }
});

class SignUp extends Component {
  //for inputs
  state = {
    email: "",
    password: "",
    firstName: "",
    lastName: ""
  };
  //will work when the input is changed.
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  //will work when the form is submit.
  handleSubmit = e => {
    e.preventDefault();
    //action function
    this.props.signUp(this.state);
  };

  render() {
    const { authError, auth } = this.props;
    const { classes } = this.props;
    //If uid is not empty, user is logged in.
    if (auth.uid) return <Redirect to="/" />;
    return (
      <main className={classes.main}>
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Criar Conta
          </Typography>
          <form className={classes.form} onSubmit={this.handleSubmit}>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="email">Email </InputLabel>
              {/* When the e-mail field is changed, setEmail will run and assign the e-mail to the value in the input. */}
              <Input
                id="email"
                onChange={this.handleChange}
                autoComplete="off"
                autoFocus
              />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="password">Senha</InputLabel>
              {/* When the password field is changed, setPAssword will run and assign the password to the value in the input. */}
              <Input
                name="password"
                type="password"
                id="password"
                autoComplete="off"
                onChange={this.handleChange}
              />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="firstName">Primeiro Nome </InputLabel>
              {/* When the e-mail field is changed, setEmail will run and assign the e-mail to the value in the input. */}
              <Input
                id="firstName"
                onChange={this.handleChange}
                autoComplete="off"
                autoFocus
              />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="lastName">Sobrenome </InputLabel>
              {/* When the e-mail field is changed, setEmail will run and assign the e-mail to the value in the input. */}
              <Input
                id="lastName"
                onChange={this.handleChange}
                autoComplete="off"
                autoFocus
              />
            </FormControl>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Criar conta
            </Button>
            <Button
              type="submit"
              fullWidth
              variant="outlined"
              color="secondary"
              component={Link}
              to="/signin"
              className={classes.submit}
            >
              Fazer login
            </Button>

            <div className="red-text center">
              {/* If there is data in authError, it means that it has received an error. */}
              {authError ? <p>{authError}</p> : null}
            </div>
          </form>
        </Paper>
      </main>
    );
  }
}
//Function to access store
const mapDispatchToProps = dispatch => {
  return {
    signUp: creds => dispatch(signUp(creds))
  };
};

//Function to access store
const mapStateToProps = state => {
  return {
    //We are accessing the auth object in firebaseReducer.
    auth: state.firebase.auth,
    //We are accessing the authError object.
    authError: state.auth.authError
  };
};
export default withRouter(
  withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(SignUp))
);
