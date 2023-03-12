import { collection, getDocs, query } from "firebase/firestore";
import db from "../../ net/db";
import { useEffect, useState } from "react";
import Image from "next/image"
import Link from "next/link";
import ContainItem from "./ContainItem";


export default function ContainList() {

    const [list, setList] = useState([]);
    const [url, setUrl] = useState();

    useEffect(() => {
        getDocs(query(collection(db, "articles")))
            .then(results => {
                const newList = [];
                results.forEach(doc => {
                    const data = doc.data();
                    data.id = doc.id;
                    newList.push(data);
                });
                setList(newList);
            })
    }, []);

    return (
        <div>
            <div className="bg-gray-100 w-192 h-12 flex justify-between">
                <p className="font-bold text-2xl">컨테이너 리스트</p>
            </div>
            <div className="my-2 bg-gray-600 h-[1px]"></div>

            <div className="grid grid-cols-5" >
                {list.map(item => (
                    <div key={item.id} className="p-2">
                        <div>
                            <ContainItem item={item} url={item.uuidarray[0]} renting={item.renting} />
                        </div>
                    </div>
                ))}
            </div>
        </div >

    );
}
/*

*/