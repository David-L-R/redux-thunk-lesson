export const selectPosts = (reduxState) => {
  return reduxState.posts.posts.map((post) => {
    return {
      ...post,
      user: reduxState.users.users.find((user) => post.userId === user.id),
    };
  });
};

export const selectPost = (reduxState) => {
  return {
    ...reduxState.posts.post,
    user: reduxState.users.users.find(
      (user) => user.id === reduxState.posts?.post?.userId
    ),
  };
};
