export const selectPosts = (state) => {
  return state.posts.posts.map((post) => {
    return {
      ...post,
      user: state.users.users.find((user) => user.id === post.userId),
    };
  });
};

export const selectLoading = (state) => {
  return state.posts.loading;
};

export const selectPost = (state) => ({
  ...state.posts.post,
  comments: state.posts.post.comments.map((comment) => ({
    ...comment,
    user: state.users.users.find((user) => user.email === comment.email), //find the user info by comparing emails!
  })),
  user: state.users.users.find((user) => user.id === state.posts.post.userId), //find a user by comparing ids!
});
