import * as actions from "../actions/actionsType";

const initState = {
  //projects data
  projects: [
    { id: "1", title: "pckurdu1", content: "first project" },
    { id: "2", title: "pckurdu2", content: "second project" },
    { id: "3", title: "pckurdu3", content: "third project" }
  ]
};

const projectReducer = (state = initState, { type, project }) => {
  switch (type) {
    case "CREATE_PROJECT_SUCCESS":
      console.log("create project success", project);
      return state;
    default:
      return state;
  }
};

export default projectReducer;
