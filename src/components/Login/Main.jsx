import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MainWrap } from './firestyle';

const Main = () => {
    const navi = useNavigate();
    return (
        <MainWrap>
            <div className="inner">
                <div className="all">

            <h1>Firebase 연습 화면</h1>
            <Link to={'/login'}><button>로그인</button></Link>
            <button onClick={()=>navi('/join')}>회원가입</button>
                </div>
            </div>
        </MainWrap>
    );
};

export default Main;