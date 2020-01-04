import React from "react";
import moment from "moment";

//import connect module
import { connect } from "react-redux";

//connect firestore
import { firestoreConnect } from "react-redux-firebase";
//to merge
import { compose } from "redux";
//import Redirect module
import { Redirect } from "react-router-dom";

const ProjectDetails = props => {
  const { project, auth } = props;
  //If uid is empty, user is not logged in.
  if (!auth.uid) return <Redirect to="/signin" />;
  if (project) {
    return (
      // details of a project into the card structure.
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">{project.title}</span>
            <p>{project.content}</p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>
              Posted by {project.authorName} {project.authorLastName}
            </div>
            <div>
              <p className="grey-text">
                {moment(project.createdAt.toDate().toString()).calendar()}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <p>Loading project</p>;
  }
};

//function that gets data from store
const mapStateToProps = (state, ownProps) => {
  //the first value written to the console comes from the store.
  //console.log(state);
  //the second value written to the console comes from this component's props.
  //console.log(ownProps);

  const id = ownProps.match.params.id;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : null;
  return {
    project: project,
    auth: state.firebase.auth
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "projects" }])
)(ProjectDetails);
