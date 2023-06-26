import React from 'react'
import { Link } from 'react-router-dom'
import './Tags.css'
const Tag = ({tag}) => {
  return (
    <div className="tag">
      <Link to={`/tag/${tag.TagName}`}><h5>{tag.TagName}</h5></Link>
      <p>{tag.TagDesc}</p>
    </div>
  )
}

export default Tag
