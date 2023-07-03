
import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import './NewPost.css'
import { newPost } from "../../actions/posts";
import { useNavigate } from 'react-router-dom';
import { Image, Video } from 'cloudinary-react';


const NewPost = () => {
  const [postBody, setPostBody] = useState('');
  const [postTitle, setPostTitle] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const User = useSelector((state) => (state.currentUserReducer));

  const [selectedFiles, setSelectedFiles] = useState([]);
  const [uploadedContentUrls, setUploadedContentUrls] = useState([]);

  const handleContentChange = (event) => {
    const files = Array.from(event.target.files);
    setSelectedFiles([...selectedFiles, ...files]);
    handleUpload();
  };

  const handleUpload = async () => {
    const uploadedUrls = [];

    for (const file of selectedFiles) {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', 'fiv1grcc');

      const response = await fetch(
        `https://api.cloudinary.com/v1_1/dkmz5cbr1/${file.type.includes('video') ? 'video' : 'image'}/upload`,
        {
          method: 'POST',
          body: formData,
        }
      );

      const data = await response.json();
      uploadedUrls.push(data.secure_url);
    }

    setUploadedContentUrls(uploadedUrls);
  };


  const handleEnter = (e) =>{
    if(e.key === 'Enter'){
      setPostBody(postBody + "\n")
    }
}


  const handleSubmit = (e) => {
    e.preventDefault();
    if(postTitle === ''){
      alert("Enter post TITLE...!!")
    } else {
    dispatch(newPost({
      postTitle: postTitle,
      postBody: postBody,
      postContent: uploadedContentUrls,
      userPosted: User?.result.name,
      userId: User?.result?._id
    }, navigate));
  }
  };

  return (
    <div style={{ padding: "50px" }}>
      <div className='post-question'>
        <div className="ask-ques-container">
          <h1>Add a public post</h1>
          <form onSubmit={handleSubmit}>
            <div className="ask-form-container">
              <label htmlFor="new-post-title">
                <h4>Title</h4>
                <p>Be specific on Giving Title to your post</p>
                <input type="text" id="new-post-title" onChange={(e) => { setPostTitle(e.target.value) }} />
              </label>
              <label htmlFor="new-post-file">
                <h4>Content</h4>
                <p>Upload images or videos. Click Upload to add your content to the post.</p>
                <input id="new-post-file" type="file" onChange={handleContentChange} multiple />
                <input type="button" value='Upload' className='review-btn' onClick={handleUpload} style={{width: 'auto', margin: '5px'}}/>
                <div className='post-media-container' style={{display: 'flex'}}>
                  {uploadedContentUrls.map((url, index) => (
                    url.includes('video') ? (
                        <Video className="post-video" key={index} cloudName="dkmz5cbr1" publicId={url} controls width="300" height="200" />
                    ) : (
                        <Image className="post-image" key={index} cloudName="dkmz5cbr1" publicId={url} width="300" height="200" />
                    )
                  ))}
                </div>
              </label>
              <label htmlFor="ask-ques-body">
                <h4>Body</h4>
                <p>Description for your post</p>
                <textarea name="ask-ques-body" id="ask-ques-body" onChange={(e) => {setPostBody(e.target.value) }} onKeyDown={handleEnter} cols="30" rows="10"></textarea>
              </label>
            </div>
            <input type="submit" value='Post' className='review-btn' />
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewPost;

