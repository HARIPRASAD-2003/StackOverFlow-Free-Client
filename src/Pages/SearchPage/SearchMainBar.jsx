import React, {useState} from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { tagsList } from '../../components/Tags/Tag'
import QuestionList from '../../components/HomeMainbar/QuestionList'
import './SearchPage.css'
import UsersList from '../Users/UsersList'
import PostList from '../Community/PostList'
import TagsList from '../Tags/TagsList'
import '../Tags/Tags.css'

const SearchMainBar = () => {
    const location = useLocation()
    const QuestionsList = useSelector(state => state.questionsReducer)
    const PostsLists = useSelector(state => state.postsReducer)
    const UserList = useSelector(state => state.usersReducer)
    const { id } = useParams()
    console.log(id,location)
    const search  = id?.toLowerCase()
    const questionsTitleList = QuestionsList?.data?.filter((question) => question?.questionTitle?.toLowerCase()?.includes(search))
    const questionsBodyList = QuestionsList?.data?.filter((question) => question?.questionBody?.toLowerCase()?.includes(search))
    const questionsTagList = QuestionsList?.data?.filter((question) => question?.questionTags?.includes(search))
    const tagList = tagsList?.filter((tag) => tag?.TagName?.toLowerCase()?.includes(search))
    const questionsList = Array.from(new Set(questionsTitleList?.concat(questionsBodyList)?.concat(questionsTagList)))?.sort((a,b) => a?.askedOn < b?.askedOn ? 1 : -1)
    const postsList = PostsLists?.data?.filter((post) => post?.postTitle?.toLowerCase()?.includes(search))?.sort((a,b) => a?.postedOn < b?.postedOn ? -1 : 1)
    const usersList = UserList?.filter((user) => user?.name?.toLowerCase()?.includes(search))


    var User = useSelector((state) => (state.currentUserReducer))
    const navigate = useNavigate()

    const checkAuth = () => {
      if(User === null){
        alert("login or signup to ask a question")
        navigate("/Auth")
      }else{
        navigate("/AskQuestion")
      }
    }

    const [Switch, setSwitch] = useState('Questions')


  return (
    <div className='Main-bar'>
      <div className='main-bar-header'>
        <h1>Search Results</h1>
        <button onClick= {checkAuth} className='ask-btn'>Ask Questions</button>
      </div>
      {
        <>
        <div className='search-query'><h2>Search Query: </h2><p>{search}</p></div>
        <div className="search-results">
          <h6>Questions: {questionsList?.length}</h6>
          <h6>Tags: {tagList?.length}</h6>
          <h6>Posts: {postsList?.length}</h6>
          <h6>Users: {usersList?.length}</h6>
        </div>
        </>
      }
      <div className='results-header'>
        <div onClick={() => setSwitch('Questions')}><h4>Questions</h4></div>
        <div onClick={() => setSwitch('Tags')}><h4>Tags</h4></div>
        <div onClick={() => setSwitch('Posts')}><h4>Posts</h4></div>
        <div onClick={() => setSwitch('Users')}><h4>Users</h4></div>
      </div>
      { Switch === 'Questions' ?
        <div className='results-Body'>
        {
          questionsList.length === 0 ?
          <h1>No Questions Found!!!</h1> :
          <QuestionList questionsList={questionsList?.sort((a,b) => a?.askedOn < b?.askedOn ? 1 : -1)} />
        }
        </div>
        : Switch === 'Tags' ?
        <div className='results-Body'>
        {
          tagList.length === 0 ?
          <h1>No Tags Found!!!</h1> : 
          <div className="tag-container">
              <TagsList tagsList={tagList}/> 
          </div>
        }
        </div>
        : Switch === 'Posts' ?
        <div className='results-Body'>
        {
          postsList.length === 0 ?
          <h1>No Posts Found!!!</h1> :
          <PostList postsList={postsList} />
        }
        </div>
        : Switch === 'Users' &&
        <div className='results-Body'>
        {
          usersList.length === 0 ?
          <h1>No Users Found!!!</h1> :
          <UsersList users={usersList}/>
        }
        </div>
      }
    </div>
  )
}

export default SearchMainBar
