
import React,{useRef} from 'react'
import '../Styles/SignUp.css'
import {auth} from   '../firebase'
function SignUp() {
    const emailRef=useRef(null)
    const passwordRef=useRef(null)
    const register=(e)=>{
          e.preventDefault()
          auth.createUserWithEmailAndPassword(
              emailRef.current.value,
              passwordRef.current.value
          ).then(
              (authUser)=>{
                            // console.log(authUser)
              }
          ).catch(
              (error)=> alert(error.message)
          )
    }
    const  signIn=(e)=>{
        e.preventDefault()
        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
            ).then(
                (authUser)=>{
                            
                }
            ).catch(
                (error)=> alert(error.message)
            )
        
    }
    return (
        <div className='sign_up'>
            <form>
                <h1><span>Sign Up</span><span className=' SignUp'>(if new Register.)</span></h1>
                <input ref={emailRef} type='email' placeholder='Email' required/>
                <input ref={ passwordRef} type='password' placeholder='Password' required/>
                <button className='btn' type='submit' onClick={signIn}>Sign In</button>
               
                <h4>  <span className=' SignUp_gray'>New to Netflix? </span>
              <span className=' SignUp_link' onClick={register}>Register</span>  </h4>
            </form>
        </div>
    )
}

export default SignUp
