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
