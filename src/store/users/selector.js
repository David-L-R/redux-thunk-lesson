export const selectUsers = (reduxState) => reduxState.users.users;

export const selectUser = (userId) => (reduxState) =>
  reduxState.users.users.find((user) => user.id === userId);
