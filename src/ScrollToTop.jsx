import React, { useEffect } from 'react';
// import { useHistory } from 'react-router-dom';

const ScrollToTop = () => {
    useEffect(() => {
        const handleScrollToTop = () => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        };
    
        const handleRouteChange = () => {
          handleScrollToTop();
        };
    
        // Listen for route changes
        window.addEventListener('hashchange', handleRouteChange);
    
        // Clean up the listener when the component unmounts
        return () => {
          window.removeEventListener('hashchange', handleRouteChange);
        };
      }, []);
    
      return null;
    
};

export default ScrollToTop;
