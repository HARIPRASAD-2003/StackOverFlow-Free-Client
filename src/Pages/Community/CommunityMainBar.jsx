import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../../components/HomeMainbar/HomeMainbar.css'
// import QuestionList from '../../components/HomeMainbar/QuestionList'
import PostList from "./PostList"
import { useSelector } from 'react-redux'

const CommunityMainBar = () => {
    const postsList = useSelector(state => state.postsReducer)
    // console.log(postsList)

    var currentUser = useSelector((state) => (state.currentUserReducer))
    const users = useSelector((state) => state.usersReducer)
    var User = users?.filter((user) => user._id === currentUser?.result._id)
    const navigate = useNavigate()
    // console.log(User)

    const checkAuth = () => {
      if(User.length === 0){
        alert("login or signup to ask a question")
        navigate("/Auth")
      }else{
        navigate("/NewPost")
      }
    }


  return (
    <div className='Main-bar'>
      <div className='main-bar-header'>
        <h1>Latest Posts</h1>
        <button onClick= {checkAuth} className='ask-btn'>New Post</button>
      </div>
      <div>
        {
          postsList.data === null ?
          <h1>Loading...</h1> :
          <>
          { User === [] ?
            <PostList postsList={postsList?.data?.sort((a,b) => a.postedOn < b.postedOn ? 1 : -1)} />
            : User[0]?.friends.length === 0 ?
            <PostList postsList={postsList?.data?.sort((a,b) => a.postedOn < b.postedOn ? 1 : -1)} />
            :
            <PostList postsList={postsList?.data?.filter((post) => User[0]?.friends.map((user) => user.userId).includes(post.userId)).sort((a,b) => a.postedOn < b.postedOn ? 1 : -1).concat(postsList.data.sort((a,b) => a.postedOn < b.postedOn ? 1 : -1))} />
            }
          </>
        }
      </div>
    </div>
  )
}

export default CommunityMainBar
