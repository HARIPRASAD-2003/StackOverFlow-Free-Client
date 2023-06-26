import React from 'react'
import './UserProfile.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';



const ProfileBio = ({currentProfile}) => {
    console.log(currentProfile)
    // const navigate = Navigate();
    const postsList = useSelector(state => state.postsReducer)
    const user_posts = postsList?.data?.filter((post) => post?.userId === currentProfile[0]?._id).sort((a,b) => a?.postedOn < b?.postedOn ? 1 : -1)
  return (
    <div>
        <div>
            {
                currentProfile[0]?.tags.length !== 0 ? (
                    <>
                        <h4>Tags Watched</h4>
                        <div style={{display: "flex"}}>{
                            currentProfile[0]?.tags.map((tag) => (
                                <p key={tag}><Link to={`/tag/${tag}`} className='ans-tags'>{tag}</Link></p>
                            ))
                        }</div>
                    </>
                ) : (
                    <p> 0 Tags Watched</p>
                )
            }
        </div>
        <div>
            {
                currentProfile[0]?.about ? (
                    <>
                    <h4>About</h4>
                    <p>{currentProfile[0]?.about}</p>
                    </>
                ) : (
                    <p>No Bio Found</p>
                )
            }
        </div><div><h3>POST</h3></div>
        <div className='user-post'>
            {   user_posts?.length !== 0 ?
                user_posts?.map((post) => (<Link to={`/community/user/post/${currentProfile[0]?._id}`} key={post._id} style={{textDecoration: 'none'}}>
                    <div className='posts'>
                        {   post?.postContent?.length !== 0 ?
                            <Slider slidesToShow={1}  slidesToScroll={1}  autoplay={false}  autoplaySpeed={3000}  arrows={true} >
                            {
                                post?.postContent.map((content, index) => {
                                    if (content.endsWith('.mp4') || content.endsWith('.mov') || content.endsWith('.avi') || content.endsWith('.mkv') || content.endsWith('.webm')) {
                                    return (
                                        <video key={index} src={content} controls style={{ width: "500px", height: "500px" }} />
                                    );
                                    } else {
                                    return (
                                        <img key={index} src={content} alt={`${content}/${index + 1}`} style={{ width: "500px", height: "500px" }} />
                                    );
                                    }
                                })
                            }
                            </Slider>
                            :
                            <h4>{post?.postTitle}</h4>
                        }
                    </div></Link>
                ))
                :
                <h4 className='No-post'>No Posts</h4>
            }
        </div>
    </div>
  )
}

export default ProfileBio
