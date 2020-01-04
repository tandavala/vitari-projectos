import * as actions from "./actionsType";

export const createProject = project => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    dispatch({ type: "CREATE_PROJECT_SUCCESS", project });
  };
};
