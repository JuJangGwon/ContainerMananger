import { collection, getDoc, doc, query } from "firebase/firestore";
import db from "../../../ net/db";
import { useState, useEffect } from "react";

export default function SignDayState({ setOpenModal, signOk_list, signNo_list }) {

    const [signOk_l, setSignOk_l] = useState([]);
    const [signNo_l, setSignNo_l] = useState([]);

    useEffect(() => {
        console.log(signOk_l[0]);
    }, [signOk_l]);

    useEffect(() => {
        const sol = signOk_list;
        const snl = signNo_list;
        for (var i = 0; i < sol.length; i++) {
            getDoc(doc(db, "articles", sol[i])).then(doc => {
                const data = doc.data();
                const nickname = data.nickname;
                setSignOk_l((event) => [...event, nickname]);
            })
        }
        for (var i = 0; i < snl.length; i++) {
            getDoc(doc(db, "articles", snl[i])).then(doc => {
                const data = doc.data();
                const nickname = data.nickname;
                setSignNo_l((event) => [...event, nickname]);
            })
        }
    }, [signOk_list]);


    function onclickX() {
        setOpenModal(false);
    }

    return (
        <div className="form">
            <div>
                <button onClick={onclickX}>X</button>
                {
                    signOk_l.map((item, index) => {
                        <p> {signOk_l[index]} </p>
                    })
                }
                {
                    signNo_l.map((item, index) => {
                        <p> {signNo_l[index]} </p>
                    })
                }
            </div>
            <style jsx>
                {
                    `
                    .form
                    {
                        width: 400px;
                        height: 600px;
                        position: absolute;
                        z-index: 999;
                        background-color: white;
                        border: 1px solid black;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                    }
                    
                    `
                }
            </style>
        </div>
    );
}