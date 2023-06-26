import React from 'react'
import { useParams } from 'react-router-dom'
import '../../components/HomeMainbar/HomeMainbar.css'
// import QuestionList from '../../components/HomeMainbar/QuestionList'
import PostList from "./PostList"
import { useSelector } from 'react-redux'

const UserPostMainBar = () => {
    const postsList = useSelector(state => state.postsReducer)
    console.log(postsList)
    const { id } = useParams()



  return (
    <div className='Main-bar'>
      <div className='main-bar-header'>
        <h1>User Posts</h1>
      </div>
      <div>
        {
          postsList?.data === null ?
          <h1>Loading...</h1> :
          <>
            <PostList postsList={postsList?.data?.filter((post) => post?.userId === id).sort((a,b) => a?.postedOn < b?.postedOn ? 1 : -1)} />
          </>
        }
      </div>
    </div>
  )
}

export default UserPostMainBar