// plain object that contains a key name

// _____________________________________________________________

// Get user action
export const  getUser = () => {
  return { type: "GET_USER_DATA" };
};
 
// Set user action
export const setUser = (user) => {
  return { type: "SET_USER_DATA", payload: user };
};
