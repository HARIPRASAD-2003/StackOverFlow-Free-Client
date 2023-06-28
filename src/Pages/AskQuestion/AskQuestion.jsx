import React, { useState } from 'react'
import './AskQuestion.css'
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { askQuestion } from '../../actions/question'
import { tagsList, TagsName } from "../../components/Tags/Tag";


const AskQuestion = () => {

    const [questionTitle, setQuestionTitle] = useState('')
    const [questionBody, setQuestionBody] = useState('')
    // const [questionTags, setQuestionTags] = useState('')

    const dispatch = useDispatch()
    const User = useSelector((state) => (state.currentUserReducer))
    const navigate = useNavigate()

    const [questionTags, setQuestionTags] = useState([]);
    const [tagInput, setTagInput] = useState('');
    const [availableTags] = useState(tagsList); // Example list of available tags

    const handleInputChange = (e) => {
        if(e.target.value !== " "){
            setTagInput(e.target.value);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === ' ' && tagInput) {
        if (TagsName.includes(tagInput)) {
            setQuestionTags([...questionTags, tagInput]);
            setTagInput('');
        } else {
            alert('Invalid tag. Please select from the available tags.');
        }
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        if(questionBody.length !== 0 && questionTitle.length !== 0 && questionTags.length !== 0) {
            console.log({questionBody, questionTags, questionTitle})
            dispatch(askQuestion({questionTitle, questionBody, questionTags, userPosted: User.result.name, userId: User?.result?._id}, navigate))
        } else {
            alert("Invalid question!!! PLease do fill out all the fields...");
        }
    }

    const removetag = (tagToRemove) => {
        const updatedTags = questionTags.filter((tag) => tag !== tagToRemove);
        setQuestionTags(updatedTags);
    }

    const handleEnter = (e) =>{
        if(e.key === 'Enter'){
            setQuestionBody(questionBody + "\n")
        }
    }

  return (
    <div className='ask-question'>
        <div className="ask-ques-container">
            <h1>Ask a public Question</h1>
            <form onSubmit={handleSubmit}>
                <div className="ask-form-container">
                    <label htmlFor="ask-ques-title">
                        <h4>Title</h4>
                        <p>Be Specific and imagine you're asking a question to another person</p>
                        <input type="text" id="ask-ques-title" onChange={(e) => {setQuestionTitle(e.target.value)}} placeholder='e.g. What is a function in javascript?'/>
                    </label>
                    <label htmlFor="ask-ques-body">
                        <h4>Body</h4>
                        <p>Include all the information someone would need to answer your question</p>
                        <textarea name="ask-ques-body" id="ask-ques-body" onChange={(e) => {setQuestionBody(e.target.value)}} cols="30" rows="10" onKeyPress={handleEnter}></textarea>
                    </label>
                    <label htmlFor="ask-ques-tags">
                    <h4>Tags</h4>
                    <p>Add upto 5 tags to describe what your question is about</p>
                    <div>{
                        questionTags.map((tag, index) => (
                        <h4 key={index} className='tag-name'>{tag}<button onClick={() => {removetag(tag)}} style={{backgroundColor: "transparent", border: "transparent"}}>X</button></h4>
                    ))}
                    </div>
                    <input type="text" id="ask-ques-tags" value={tagInput} onChange={handleInputChange} onKeyPress={handleKeyPress} placeholder="Enter tags" />
                    <div className='tags-list-container'>
                    {availableTags.filter((tag) => tag.TagName.startsWith(tagInput)).map((tag, index) => (
                        <div className='tag' onClick={() => {setTagInput(tag.TagName)}} key={index}><h5>{tag.TagName}</h5><br /><p className='tag-desc'>{tag.TagDesc}</p></div>
                    ))}
                    </div>
                    </label>
                </div>
                <input type="submit" value='Post your question' className='review-btn'/>
            </form>
        </div>
    </div>
  )
}

export default AskQuestion
