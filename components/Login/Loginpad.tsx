import React, { useState } from 'react';
import { loginWithEamil } from "../auth/signup"

export default function Loginpad() {
    const [userID, setUserID] = useState();
    const [userPW, setUserPW] = useState();

    const onClickLoginButton = (event: React.MouseEvent<HTMLElement>) => {

        window.confirm("로그인 기능 구현중입니다.");
        /*
        setUserID(userID);
        setUserPW(userPW);

        console.log("login");
        loginWithEamil(userID, userPW);
        */
    }


    return (
        <div>
            <form onSubmit={(event) => {
                event.preventDefault();
            }}>
                <h1 className="font-bold text-xl"> 로그인 </h1>
                <br />
                <input id="user_id" value={userID} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setUserID(event.target.value)} placeholder="아이디 / 이메일" />
                <input id="user_pw" value={userPW} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setUserPW(event.target.value)} placeholder="비밀번호" />
                <button className="btn" onClick={onClickLoginButton}> 로그인 </button>
            </form>

            <style jsx> {`
            div {
                text-align : center;
                width : 300px;
                height : 300px;
                display: flex;
                justify-content : center;
                align-items: center;
                flex-direction: column;
                border: 1px solid lightgrey;
                border-radius: 5px;
                box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
                  rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
                background-color : white;
            }     
            input {
                border : 
                width : 150px;
                height : 25px;
                margin-top : 10px;
                border: 1px solid lightgray;
                border-radius: 3px;
            }
         
            .btn {
                margin-top : 30px;
                width: 100%;
                background-color: skyblue;
                border-color: transparent;
                color: white;
                width : 170px;
                height : 30px;
            }
            
            `}
            </style>
        </div>
    )
}