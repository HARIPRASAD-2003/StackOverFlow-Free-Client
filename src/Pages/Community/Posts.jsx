import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import moment from 'moment'
import Avatar from '../../components/Avatar/Avatar'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Community.css'
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShare, faComment, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
// import Comments from './Comments';
// import AddComment from './AddComment';

import { postComment, LikePost, deletePost, reportPost,   } from "../../actions/posts";
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';
// import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';
import { faEllipsisV, faFlag  } from '@fortawesome/free-solid-svg-icons';
import copy from 'copy-to-clipboard';


// ...







const Posts = ({post}) => {

  const location = useLocation();
  const url = 'http://localhost:3000';
  const [addComment, setAddComment] = useState('')
  const comment = post?.comments.sort((a,b) => a.postedOn < b.postedOn ? 1 : -1)[0];
  const User = useSelector(state => state.currentUserReducer)
  const users = useSelector(state => state.usersReducer)
  const userPosted = users?.filter((user) => user?._id === post?.userId)[0]?.name
  const admin = users?.filter((user) => user?._id === "649823141238b69f8f91b779")[0]

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const isImage = post?.postContent?.length !== 0;

  // setIsImage(post?.postContent !== [])

  const handlePostComment = (e, commentLength) => {
    e.preventDefault()
    if(User === null){
        alert('Login or Signup to add a comment')
        navigate('/Auth')
    }else{
        if(addComment === ''){
            alert('Enter an Comment before submitting')
        }else{
          // console.log(post?._id)
            dispatch(postComment({ id: post?._id, noOfComments: commentLength + 1, commentBody: addComment, userCommented: User.result.name, userId: User?.result._id }))
            setAddComment('')
        }
    }
}




  const [showPostOptions, setShowPostOptions] = useState(false);
  // const [savePost, setSavePost] = useState(false);

  // Function to handle post options menu toggle
  const handlePostOptions = () => {
    setShowPostOptions(!showPostOptions);
  };

  const handleReportPost = () => {
    dispatch(reportPost(post?._id, User?.result?._id));
    console.log('post reported');
    handlePostOptions();
  }

  // Function to handle delete post action
  const handleDeletePost = () => {
    dispatch(deletePost(post?._id, navigate))
    console.log('Post deleted!');
    handlePostOptions();

  };

  const handleShare = ({base}) => {
    copy(url + base);
    console.log(url + location.pathname, base)
    alert('Copied url: ' + url + base);
  };


 const handleLikes = () => {
  dispatch(LikePost(post?._id, User?.result?._id))
 }
  return (
    <div className='display-post-container'>
        <div className="user-posted">
          <Link to={`/Users/${post?.userId}`} style={{textDecoration: 'none'}}>
            <Avatar backgroundColor="orange" px='5px' py='5px' borderRadius='2px'>{userPosted?.charAt(0)?.toUpperCase()}</Avatar>
            </Link>
            <h4>{userPosted}</h4>
            <h6>posted {moment(post?.postedOn)?.fromNow()}</h6>
            <div className="post-options">
            <FontAwesomeIcon icon={faEllipsisV} onClick={handlePostOptions} />
            {showPostOptions && (
              <div className="post-options-menu">
                <ul>
                  { post?.userId !== User?.result._id && <li onClick={handleReportPost}> Report <FontAwesomeIcon icon={faFlag} /></li> }
                  { (post?.userId === User?.result?._id || User?.result?._id === admin?._id) && <li onClick={handleDeletePost}> Delete <FontAwesomeIcon icon={faTrashAlt} /> </li> }
                </ul>
              </div>
            )}
            </div>
        </div>
        {
        isImage && <div className='display-post-content'>
          <Slider slidesToShow={1}  slidesToScroll={1}  autoplay={false}  autoplaySpeed={3000}  arrows={true} >
          {post?.postContent?.map((content, index) => {
            if (content?.endsWith('.mp4') || content?.endsWith('.mov') || content?.endsWith('.avi') || content?.endsWith('.mkv') || content?.endsWith('.webm')) {
              return (
                <video key={index} src={content} controls style={{ maxWidth: "500px", maxHeight: "500px" }} />
              );
            } else {
              return (
                <img key={index} src={content} alt={`${content}/${index + 1}`} style={{ maxWidth: "500px", maxHeight: "500px" }} />
              );
            }
          })}
        </Slider>

        </div>
        }
        {
          !isImage && <div className='post-body'>
            <h1>{post?.postTitle}</h1>
          </div>
        }
        <div className="post-body">
            <p>{post?.postBody}</p>
        </div>
        <div className="post-footer">
            <div className='Like' >
              <FontAwesomeIcon icon={post?.likes?.includes(User?.result?._id) ? faHeartSolid : faHeartSolid} onClick={handleLikes} style={{ color: post?.likes?.includes(User?.result._id) ? 'red' : 'gray' }}/>
              <p>{post?.likes?.length} Likes </p>
            </div>

            <div className='Comment'><FontAwesomeIcon icon={faComment} /><Link to={`/community/post/${post?._id}`} style={{textDecoration: 'none'}}><p>{post?.noOfComments} Comments</p></Link></div>

            <div className='Share' ><FontAwesomeIcon icon={faShare} onClick={() => {handleShare({base:`/community/post/${post?._id}`})}}/><p> Share</p></div>
        </div>
        <div className="comments">
        { (post?.noOfComments !== 0) && <div>
          <h3 style={{margin: '2px'}}>Top Comments</h3>
              <div className='top-comments'>
                  <div className='comment-body'>
                    <p>{post?.comments?.sort((a,b) => a.postedOn < b.postedOn ? 1 : -1)[0]?.commentBody}</p>
                  </div>
                  <div>
                    <h6>{moment(comment?.commentedOn).fromNow()}</h6>
                    <Link to={`/Users/${comment?.userId}`} style={{textDecoration: 'none'}}>
                      <Avatar backgroundColor="orange" px='2px' py='2px' borderRadius='2px'>{comment?.userCommented.charAt(0).toUpperCase()}</Avatar>
                    </Link>
                  </div>
              </div></div>
        }
              <div className='add-comment'>
                <h3 style={{margin: '2px'}}>Add a Comment</h3>
                <form onSubmit={(e) => {handlePostComment(e, post?.comments.length) }} style={{display: 'flex'}}>
                    <textarea name="" id="" cols="70" rows="2" onChange={e => setAddComment(e.target.value)} value={addComment}></textarea><br />
                    <input type="submit" className='post-ans-btn' value='Post'/>
                </form>
              </div>
        </div>
    </div>
  )
}

export default Posts
