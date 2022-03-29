import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectPosts } from "../../store/posts/selector";
import { fetchPosts } from "../../store/posts/actions";
import { fetchUsers } from "../../store/users/actions";

export const Posts = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectPosts);

  useEffect(() => {
    dispatch(fetchPosts);
    dispatch(fetchUsers);
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.user?.name}</p>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};
