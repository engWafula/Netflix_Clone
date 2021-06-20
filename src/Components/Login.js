import React,{useState} from 'react'
import  '../Styles/login.css'
import SignUp from './SignUp'

function Login() {
    const [signIn,setsignIn]=useState(false)
    return (
        <div className='login'>
            <div className='login_Back'>
                     <img
                     className='login_logo'
                     src='https://d26oc3sg82pgk3.cloudfront.net/files/media/edit/image/641/article_full%401x.jpg'
                     alt='login'
                     />
                     <button 
                     onClick={()=>setsignIn(true)}
                     className='login_button'>Sign In</button>
                     <div  className='login_gradient'/>
            </div>
            <div  className='login_body'>
                {signIn?(
                    <SignUp/>
                ):(
                    <>
                    <h1>Unlimited movies, TV shows, and more.</h1>
                    <h2>Watch anywhere. Cancel anytime.</h2>
                    <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                    <div className='login_input'>
                       <form>
                           <input type='email' placeholder='Email Address'/>
                           <button 
                            onClick={()=>setsignIn(true)} 
                           className='form_button'>30 days free trial</button>
                       </form>
                     
                    </div>
                   
                    </>
                    
                )}
               
            </div>
            <div className='footer'>
    

            </div>
          
              
        </div>
    )
}

export default Login
