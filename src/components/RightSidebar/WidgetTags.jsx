import React from 'react'
import {TagsName} from '../Tags/Tag'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const WidgetTags = () => {

  const User = useSelector(state => state.currentUserReducer)
  const users = useSelector(state => state.usersReducer)
  const currentUser = users.filter((user) => user._id === User?.result._id)

  return (
    <div className='widget-tags'>
      <h4>Watched tags</h4>
      <div className='widget-tags-div'>
        { currentUser.length === 0 ?
          TagsName.map((tag) => (
            <Link to={`/tag/${tag}`} style={{textDecoration: 'none'}} key={tag}><p>{tag}</p></Link>
          ))
          :
          currentUser[0]?.tags.length === 0 ?
          <Link to={`/Users/${User?.result?._id}`} style={{textDecoration: 'none', color: 'black'}}><h4> No watched tags </h4></Link>
          :
          currentUser[0]?.tags.map((tag) => (
            <Link to={`/tag/${tag}`} style={{textDecoration: 'none'}} key={tag}><p>{tag}</p></Link>
          ))
        }
      </div>
    </div>
  )
}

export default WidgetTags
