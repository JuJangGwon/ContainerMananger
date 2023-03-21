import { collection, doc, getDocs, getDoc, query, where, onSnapshot, getCountFromServer } from "firebase/firestore";
import { useState, useEffect } from "react";
import db from "../../ net/db";

export default function Homeinform() {

    const [containerNum, setContainerNum] = useState(0);
    const [rentNum, setRentNum] = useState(0);
    const [overdueNum, setOverdueNum] = useState(0);
    const [returnNum, setReturnNum] = useState(0);

    const [returnList, setReturnList] = useState([]);
    const [overdueNumList, setOverdueNumList] = useState([]);



    async function countRentContainer() {
        const coll = collection(db, "articles");
        const pq = await getCountFromServer(coll);
        setContainerNum(pq.data().count);

        const q = query(coll, where("renting", "!=", "NULL"));
        const snapshot = await getCountFromServer(q);
        setRentNum(snapshot.data().count);
    }
    async function countOverdueContainer() {
        /*
        const q = query(
            collection(db, "lent"),
            where("rentDay", "array-contains",)
        )
        onSnapshot(q, (snapshot) => {
            const getdatalist = snapshot.docs.map((doc: any) => ({
                id: doc.id,
                ...doc.data(),
            }));
            if (getdatalist.length > 0) {
                setList(getdatalist);
            }
        });
        */
    }
    async function countFinishContainer() {
        const today = new Date();
        const todayformat = today.getFullYear() +
            '-' + ((today.getMonth() + 1) < 9 ? "0" + (today.getMonth() + 1) : (today.getMonth() + 1)) +
            '-' + ((today.getDate()) < 9 ? "0" + (today.getDate()) : (today.getDate()));

        getDocs(query(collection(db, "lent")))
            .then((results: any) => {
                let return_count = 0;
                let overdue_count = 0;

                results.forEach((doc: any) => {
                    const data = doc.data();
                    // 수거해야될 컨테이너 인지 체크
                    if (data.rentEndDay <= todayformat) {
                        setReturnList((event: any) => [...event, data.ContainerID]);
                        return_count++;
                    }
                    // 연체된 컨테이너 인지 체크 
                    for (let i = 0; i < data.rentPriod; i++) {
                        if (data.rentDay[i] > todayformat)
                            break;
                        if (data.SignDay[i] === false) {
                            overdue_count++;
                            setOverdueNumList((event: any) => [...event, data.ContainerID]);
                            break;
                        }
                    }

                });
                setOverdueNum(overdue_count);
                setReturnNum(return_count);
            })
    }

    useEffect(() => {
        countRentContainer();
        countFinishContainer();
        /*
        const q = query(
            usersCollectionRef,
            where("rentDay", "array-contains", )
        )
        onSnapshot(q, (snapshot) => {
            const getdatalist = snapshot.docs.map((doc: any) => ({
                id: doc.id,
                ...doc.data(),
            }));
            if (getdatalist.length > 0) {
                setList(getdatalist);
            }
        });
        */
    }, []);


    return (
        <div className="bg-white">
            <div>
                <p>임대 현황</p>
                <div className="flex">
                    <div>
                        <p> 등록된 컨테이너 </p>
                        <p>{containerNum}</p>
                    </div>
                    <div>
                        <p> 임대중인 컨테이너 </p>
                        <p>{rentNum}</p>
                    </div>
                    <div>
                        <p> 대기중인 컨테이너 </p>
                        <p>{containerNum - rentNum}</p>
                    </div>
                    <div>
                        <p> 임대료 연체중인 컨테이너 </p>
                        <p>{overdueNum}</p>
                    </div>
                    <div>
                        <p> 반납받을 컨테이너 </p>
                        <p>{returnNum}</p>
                    </div>
                </div>
            </div>









            <style jsx>
                {
                    `
                        div {
                        background-color : white;
                        width : 1000px;
                        height : 700px;
                        }
                        `
                }
            </style>
        </div>
    );
}