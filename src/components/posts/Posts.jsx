import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectPosts } from "../../store/posts/selector";
import { fetchPosts } from "../../store/posts/actions";

export const Posts = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectPosts);

  useEffect(() => {
    dispatch(fetchPosts);
  }, []);
  return (
    <div>
      <h1>Posts</h1>
    </div>
  );
};
