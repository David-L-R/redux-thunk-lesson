export const selectPosts = (reduxState) => {
  return reduxState.posts.posts.map((post) => {
    return {
      ...post,
      user: reduxState.users.users.find((user) => post.userId === user.id),
    };
  });
};
