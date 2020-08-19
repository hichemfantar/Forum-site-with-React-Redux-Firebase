const initState = {
  projects: [
    {
      id: "1",
      title: "hello bruv",
      content: "lets get this bread bois",
    },
    { id: "2", title: "goodbye bruv", content: "lets get goodbye bread bois" },
    {
      id: "3",
      title: "goodnight bruv",
      content: "lets get goodnight bread bois",
    },
  ],
};
const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log("projct created", action.project);
      break;

    default:
      break;
  }
  return state;
};

export default projectReducer;
