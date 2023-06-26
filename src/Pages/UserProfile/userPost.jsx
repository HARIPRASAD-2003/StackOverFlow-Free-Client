import React from 'react'

const userPost = ({post}) => {
  return (
    <div>
      {post.postContent.map((content, index) => {
                                    if (content.endsWith('.mp4') || content.endsWith('.mov') || content.endsWith('.avi') || content.endsWith('.mkv') || content.endsWith('.webm')) {
                                    return (
                                        <video key={index} src={content} controls style={{ width: "500px", height: "500px" }} />
                                    );
                                    } else {
                                    return (
                                        <img key={index} src={content} alt={`${content}/${index + 1}`} style={{ width: "500px", height: "500px" }} />
                                    );
                                    }
                                })}
    </div>
  )
}

export default userPost
