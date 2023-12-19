import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import Login from './Login'

const Protectedroute = ({isloged}) => {
  return (
    <div>
     isloged? <Outlet/> : <Navigate to={Login}/>
     </div>
  )
}

export default Protectedroute;
