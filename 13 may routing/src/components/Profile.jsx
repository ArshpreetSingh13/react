import React from 'react'
import { useParams } from 'react-router-dom'


function Profile() {


  const parm=useParams();
  return (
    <div>your id is {parm.id}</div>
  )
}

export default Profile