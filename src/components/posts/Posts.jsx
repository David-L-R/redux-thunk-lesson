import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../../store/posts/actions";
import { fetchUsers } from "../../store/users/actions";
import { Link } from "react-router-dom";
import { selectLoading, selectPosts } from "../../store/posts/selector";

export const Posts = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectPosts);
  const loading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchPosts);
    dispatch(fetchUsers);
  }, []);

  if (loading) return <div>LOADING</div>;

  return (
    <div className='posts-container'>
      <h1>Posts</h1>
      {posts.length !== 0 &&
        posts.map((post) => (
          <div key={post.id} className='post'>
            <h3>{post.title}</h3>
            <p>{post.user?.name}</p>
            <p>{post.body}</p>
            <Link to={`/posts/${post.id}`}>Details</Link>
          </div>
        ))}
    </div>
  );
};
