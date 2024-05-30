import React, { useState } from 'react';
import {signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { auth } from './Firebase';
import { LoginWrap } from './firestyle';
import { FaArrowLeft } from "react-icons/fa";

const Login = () => {
    const [email , setEmail] = useState('');
    const [password,setPassword]= useState('');
    const navi = useNavigate();
    
      const loginhandle = e=>{
            e.preventDefault();
            signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
              // Signed in 
              const user = userCredential.user;
              // ...
              navi('/good')
              alert('로그인 되었습니다.')
            })
            .catch((error) => {
              alert('비밀번호 or 이메일 틀림')
              const errorCode = error.code;
              const errorMessage = error.message;
            });
        }

        const back = (e)=>{
          e.preventDefault();
          navi(-1)
        }
      

    return (
        <LoginWrap>
          <div className="inner">
            <div className="all">
              <form onSubmit={loginhandle} className='loginform'>
              <button type='button' onClick={back} className='back'><FaArrowLeft /></button>
              <h1>FIREBASE</h1>
              <input type="email" placeholder='이메일' 
              value={email} id='email' onChange={e=>setEmail(e.target.value)}/>
              <input type="password" placeholder='비밀번호' 
              value={password} id='password' onChange={e=>setPassword(e.target.value)}/>
            
              <button type='submit' className='loginbtn'>Firebase 로그인</button>
              <button onClick={()=>navi('/join')} className='gobtn'>회원가입</button>
              </form>
            </div>
          </div>
        </LoginWrap>
    );
};

export default Login;