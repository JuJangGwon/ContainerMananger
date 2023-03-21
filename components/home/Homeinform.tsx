import { collection, getDocs, query, where, onSnapshot, getCountFromServer } from "firebase/firestore";
import { useState, useEffect } from "react";
import db from "../../ net/db";

export default function Homeinform() {

    const [containerNum, setContainerNum] = useState(0);
    const [rentNum, setRentNum] = useState(0);
    const [overdueNum, setOverdueNum] = useState(0);
    const [returnNum, setReturnNum] = useState(0);



    async function countRentContainer() {
        const coll = collection(db, "articles");
        const pq = await getCountFromServer(coll);
        setContainerNum(pq.data().count);

        const q = query(coll, where("renting", "!=", "NULL"));
        const snapshot = await getCountFromServer(q);
        setRentNum(snapshot.data().count);
    }

    useEffect(() => {
        countRentContainer();
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
                        <p> 반납해야할 컨테이너 </p>
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