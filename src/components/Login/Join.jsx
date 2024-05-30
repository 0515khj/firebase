import React, { useState } from 'react';
import { createUserWithEmailAndPassword , RecaptchaVerifier ,signInWithPhoneNumber,updateProfile  } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { auth } from './Firebase';
import { JoinWrap } from './firestyle';
import { FaArrowLeft } from "react-icons/fa";


const Join = () => {

        const [email,setEmail]=useState('');
        const [name , setName] = useState('');
        const [age , setAge]=useState('');
        const [password,setPassword]=useState('');
        const [number,setNumber]=useState('');
        const [code , setCode]=useState('');
        const [codecheck , setCodecheck]= useState(false);
        const navi = useNavigate();


         const phcode = ()=>{
            window.recaptchaVerifier = new RecaptchaVerifier(auth, 'phnumber', {
                'size': 'invisible',
                'callback': (response) => {
                  onSignInSubmit();
                }
              });
        } 
      
        
        const sendcode=(e)=>{
            e.preventDefault();
            phcode();
            const phoneNumber = document.getElementById('phnumber').value;
            const appVerifier = window.recaptchaVerifier;

              signInWithPhoneNumber(auth, '+82'+phoneNumber, appVerifier)
                  .then((confirmationResult) => {
                  window.confirmationResult = confirmationResult;
                  alert('인증 코드 전송 완료')
                  }).catch((error) => {
                    console.log('error')
                    alert('인증 코드 오류')
                  });
        }

        const ckcode =(e)=>{
            e.preventDefault();
            if(!window.confirmationResult){
                alert('인증 코드를 먼저 전송하세요')
                return;
            }
            window.confirmationResult.confirm(code)
            .then((result) => {
                alert('인증 완료')
                setCodecheck(true); // 인증완
            // ...
            }).catch((error) => {
                alert('인증 코드가 유효하지 않습니다.')
            });
            }


          const joinhandel = e =>{
            e.preventDefault();
            if(password.length < 6){
                alert('비밀번호는 6자리 이상이여야 합니다.')
                return;
            }
            if(!codecheck){
                alert('핸드폰 인증 해주세요.')
                return;
                }
        
            createUserWithEmailAndPassword(auth, email, password ) // 이메일이랑 비번만 가능
            .then((userCredential) => {
                const user = userCredential.user;
                updateProfile(user,{
                    displayName: name, 
                    photoURL: age
                }).then(() => {
                    alert('회원가입이 완료되었습니다.');
                    navi('/');
            })
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });

          }



    return (
        <JoinWrap>   
            <div className="inner">
            <div className="all">

            <form onSubmit={joinhandel} className='joinform'>
            <button onClick={()=>navi(-1)} className='back'><FaArrowLeft /></button>

            <h1>회원가입</h1>
            <p>이름 : <input type="text" placeholder='홍길동' value={name}
            onChange={e=>setName(e.target.value)} id='name1' required/></p>
            <p>나이 : <input type="text" placeholder='25' value={age}
            onChange={e=>setAge(e.target.value)} id='age' required/></p>
            <p>이메일 입력 : <input type="email" placeholder='aaa@naver.com' 
            value={email} id='email'
            onChange={(e)=>setEmail(e.target.value)} required /></p>

            <p>비밀번호 입력 : <input type="password" placeholder='*********' 
            value={password} id='password'
            onChange={(e)=>setPassword(e.target.value)} required /></p>

            <p>번호 입력 : <input type="text" id='phnumber' placeholder='핸드폰번호 입력' value={number}
            onChange={(e)=>setNumber(e.target.value)} required /> 
             <button onClick={sendcode} >전송</button> </p>

           <p>인증 번호 : <input type="text" placeholder='인증코드 입력' 
           onChange={e=>setCode(e.target.value)} id='code' />
           <button onClick={ckcode}> {codecheck ? '✔️':'확인'}</button> 
           </p>
            <div className="btnok">
            <button type='submit'>확인</button>
            <button onClick={()=>navi('/')} >취소</button>
            </div>
            </form>
            </div>
            </div>
                
        </JoinWrap>
    );
};

export default Join;