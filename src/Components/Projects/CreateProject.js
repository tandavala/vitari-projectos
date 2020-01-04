import React, { Component } from "react";
//connect
import { connect } from "react-redux";
//action
import { createProject } from "../../store/actions/projectActions";

//import Redirect module
import { Redirect } from "react-router-dom";

class CreateProject extends Component {
  //We keep the title and contetn fields of the project.
  state = {
    title: "",
    content: ""
  };

  //will be triggered when the inputs change.
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  //It will work when the form is submitted.
  handleSubmit = e => {
    e.preventDefault();
    //console.log(this.state);
    //state transferred in action.
    this.props.createProject(this.state);

    //for routing
    this.props.history.push("/");
  };

  render() {
    //let's use  auth object
    const { auth } = this.props;
    //If uid is empty, user is not logged in.
    if (!auth.uid) return <Redirect to="/signin" />;
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Criar nove projecto</h5>
          <div className="input-field">
            <input type="text" id="title" onChange={this.handleChange} />
            <label htmlFor="title">Titulo do projecto</label>
          </div>
          <div className="input-field">
            <textarea
              id="content"
              className="materialize-textarea"
              onChange={this.handleChange}
            ></textarea>
            <label htmlFor="content">Descrição do Projecto</label>
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1">Criar</button>
          </div>
        </form>
      </div>
    );
  }
}

//function that gets data from store
const mapStateToProps = state => {
  //console.log(state);

  return {
    //We are accessing the auth object in firebaseReducer.
    auth: state.firebase.auth
  };
};

//We create a function by accessing the action.
const mapDispatchToProps = dispatch => {
  return {
    createProject: project => dispatch(createProject(project))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject);
