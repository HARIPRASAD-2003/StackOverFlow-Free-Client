import * as api from '../api'

export const newPost = (newPostData, navigate) => async(dispatch) => {
    try{
          const { data } = await api.newPost(newPostData)
          dispatch({type: "ADD_POST", payload: data})
          dispatch(fetchAllPosts())
          navigate('/community')
    }catch(error){
          console.log(error.message)
    }
}

export const fetchAllPosts = () => async(dispatch) => {
    try{
          const { data } = await api.getAllPosts()
      //     console.log("fetchAllPosts",data)
          dispatch({type: "FETCH_ALL_POSTS", payload: data})
    }catch(error){
          console.log(error)
    }
}

export const postComment = (commentData) => async(dispatch) => {
      try {
            const { id, noOfComments, commentBody, userCommented, userId } = commentData
            // console.log("POST_COMMENT",noOfComments, commentBody, userCommented, userId)
            const { data } = await api.postComment(id, noOfComments, commentBody, userCommented, userId )
            // console.log("POST_COMMENT",data)
            dispatch({type: "POST_COMMENT", payload: data})
            dispatch(fetchAllPosts())
      } catch (error) {
            console.log(error)
      }
}

export const LikePost = (id, userId) => async(dispatch) => {
      try {
            const { data } = await api.LikePost(id, userId)
            dispatch(fetchAllPosts())
            console.log(data)
      } catch (error) {
            console.log(error)
      }
}

export const reportPost = (id, userId) => async(dispatch) => {
      try {
            const { data } = await api.reportPost(id, userId)
            dispatch(fetchAllPosts())
            console.log(data)
      } catch (error) {
            console.log(error)
      }
}

export const deletePost = (id, navigate) => async(dispatch) => {
      try {
            api.deletePost(id)
            dispatch(fetchAllPosts())
            navigate('/Community')
            // console.log(data)
      } catch (error) {
            console.log(error)
      }
}

export const deleteComment = (id, commentId, noOfComments) => async(dispatch) => {
      try {
            await api.deleteComment(id, commentId, noOfComments)
            dispatch(fetchAllPosts())
            // console.log(data)
      } catch (error) {
            console.log(error)
      }
}