const reducer = (state, action) => {
  if (action.type === "HOME_UPDATE") {
    return {
      ...state,
      image: action.payload.image,
    };
  }

  if (action.type === "NOTES_UPDATE") {
    return {
      ...state,
      image1: action.payload.image1,
      image2: action.payload.image2,
      image3: action.payload.image3,
      image4: action.payload.image4,
      image5: action.payload.image5,
      image6: action.payload.image6,
    };
  }

  //   if (action.type === "GET_SERVICES") {
  //     return {
  //       ...state,
  //       services: action.payload,
  //     };
  //   }

  return state;
};

export default reducer;
