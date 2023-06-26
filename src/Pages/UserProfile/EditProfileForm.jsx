import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { updateProfile } from '../../actions/Users'
import { tagsList, TagsName } from '../../components/Tags/Tag'
// import { Image } from 'cloudinary-react';
import '../Tags/Tags.css'

import './UserProfile.css'

const EditProfileForm = ({ currentUser, setSwitch }) => {

    const [name, setName] = useState(currentUser?.name)
    const [about, setAbout] = useState(currentUser?.about)
    const [tags, setTags] = useState(currentUser?.tags)
    // const [userDP, setUserDP] = useState(currentUser?.result?.userDP)
    // const [file, setFile] = useState(null)
    const dispatch = useDispatch()
    console.log(tags)
    const [tagInput, setTagInput] = useState('');
    const [availableTags] = useState(tagsList); // Example list of available tags

    const handleInputChange = (e) => {
        setTagInput(e.target.value);
    };

    const handleKeyPress = (e) => {
        if (e.key === ' ' && tagInput) {
        if (TagsName.includes(tagInput)) {
          setTags([...tags, tagInput]);
          setTagInput('');
        } else {
            alert('Invalid tag. Please select from the available tags.');
        }
        }
    };

    const removetag = (tagToRemove) => {
      const updatedTags = tags.filter((tag) => tag !== tagToRemove);
      setTags(updatedTags);
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(tags.length === 0) {
      dispatch(updateProfile(currentUser?._id, { name, about, tags: currentUser?.tags }))
    }else{
      dispatch(updateProfile(currentUser?._id, { name, about, tags}))
    }
    setSwitch(false)
    // console.log(currentUser?.result?._id, name, about, tags )
    // console.log(currentUser?.result?._id, currentUser?.result?.name, currentUser?.result?.about, currentUser?.result?.tags )
  }
  // const handleImageChange = (event) => {
  //   const files = event.target.value[0];
  //   setFile(files);
  //   handleUpload();
  // };

  // const handleUpload = async() => {
  //   // const uploadedUrls = "";
  //   e.preventDefault();
  //   const formData = new FormData();
  //   formData.append('file', file);
  //   formData.append('upload_preset', 'fiv1grcc');

  //     const response = await fetch(
  //       `https://api.cloudinary.com/v1_1/dkmz5cbr1/image/upload`,
  //       {
  //         method: 'POST',
  //         body: formData,
  //       }
  //     );

  //     const data = await response.json();
  //     const uploadedUrls = data.secure_url;
  //     console.log(uploadedUrls)

  //     setUserDP(uploadedUrls);
  // };



  return (
    <div>
      <h1 className='edit-profile-title'>
        Edit Your Profile
      </h1>
      <h2 className="edit-profile-title-2">
        Public information
      </h2>
      <form className="edit-profile-form" onSubmit={handleSubmit}>
        {/* <label htmlFor="userDP">
            <h3>User Profile Picture</h3>
            <input id="new-post-file" type="file" onChange={handleImageChange} />
            <button onClick={handleUpload}>Upload</button>
            <div className='userDP-container'>
            {(userDP) &&
              <Image className="post-image" cloudName="dkmz5cbr1" publicId={userDP} width="300" height="200" />
            }
            </div>
        </label> */}
        <label htmlFor="name">
            <h3>Display name</h3>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
        </label>
        <label htmlFor="about">
            <h3>About me</h3>
            <textarea id='about' cols="30" rows="10" value={about} onChange={(e) => setAbout(e.target.value)}></textarea>
        </label>
        <label htmlFor="tags">
            <h3>Watched Tags</h3>
            <p>Add tags separated by space</p>
            <div>{
                tags.map((tag, index) => (
                <h4 key={index} className='tag-name'>{tag}<button onClick={() => {removetag(tag)}} style={{backgroundColor: "transparent", border: "transparent", cursor: 'pointer'}}>X</button></h4>
                ))
            }</div>
            <input type="text" id='tags' onChange={handleInputChange} onKeyPress={handleKeyPress} value={tagInput}/>
            <div className='tags-list-container'>
                    {availableTags.filter((tag) => tag.TagName.startsWith(tagInput)).map((tag, index) => (
                        <div className='tag' onClick={() => {setTagInput(tag.TagName)}} key={index}><h5>{tag.TagName}</h5><br /><p className='tag-desc'>{tag.TagDesc}</p></div>
                    ))}
                    </div>
        </label><br />
        <input type="submit" value="Save profile" className='user-submit-btn'/>
        <button type='button' className='user-cancel-btn' onClick={() => setSwitch(false)}>Cancel</button>
      </form>
    </div>
  )
}

export default EditProfileForm
