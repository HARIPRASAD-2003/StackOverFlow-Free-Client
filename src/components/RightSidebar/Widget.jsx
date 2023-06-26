import React from 'react'
import './RightSidebar.css'
import comment from '../../assets/comment-alt-solid.svg'
import pen from '../../assets/pen-solid.svg'
import blackLogo from '../../assets/blacklogo.svg'

const Widget = () => {
  return (
    <div className='widget'>
        <h4>The overflow blog</h4>
        <div className='right-sidebar-div-1'>
            <div className='right-sidebar-div-2'>
                <img src={pen} alt='pen' width='18' />
                <p>How to use marketing techniques to build a better resume</p>
            </div>
            <div className='right-sidebar-div-2'>
                <img src={pen} alt='pen' width='18' />
                <p>How the creator of Angular is dehydrating the web</p>
            </div>
        </div>
        <h4>Featured on Meta</h4>
        <div className='right-sidebar-div-1'>
            <div className='right-sidebar-div-2'>
                <img src={comment} alt='pen' width='18' />
                <p>AI/ML Tool examples part 3 - Title-Drafting Assistant</p>
            </div>
            <div className='right-sidebar-div-2'>
                <img src={comment} alt='pen' width='18' />
                <p>We are graduating the updated button styling for vote arrows</p>
            </div>
            <div className='right-sidebar-div-2'>
                <img src={blackLogo} alt='pen' width='18' />
                <p>Temporary policy: ChatGPT is banned</p>
            </div>
        </div>
        <h4>Hot Meta Posts</h4>
        <div className='right-sidebar-div-1'>
            <div className='right-sidebar-div-2'>
                <p>34</p>
                <p>Stack Overflow will be testing a title-drafting assistant, and we’d like your...</p>
            </div>
            <div className='right-sidebar-div-2'>
                <p>25</p>
                <p>We are graduating the "Related questions using Machine Learning" experiment</p>
            </div>
        </div>
    </div>
  )
}

export default Widget
