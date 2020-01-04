const initState = {
  //projects data
  projects: [
    { id: "1", title: "pckurdu1", content: "first project" },
    { id: "2", title: "pckurdu2", content: "second project" },
    { id: "3", title: "pckurdu3", content: "third project" }
  ]
};

const projectReducer = (state = initState, action) => {
  return state;
};

export default projectReducer;
