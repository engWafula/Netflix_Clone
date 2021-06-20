import React from 'react'
import '../Styles/profileUser.css'
import NavBar from  './NavBar'
import { selectUser } from '../features/counter/userSlice'
import { useSelector } from 'react-redux'
import { auth } from '../firebase'
import Plans from   './Plans'

function Profile() {
     const user=useSelector(selectUser)
    return (
        <div className='profileScreen'>
            <NavBar/>
            <div className='profileScreen__body'>
                     <h1>Profile</h1>
                     <div className='profileScreen__info'>
                     <img 
        
        src="https://cdn.iconscout.com/icon/premium/png-512-thumb/account-70-144869.png"
        alt="Netflix Avatar"
                   />  
                  <div className='details'>
                     <h2>{user.email}</h2> 
                     <div className='plans'>
                        
                        <h3>Plans(choose any)</h3>
                         <Plans/>
                     <button  onClick={()=>auth.signOut()} className='profileScreen__signOut' >Sign Out</button>
                    </div>  
                    </div>
                   
                     </div> 
            </div>
        </div>
    )
}

export default Profile
