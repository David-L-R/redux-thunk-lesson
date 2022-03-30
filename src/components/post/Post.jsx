import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchPost, fetchPostWithComments } from "../../store/posts/actions";
import { selectPost } from "../../store/posts/selector";
import { fetchUsers } from "../../store/users/actions";

export const Post = () => {
  const params = useParams();
  const { id } = params;
  const dispatch = useDispatch();
  const post = useSelector(selectPost);

  useEffect(() => {
    dispatch(fetchPostWithComments(id));
    dispatch(fetchUsers);
  }, [dispatch, id]);

  return (
    <div className='details-page'>
      <h1>Details</h1>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <p>{post.user?.name}</p>
      <div className='comment-section'>
        <h2>Comments</h2>
        {post.comments.map((comment) => (
          <div>
            <h3>{comment.name}</h3>
            <p>{comment.body}</p>
            <p>{comment.user ? comment.user.name : comment.email}</p>
          </div>
        ))}
      </div>
      <Link to='/'>Back</Link>
    </div>
  );
};
