const initialState = {
  name: "Mohan",
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "SET_USER_DATA":
      const user = action.payload;
      return { ...state, ...user };
    default:
      return state;
  }
}
