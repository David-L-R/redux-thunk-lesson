import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchPost } from "../../store/posts/actions";
import { selectPost } from "../../store/posts/selector";
import { fetchUsers } from "../../store/users/actions";
import { selectUsers } from "../../store/users/selector";

export const Post = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);
  const post = useSelector(selectPost);

  useEffect(() => {
    if (users.length === 0) {
      dispatch(fetchUsers);
    }
  }, [dispatch, users]);

  useEffect(() => {
    if (users.length !== 0) {
      dispatch(fetchPost(params.id));
    }
  }, [dispatch, users, params]);

  return (
    <div className='details-page'>
      <h1>Details</h1>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <p>{post.user?.name}</p>
      <Link to='/'>Back</Link>
    </div>
  );
};
