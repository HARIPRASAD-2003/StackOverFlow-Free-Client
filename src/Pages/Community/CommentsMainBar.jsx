import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import Avatar from '../../components/Avatar/Avatar';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Community.css';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShare, faComment, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { postComment, LikePost, deletePost, deleteComment, reportPost } from '../../actions/posts';
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';
import { faEllipsisV, faFlag } from '@fortawesome/free-solid-svg-icons';
import copy from 'copy-to-clipboard';

const CommentsMainBar = () => {
  const { id } = useParams();
  const url = 'http://localhost:3000';
  const postsList = useSelector((state) => state.postsReducer);
  const post = postsList?.data?.filter((post) => post._id === id)[0];
  const [addComment, setAddComment] = useState('');
  const comments = post?.comments?.sort((a, b) => (a.postedOn < b.postedOn ? 1 : -1));
  const User = useSelector((state) => state.currentUserReducer);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const users = useSelector((state) => state.usersReducer);
  const userPosted = users?.filter((user) => user._id === post?.userId)[0]?.name;

  const handleDelete = (commentId, noOfComments) => {
    dispatch(deleteComment(id, commentId, noOfComments - 1));
  };

  const handleReport = (commentId, noOfComments) => {
    console.log(commentId, noOfComments)
  }

  const handlePostComment = (e, commentLength) => {
    e.preventDefault();
    if (User === null) {
      alert('Login or Signup to add a comment');
      navigate('/Auth');
    } else {
      if (addComment === '') {
        alert('Enter a comment before submitting');
      } else {
        dispatch(
          postComment({
            id: post._id,
            noOfComments: commentLength + 1,
            commentBody: addComment,
            userCommented: User.result.name,
            userId: User?.result._id,
          })
        );
        setAddComment('');
      }
    }
  };

  const [showPostOptions, setShowPostOptions] = useState(false);

  const handlePostOptions = () => {
    setShowPostOptions(!showPostOptions);
  };

  const handleShare = ({base}) => {
    copy(url + base);
    console.log(url + base)
    alert('Copied url: ' + url + base);
  };

  const handleReportPost = () => {
    dispatch(reportPost(post?._id, User?.result?._id));
    console.log('post reported');
    handlePostOptions();
  }

  const handleDeletePost = () => {
    dispatch(deletePost(post._id, navigate));
    console.log('Post deleted!');
  };

  const handleLikes = () => {
    dispatch(LikePost(post?._id, User?.result?._id));
  };

  return (
    <div className='Main-bar'>
      <div className='main-bar-header'>
        <h1>Post Comments</h1>
      </div>
      <div className='display-post-container'>
        <div className='user-posted'>
          <Link to={`/Users/${post?.userId}`} style={{ textDecoration: 'none' }}>
            <Avatar backgroundColor='orange' px='5px' py='5px' borderRadius='2px'>
              {userPosted?.charAt(0).toUpperCase()}
            </Avatar>
          </Link>
          <h4>{userPosted}</h4>
          <h6>posted {moment(post?.postedOn).fromNow()}</h6>
          <div className='post-options'>
            <FontAwesomeIcon icon={faEllipsisV} onClick={handlePostOptions} />
            {showPostOptions && (
              <div className='post-options-menu'>
                <ul>
                  {/* {(post?.userId !== User?.result._id && false) && <li onClick={handleReportPost}> Report <FontAwesomeIcon icon={faFlag} /></li>} */}
                  {post?.userId === User?.result?._id && <li onClick={handleDeletePost}>Delete</li>}
                </ul>
              </div>
            )}
          </div>
        </div>
        <div className='post-body'>
          <h1>{post?.postTitle}</h1>
        </div>
        <div className='display-post-content'>
          <Slider slidesToShow={1} slidesToScroll={1} autoplay={false} autoplaySpeed={3000} arrows={true}>
            {post?.postContent.map((content, index) => {
              if (
                content.endsWith('.mp4') ||
                content.endsWith('.mov') ||
                content.endsWith('.avi') ||
                content.endsWith('.mkv') ||
                content.endsWith('.webm')
              ) {
                return <video key={index} src={content} controls style={{ width: '500px', height: '500px' }} />;
              } else {
                return <img key={index} src={content} alt={`${content}/${index + 1}`} style={{ width: '500px', height: '500px' }} />;
              }
            })}
          </Slider>
        </div>
        <div className='post-body'>
          <p>{post?.postBody}</p>
        </div>
        <div className='post-footer'>
          <div className='Like'>
            <FontAwesomeIcon
              icon={post?.likes?.includes(User?.result?._id) ? faHeartSolid : faHeartSolid}
              onClick={handleLikes}
              style={{ color: post?.likes?.includes(User?.result?._id) ? 'red' : 'gray' }}
            />
            <p>{post?.likes?.length} Likes</p>
          </div>
          <div className='Comment'>
            <FontAwesomeIcon icon={faComment} />
            <Link to={`/community/post/${post?._id}`} style={{ textDecoration: 'none' }}>
              <p>{post?.noOfComments} Comments</p>
            </Link>
          </div>
          <div className='Share'>
            <FontAwesomeIcon icon={faShare} onClick={() => {handleShare({base:`/community/post/${post?._id}`})}}/>
            <p>Share</p>
          </div>
        </div>
        <div className='comments'>
          <div className='add-comment'>
            <h3 style={{ margin: '2px' }}>Add a Comment</h3>
            <form onSubmit={(e) => handlePostComment(e, post?.comments?.length)} style={{ display: 'flex' }}>
              <textarea name='' id='' cols='70' rows='2' onChange={(e) => setAddComment(e.target.value)} value={addComment}></textarea>
              <br />
              <input type='submit' className='post-ans-btn' value='Post' />
            </form>
          </div>
          {post?.noOfComments !== 0 && (
            <div>
              <h3 style={{ margin: '2px' }}>All Comments</h3>
              {comments?.map((comment,index) => (
                <div className='top-comments' key={index}>
                  <div
                    className='comment-body'
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <p>{comment?.commentBody}</p>{' '}
                    <p>
                      {comment?.userId !== User?.result._id && (
                        <FontAwesomeIcon
                        onClick={() => handleReport(comment?._id, post?.noOfComments)}
                        icon={faFlag}
                        style={{ cursor: 'pointer' }}
                        />)}
                      {User?.result?._id === comment?.userId && (
                        <FontAwesomeIcon
                          onClick={() => handleDelete(comment?._id, post?.noOfComments)}
                          icon={faTrashAlt}
                          style={{ cursor: 'pointer' }}
                        ></FontAwesomeIcon>
                      )}
                    </p>
                  </div>
                  <div>
                    <h6>{moment(comment?.commentedOn).fromNow()}</h6>
                    <Link to={`/Users/${comment?.userId}`} style={{ textDecoration: 'none' }}>
                      <Avatar backgroundColor='orange' px='2px' py='2px' borderRadius='2px'>
                        {comment?.userCommented?.charAt(0).toUpperCase()}
                      </Avatar>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CommentsMainBar;
