import instance from '../../utils/api';
import './commentlist.css';

const CommentList = ({ comments, token, fetchCommentData }) => {
  console.log(comments);

  const verifiedComment = comments.filter((c) => c.isVerified === true);
  const unVerifiedComment = comments.filter((c) => c.isVerified === false);
  console.log(verifiedComment);
  const handleApprove = async (id) => {
    try {
      const { data } = await instance.put(
        `user/${id}`,
        {
          isVerified: true,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('blogToken')}`,
          },
        }
      );
      console.log(data);
      await fetchCommentData();
    } catch (error) {
      console.log(error);
    }
  };
  const handleReject = async (id) => {
    try {
      const { data } = await instance.delete(
        `user/${id}`,

        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('blogToken')}`,
          },
        }
      );

      await fetchCommentData();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="user-comment-form">
      <h2>{verifiedComment.length} Comments</h2>

      <ul>
        {verifiedComment.map((comment) => {
          return (
            <>
              <div className="user-comment-show">
                <img src="/avatar-default-svgrepo-com.svg" alt="User" />
                <div className="user-comment-show-horizontal">
                  <h2>{comment.name}</h2>
                  <li>{comment.comment}</li>
                </div>
              </div>
              <hr
                style={{
                  width: '100%',
                  backgroundColor: 'red',
                  border: '0.5px solid lightgray',
                  maxWidth: '1000px',
                }}
              />
            </>
          );
        })}
      </ul>
      <div style={{ height: '100px' }} />
      {/* <hr />
      <hr /> */}

      {token && (
        <ul>
          {unVerifiedComment.map((comment) => {
            return (
              <>
                <div className="user-comment-show">
                  <img src="/avatar-default-svgrepo-com.svg" alt="User" />
                  <div className="user-comment-show-horizontal">
                    <h2>{comment.name}</h2>
                    <li>{comment.comment}</li>
                  </div>
                </div>
                <div className="form-btn-input">
                  <button
                    className="btn-accept"
                    onClick={() => handleApprove(comment._id)}
                  >
                    Approve
                  </button>
                  <button
                    className="btn-reject"
                    onClick={() => handleReject(comment._id)}
                  >
                    Reject
                  </button>
                </div>
              </>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default CommentList;
