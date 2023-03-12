import { collection, doc, getDoc, updateDoc } from "firebase/firestore";
import db from "../../../ net/db";
import { useState, useEffect } from "react";
import moment from 'moment';
import { checkServerIdentity } from "tls";
import AddRentInform from "../modal/AddRentInform";

export default function ContainerSignInform({ Id, data, rent, rentid }) {

    const [rentday, setRentDay] = useState([]);
    const [signday, setSignDay] = useState([false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]);
    const [loading, setloading] = useState(false);
    const [priod, setPriod] = useState(0);
    const [modalOpen, setModalOpen] = useState(false);

    const [NSD, setNSD] = useState([]);
    var NowSignday = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    // 1 = 미결제 , 2 결제완료, 3 연체

    function onClickopenRentB() {
        setModalOpen(true);
        console.log(modalOpen);
    }

    const onClickSubmit = async () => {
        const containerInform_db = doc(db, "lent", `${rentid}`);
        await updateDoc(containerInform_db, { // 수정하고 업데이트하기
            SignDay: signday, // text의 값을 newNweet(수정한부분) 으로 대체하기
        });
    }
    function settings() {
        const nowdate = new Date();
        for (var i = 0; i < priod; i++) {
            var temps = NowSignday;
            if (signday[i] == true) {
                NowSignday[i] = 2;
            }
            else {
                const c = new Date(rentday[i]);

                if (c >= nowdate) {
                    NowSignday[i] = 1;

                }
                else {
                    NowSignday[i] = 3;
                }
            }
        }
        setNSD(NowSignday);
    }
    const setcolor = {
        1: `btn btn-gray`,
        2: `btn btn-green`,
        3: `btn btn-red`,
    }

    useEffect(() => {
    }, [NSD]);
    useEffect(() => {
        settings();
    }, [signday]);

    useEffect(() => {

        if (Id !== "NULL") {
            getDoc(doc(db, "lent", rentid)).then(doc => {
                const data = doc.data();
                setRentDay(data.rentDay)
                setSignDay(data.SignDay);
                setPriod(Number(data.rentPriod));
            })
        }
    }, []);
    const onClickSignB = (event) => {
        const index = event.target.id;
        const temp = signday;
        temp[index] = !temp[index];
        switch (NSD[index]) {
            case 1:
                event.target.className += " btn btn-green";
                break;
            case 2:
                event.target.className += " btn btn-red";
                break;
            case 3:
                event.target.className += " btn btn-green";
                break;
        }
        setSignDay(temp);
        settings();
        onClickSubmit();
        console.log(temp);
    }
    function Save() {
        onClickSubmit();
    }
    return (
        <div>
            {modalOpen && <AddRentInform state={modalOpen} setState={setModalOpen} Id={Id} />
            }
            <div>
                {!rent && <button onClick={onClickopenRentB} className="bbb bg-white border-2 border-black hover:bg-gray-200">임대 정보 기입하기</button>}
            </div>
            {rent &&
                <div className="w-128 h-60 border-2 border-black bg-white">
                    <div>
                        <p>결제현황</p>
                    </div>
                    <div className="grid grid-cols-5" >
                        {rentday.map((item, index) => (
                            <div className="w-32 h-16">
                                <div className=" w-32 h-12">
                                    <button id={index} onClick={onClickSignB} className={NSD[index] === 1 ? "btn btn-gray" : (NSD[index] === 2 ? "btn btn-green" : "btn btn-red")}>{rentday[index]}</button>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            }
            <style jsx>
                {
                    `
                                    .btn 
                                    {
                                        position: relative;
    border: none;
    display: inline-block;
    padding: 10px 20px;
    border-radius: 15px;        
    font-family: "paybooc-Light", sans-serif;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
    text-decoration: none;
    font-weight: 600;
    transition: 0.25s;
                                    }

                                    .btn-red {
                                        background-color: #ff5f2e;
                                        color: #e1eef6;
                                    }
                                    .btn-green {
                                        background: linear-gradient(
                                            90deg,
                                            rgba(129, 230, 217, 1) 0%,
                                            rgba(79, 209, 197, 1) 100%
                                        );
                                        border-radius: 1000px;
                                        color: darkslategray;
                                        cursor: pointer;
                                        box-shadow: 12px 12px 24px rgba(79, 209, 197, 0.64);
                                        font-weight: 700;
                                        transition: 0.3s;
                                    }
                                    .   btn-gray {
                                        background-color: #a3a1a1;
                                        color: #e3dede;
                                    }
                                    .bbb{
                                        width : 580px;
                                        height : 200px;
                                    }
                                    `
                }
            </style>
        </div >
    );
}
