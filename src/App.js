import { BrowserRouter as Router } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Routing from './Routing'
import { fetchAllQuestions } from './actions/question';
import { fetchAllUsers } from './actions/Users';
import { fetchAllPosts } from './actions/posts';
import CloudinaryContextProvider from './cloudinaryConfig';
import ScrollToTop from './ScrollToTop';


function App() {

    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(fetchAllQuestions());
      dispatch(fetchAllUsers());
      dispatch(fetchAllPosts());
      // dispatch();
    }, [dispatch])

    return (
      <CloudinaryContextProvider>
      <nav>
        <div className='App'>
          <Router>
            <ScrollToTop/>
            <Navbar />
            <Routing />
          </Router>
        </div>
      </nav>
      </CloudinaryContextProvider>
    );
}

export default App;
