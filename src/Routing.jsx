import React from 'react'

import { Routes, Route} from 'react-router-dom'

import Home from './Pages/Home/Home'
import Auth from './Pages/Auth/Auth'
import Questions  from './Pages/Questions/Questions'
import AskQuestion from './Pages/AskQuestion/AskQuestion'
import DisplayQuestions from './Pages/Questions/DisplayQuestions'
import Tags from './Pages/Tags/Tags'
import Users from './Pages/Users/Users'
import UserProfile from './Pages/UserProfile/UserProfile'
import TagQuestions from './Pages/Tags/TagQuestions'
import Community from './Pages/Community/Community'
import NewPost from './Pages/NewPost/NewPost'
import CommentsPage from './Pages/Community/CommentsPage'
import UserPost from './Pages/Community/userPost'
import SearchPage from './Pages/SearchPage/SearchPage'
import AboutPage from './Pages/About/AboutPage'
import ChatBotpage from './Pages/ChatBotPage/ChatBotpage'
import ProductsPage from './Pages/ProductsPage/ProductsPage'
import EmailConfirmationPage from './Pages/Verification/EmailConfirmationPage'
import OTPConfirmationPage from './Pages/Verification/OTPConfirmationPage'
import FeeBackPage from './Pages/About/FeeBackPage'
import ResetEmailConfirmationPage from './Pages/forgotPassword/EmailConfirmationPage'
import MailSent from './Pages/forgotPassword/MailSent'
import ForgotPassword from './Pages/forgotPassword/ForgotPassword'


const Routing = () => {
  return (
    <Routes>
      <Route path='/' Component={Home}/>
      <Route path='/Auth' Component={Auth} />
      <Route path='/Auth/login' Component={() => (<> <Auth val='false'/> </>) } />
      <Route path='/Auth/signup' Component={() => (<> <Auth val='true'/> </>) }/>
      <Route path='/Questions' Component={Questions}/>
      <Route path='/AskQuestion' Component={AskQuestion}/>
      <Route path='/Questions/:id' Component={DisplayQuestions}/>
      <Route path='/Tags' Component={Tags} />
      <Route path='/Users' Component={Users}/>
      <Route path='/Users/:id' Component={UserProfile}/>
      <Route path='/tag/:id' Component={TagQuestions}/>
      <Route path='/Community' Component={Community}/>
      <Route path='/NewPost' Component={NewPost}/>
      <Route path='/community/post/:id' Component={CommentsPage}/>
      <Route path='/community/user/post/:id' Component={UserPost}/>
      <Route path='/Search/:id' Component={SearchPage}/>
      <Route path='/About' Component={AboutPage}/>
      <Route path='/ChatBot' Component={ChatBotpage}/>
      <Route path='/Products' Component={ProductsPage}/>
      <Route path='/Verify-email' Component={EmailConfirmationPage}/>
      <Route path='/Verify-OTP' Component={OTPConfirmationPage}/>
      <Route path='/FeedBack-Form' Component={FeeBackPage}/>
      <Route path='/reset-verify' Component={ResetEmailConfirmationPage}/>
      <Route path='/mail-sent' Component={MailSent}/>
      <Route path='/reset-password/:id' Component={ForgotPassword}/>


    </Routes>
  )
}

export default Routing
