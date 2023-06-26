import React from 'react'
// import { useSelector } from 'react-redux'

const Avatar = ({children, backgroundColor, py, px, color, borderRadius, fontSize, cursor}) => {

  const style = {
    backgroundColor,
    padding: `${py} ${px}`,
    color: color || 'Black',
    borderRadius,
    fontSize,
    textAlign: "center",
    cursor: cursor || null,
    textDecoration: "none"
  }
  // const dpStyle = {
  //   padding: `${py} ${px}`,
  //   borderRadius,
  //   fontSize,
  //   cursor: cursor || null,
  //   // textDecoration: "none"
  // }
  return (
    // <>{(user?.name !== null)?
    //     <div style={style}>
    //       { user.name.charAt(0).toUpperCase() }
    //     </div>
    //   :
    //   (user?.userAnswered !== null)?
    //     <div style={style}>
    //       { user.userAnswered.charAt(0).toUpperCase() }
    //     </div>
    //     :
    //   (user?.userPosted !== null)?
    //     <div style={style}>
    //     { user.userPosted.charAt(0).toUpperCase() }
    //     </div>
    //     :
    //     <div style={dpStyle}>
    //     <img src={URL.createObjectURL(user.userDP)} alt="avatar"/>
    //     </div>
    //   }</>
    <div style={style}>
      { children }
    </div>

  )
}

export default Avatar
