import db from "../../ net/db";
import { collection, getDocs, query, where, onSnapshot } from "firebase/firestore";
import { useState, useEffect } from "react";
import SignDayState from "../containerlist/modal/Signdaystate";

export default function DayInform({ date }) {

    const [signOk_list, setSignOk_list] = useState([]);
    const [signNo_list, setSignNo_list] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const [list, setList] = useState([]);
    const usersCollectionRef = collection(db, "lent");

    useEffect(() => {
        const q = query(
            usersCollectionRef,
            where("rentDay", "array-contains", date)
        )
        onSnapshot(q, (snapshot) => {
            const getdatalist = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            if (getdatalist.length > 0) {
                setList(getdatalist);
            }
        });
    }, []);

    useEffect(() => {
        console.log(signNo_list.length);
    }, [signNo_list]);


    useEffect(() => {
        for (var i = 0; i < list.length; i++) {
            for (var j = 0; j < list[i].rentDay.length; j++) {
                if (date == list[i].rentDay[j]) {
                    if (list[i].SignDay[j] === true) {
                        const tempp = list[i].ContainerID;
                        console.log(tempp);
                        setSignOk_list((temp) => [...temp, tempp]);
                    }
                    else if (list[i].SignDay[j] === false) {
                        const tempp = list[i].ContainerID;
                        console.log(tempp);
                        setSignNo_list((temp) => [...temp, tempp]);
                    }
                    break;
                }
            }
        }
    }, [list]);

    const onClickDay = (event) => {
        setOpenModal(true);
    }

    return (
        <div>
            {openModal && <SignDayState setOpenModal={setOpenModal} signNo_list={signNo_list} signOk_list={signOk_list} />}
            <button onClick={onClickDay}>
                <div className="flex gap-1">
                    {
                        signOk_list.length !== 0
                            ?
                            <div className="circle bg-green-400" />
                            :
                            <p></p>
                    }
                    {
                        signOk_list.length !== 0
                            ?
                            <p>{signOk_list.length}</p>
                            :
                            <p></p>
                    }
                </div>

                <div className="flex gap-1">
                    {
                        signNo_list.length !== 0
                            ?
                            <div className="circle bg-red-600" />
                            :
                            <p></p>
                    }
                    {
                        signNo_list.length !== 0
                            ?
                            <p>{signNo_list.length}</p>
                            :
                            <p></p>
                    }
                </div>
                <style jsx>
                    {`
                    .circle{
                        margin-top: +7px;
                        width:12px;
                        height:12px;
                        border-radius:75px;
                    }
                `}
                </style>
            </button>
        </div >
    );
}