import React, { useContext } from 'react'
import UserContext from '../../context/UserContext'

const UserDetail = () => {
    const {user, editUser} = useContext(UserContext)
    console.log(user)
    
    const changeName = (e) => {
       console.log(e.target.value)
       editUser(e.target.value, user.age)
    }
  return (
    <div>UserDetail
        <p>Name: {user.name}</p>
        <input type='text' value={user.name} onChange={changeName}>
        </input>
    </div>
  )
}

export default UserDetail