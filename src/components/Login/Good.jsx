import React, { useEffect, useState } from 'react';
import { auth } from './Firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { GoodWrap } from './firestyle';

const Good = () => {

    const [name,setName]=useState('');
    const navi = useNavigate();

        useEffect(()=>{
            const you = onAuthStateChanged(auth,(user)=>{
                if(user){
                    setName(user.displayName)
                }else{
                    setName('');
                }
            })
            return()=> you
        },[])
        
        const logout = async()=>{
            try{
                await signOut(auth)
                alert('로그아웃되었습니다.')
                navi('/')
            }catch(err){
                console.error('error')
            }
        }

    return (
        <GoodWrap>
            <div className="inner">
            <div className="all">

            <h1>환영합니다 !</h1>
            <p>{name} 님</p>
            <button onClick={logout}>로그아웃</button>
            </div>
            </div>
        </GoodWrap>
    );
};

export default Good;