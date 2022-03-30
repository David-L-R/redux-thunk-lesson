import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchPost } from "../../store/posts/actions";
import { fetchUsers } from "../../store/users/actions";

export const Post = () => {
  const params = useParams();
  const dispatch = useDispatch();

  return (
    <div className='details-page'>
      <h1>Details</h1>
      {/*<h2>{post.title}</h2>
      <p>{post.body}</p>
      <p>{post.user?.name}</p>
      <Link to='/'>Back</Link> */}
    </div>
  );
};
