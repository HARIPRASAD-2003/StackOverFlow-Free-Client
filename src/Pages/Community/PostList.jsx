import React from 'react'
import Posts from './Posts'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBox } from '@fortawesome/free-solid-svg-icons';


const PostList = (postsList) => {
  console.log(postsList)
  return (
    <>
      { postsList.postsList.length === 0 ?
      <div className="no-posts-container">
        <FontAwesomeIcon icon={faBox} className="no-posts-icon" />
        <p>No posts found</p>
      </div>
      :
        postsList.postsList.map((post) => (
            <Posts post={post} key={post._id} />
        ))
      }
    </>
  )
}

export default PostList
