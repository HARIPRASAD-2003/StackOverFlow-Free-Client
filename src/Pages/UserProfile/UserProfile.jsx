import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBirthdayCake, faPen, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import moment from 'moment'

import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import Avatar from '../../components/Avatar/Avatar'
import { updateFriends } from '../../actions/Users'
import EditProfileForm from './EditProfileForm'
import ProfileBio from './ProfileBio'
import './UserProfile.css'

const UserProfile = () => {
    const { id } = useParams();
    const users = useSelector((state) => state.usersReducer);
    console.log(users)
    const userloggedin = useSelector((state) => state.currentUserReducer)
    const currentProfile = users?.filter((user) => user?._id === id);
    const currentUser = users?.filter((user) => user._id === userloggedin?.result?._id)[0]
    // const currentUser = useSelector((state) => state.currentUserReducer)
    console.log('currentUser',currentUser,"userloggedin",userloggedin)
    const dispatch = useDispatch();
    const [Switch, setSwitch] = useState(false);
    const [isFollowing, setIsFollowing] = useState(false);
    const navigate = useNavigate()

    const checkAuth = () => {
        if(!currentUser){
          alert("login or signup to follow a user")
          navigate("/Auth")
      }
    }
    // console.log(currentProfile[0])
  
    useEffect(() => {
      if (currentUser?.friends) {
        setIsFollowing(currentUser?.friends?.some((user) => user?.userId === id));
      }
    }, [currentUser, id]);
  
    const addFriend = () => {
        checkAuth();
        if(currentUser){
          const updatedFriends = [...currentUser?.friends,
            {userName: currentProfile[0]?.name, userId: id }];
          dispatch(updateFriends(currentUser?._id, { friends: updatedFriends }));
          setIsFollowing(true);}
    };
  
    const removeFriend = () => {
      checkAuth();
        if(currentUser){
      const updatedFriends = currentUser?.friends.filter((user) => user.userId !== id);
      dispatch(updateFriends(currentUser?._id, { friends: updatedFriends }));
      setIsFollowing(false);}
    };
  
    return (
      <div className="home-container-1">
        <LeftSidebar />
        <div className="home-container-2" style={{ width: '100%' }}>
          <section>
            <div className="user-details-container">
              <div className="user-details">
                <Avatar backgroundColor="purple" color="white" borderRadius="2px" fontSize="50px"  px="40px" py="30px" >
                  {currentProfile[0]?.name.charAt(0).toUpperCase()}
                </Avatar>
                <div className="user-name">
                  <h1>{currentProfile[0]?.name}</h1>
                  {/* <h1>{currentProfile[0]?.email}</h1> */}
                  <p>
                    <FontAwesomeIcon icon={faBirthdayCake} /> Joined{' '}
                    {moment(currentProfile[0]?.joinedOn).fromNow()}{' '}
                  </p>
                  {currentUser?._id === id ? (
                  <></>
                ) : (
                  <>
                    {isFollowing ? (
                      <button onClick={removeFriend} className='follow-btn'>Unfollow</button>
                    ) : (
                      <button onClick={addFriend} className='follow-btn'>Follow <FontAwesomeIcon icon={faUserPlus} /></button>
                    )}
                  </>
                )}
                </div>
              </div>
              <div>
                {currentUser?._id === id && (
                  <button type="button" onClick={() => setSwitch(true)} className="edit-profile-btn">
                    <FontAwesomeIcon icon={faPen} /> Edit Profile
                  </button>
                )}
              </div>
            </div>
            <>
              {Switch ? (
                <EditProfileForm currentUser={currentUser} setSwitch={setSwitch} />
              ) : (
                <ProfileBio currentProfile={currentProfile} />
              )}
            </>
          </section>
        </div>
      </div>
    );
  };
  
  export default UserProfile;
  

  

//   return (
//     <div className="home-container-1">
//       <LeftSidebar />
//       <div className="home-container-2" style={{ width: '100%' }}>
//         <section>
//           <div className="user-details-container">
//             <div className="user-details">
//               <Avatar backgroundColor="purple" color="white" borderRadius="2px" fontSize="50px" px="40px" py="30px" >
//                 {currentProfile[0]?.name.charAt(0).toUpperCase()}
//               </Avatar>
//               <div className="user-name">
//                 <h1>{currentProfile[0]?.name}</h1>
//                 <p>
//                   <FontAwesomeIcon icon={faBirthdayCake} /> Joined{' '}
//                   {moment(currentProfile[0]?.joinedOn).fromNow()}{' '}
//                 </p>
//               </div>
//               {currentUser?.result?._id === id || currentUser?.result?._id === null ? (
//                 <></>
//               ) : (
//                 <>
//                   {currentUser?.result?.friends.filter((user) => user.userId === id).length === 1 ? (
//                     <button onClick={removeFriend}>Unfollow</button>
//                   ) : (
//                     <button onClick={addFriend}>Follow</button>
//                   )}
//                 </>
//               )}
//               {currentUser?.result.friends.map((user) => (
//                 <p key={user.userId} className='ans-tags'>{user.userName}</p>
//               ))}
//             </div>
//             <div>
//               {currentUser?.result?._id === id && (
//                 <button type="button" onClick={() => setSwitch(true)} className="edit-profile-btn">
//                   <FontAwesomeIcon icon={faPen} /> Edit Profile
//                 </button>
//               )}
//             </div>
//           </div>
//           <>
//             {Switch ? (
//               <EditProfileForm currentUser={currentUser} setSwitch={setSwitch} />
//             ) : (
//               <ProfileBio currentProfile={currentProfile} />
//             )}
//           </>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default UserProfile;


