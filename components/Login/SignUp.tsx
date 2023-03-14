import React, { useState } from 'react';
import { registerWithEamil } from "../auth/signup"

export default function SignUP() {
    const [userID, setUserID] = useState();
    const [userPW, setUserPW] = useState();

    const onClickLoginButton = ((event : React.MouseEvent<HTMLElement>)) => {

        setUserID(userID);
        setUserPW(userPW);

        console.log("login");
        registerWithEamil(userID, userPW);
    }

    return (
        <div>
            <form onSubmit={(event) => {
                event.preventDefault();
            }}>
                <h2> 회원가입 </h2>
                <input id="user_id" value={userID} onChange={(event : React.ChangeEvent<HTMLInputElement> ) => setUserID(event.target.value)} placeholder="아이디 / 이메일" />
                <input id="user_pw" value={userPW} onChange={(event : React.ChangeEvent<HTMLInputElement> ) => setUserPW(event.target.value)} placeholder="비밀번호" />
                <button onClick={onClickLoginButton}> 회원가입 </button>
            </form>

            <style jsx> {`
            div {
                text-align : center;
                width : 300px;
                height : 250px;
                display: flex;
                justify-content : center;
                box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
                  rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
                background-color : white;
            }     
            input {
                width : 150px;
                height : 25px;
                margin-top : 10px;
            }
            button {
                margin-top : 30px;
                width : 150px;
                height : 30px;

            }
           
            `}
            </style>
        </div>
    )
}