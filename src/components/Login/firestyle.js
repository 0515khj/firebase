import styled from "styled-components";


export const JoinWrap = styled.div`
.inner{ 
    width:100%;
    .all{  display: flex;
        flex-direction:column;
    justify-content: center;
    align-items: center;
    height: 90vh;
   }
   h1{text-align:center;}
    button{background: #000; color:#fff;
        width:60px;
        font-size:17px;
            height:30px; line-height:1.5;
            transition:0.2s;
            cursor: pointer;
        &:hover { border: none; background: #00B0FF; } 
    }
    
    .joinform{ 
        #phnumber , #code{width:145px; height:30px; margin-right:5px;}
        #email{width:195px; height:30px;}
        #password{width:179px; height:30px;}
        #name1 , #age{ width: 250px; height:30px;}
        .back{border-radius:20px;}
}
    h1{font-size:50px; font-weight:300; margin-bottom:30px;}
    p{margin-bottom:15px;}

    .btnok{
        button{ width:150px;margin-right: 5px; border-radius:8px;}
    }

}
`
export const LoginWrap = styled.div`
.inner{ 
    width:100%;
    .all{  display: flex;
    justify-content: center; // 왼오
    align-items: center; // 위아래
    height:90vh;
    }
    .loginform{   
        display:flex; 
        flex-direction:column;

    h1{font-size:50px; font-weight:300; margin-bottom:30px; text-align:center;}
    p{margin-bottom:15px;}

    .back{ background: #000; color:#fff; border: none; 
        width:60px; height:30px; text-align:center; font-size:17px;
            border-radius:20px; line-height:1;
            cursor: pointer;
        &:hover{ background: #00B0FF;}
    }

        .loginbtn{ width:357px; height:45px; font-size:20px;
            background: #000; color:#fff; cursor: pointer; border: none;
            transition:0.3s;
            &:hover{ background: #00B0FF;}
        }
    #email{width:350px; height:40px; margin-bottom:10px;}
    #password{width:350px; height:40px; margin-bottom:10px;}
    .gobtn{ width:65px; font-size:13px; background: #fff; border: none; 
    cursor: pointer; 
    margin-top:10px;
    &:hover{ color:#00B0FF;}
}
    }
}

`
export const MainWrap = styled.div`
.inner{
    width:100%;
    .all{
        display:flex;
        flex-direction:column;
        height:90vh;
        align-items:center;
        justify-content:center;
    }
    h1{font-size:40px; font-weight:500; margin-bottom:50px;}
    button{ width:150px; height:30px; margin-bottom:10px;
        background: #000; color:#fff; border: none;
        transition:0.2s; cursor: pointer;
        &:hover{background: #00B0FF;}
    }
}

`

export const GoodWrap =styled.div`
.inner{
    width:100%;
    .all{
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        height:90vh;
    }
    h1{font-size:40px;margin-bottom:30px;}
    p{font-size:25px; margin-bottom:30px;}
    button{background: #000; color:#fff;font-size:15px; border: none; 
        width:100px; height:30px; border-radius:8px; cursor: pointer;
        transition:0.2s;
        &:hover{background: #00B0FF;}
    }
}

`