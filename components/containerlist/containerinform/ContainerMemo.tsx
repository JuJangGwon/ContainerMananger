import { collection, getDoc, doc, updateDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, listAll, getDownloadURL, } from "firebase/storage";
import { useEffect, useState } from "react";
import db from "../../../ net/db";

export default function ContainerMemo({ data }) {

    const [inputtext, setText] = useState("");
    useEffect(() => {
        /*
        if (data !== NULL) {
            getDoc(doc(db, "lent", data.rentid)).then((doc: any) => {
                const lentdata = doc.data();
                setText(lentdata.text);
            })
        }
        */
    }, []);

    function onClickSaveBtn() {
        updateDoc(doc(db, "rent"), { // 수정하고 업데이트하기
            text: inputtext,
        });
    }

    function onChangeInput(event) {
        setText(event.target.value);
    }

    return (
        <div>
            <input className="align-top w-96 h-48 bg-white border-2 border-gray"
                value={inputtext} onChange={onChangeInput} >
            </input>
            <button onClick={onClickSaveBtn}>
                저장하기
            </button>
        </div>
    )
}