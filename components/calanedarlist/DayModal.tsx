import { collection, getDoc, doc, query } from "firebase/firestore";
import db from "../../ net/db";
import { useState, useEffect } from "react";
import { ModalsetOff } from "../../redux/reducer/openDaymodal";
import { useDispatch } from "react-redux";

type SingDayState = {
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
    signOk_list: any;
    signNo_list: any;
};

export default function DayModal() {

    const dispatch = useDispatch();
    const [signOk_l, setSignOk_l] = useState([]);
    const [signNo_l, setSignNo_l] = useState([]);
    /*
    useEffect(() => {
        for (var i = 0; i < signOk_list.length; i++) {
            getDoc(doc(db, "articles", signOk_list[i])).then((doc: any) => {
                const data = doc.data();
                const nickname = data.nickname;
                setSignOk_l((event: React.ChangeEvent<HTMLInputElement>) => [...event, nickname]);
            })
        }
        for (var i = 0; i < signNo_list.length; i++) {
            getDoc(doc(db, "articles", signNo_list[i])).then((doc: any) => {
                const data = doc.data();
                const nickname = data.nickname;
                setSignNo_l((event: React.ChangeEvent<HTMLInputElement>) => [...event, nickname]);
            })
        }
    }, [signOk_list]);
    */

    function onclickX() {
        dispatch(ModalsetOff());
    }

    return (
        <div>
            <div className="w-92 h-92 bg-white -z-50">
                <button onClick={onclickX}>X</button>
                {

                }
            </div>
        </div>
    );
}