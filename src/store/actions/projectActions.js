//We create action called createProject
export const createProject = project => {
  //We'll access the firestore.
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //asynchronous operation with dispatch.
    //We're accessing the firestore.
    const firestore = getFirestore();
    //We are adding data to the projects collection.
    firestore
      .collection("projects")
      .add({
        ...project,
        authorName: "pckurdu",
        authorId: 123,
        createdAt: new Date()
      })
      .then(() => {
        //If data is added successfully to firestore
        dispatch({ type: "CREATE_PROJECT", project });
      })
      .catch(err => {
        //If data isn't added successfully to firestore
        dispatch({ type: "CREATE_PROJECT_ERROR", err });
      });
  };
};
