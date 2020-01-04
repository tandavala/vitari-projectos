import * as actions from "./actionsType";

export const createProject = project => {
  return (dispatch, getState) => {
    dispatch({ type: "CREATE_PROJECT_SUCCESS", project });
  };
};
