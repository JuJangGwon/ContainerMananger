import { collection, getDoc, doc, updateDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, listAll, getDownloadURL, } from "firebase/storage";
import { useEffect, useState } from "react";
import db from "../../../ net/db";

export default function ContainerMemo({ rentid }) {

    const [inputtext, setText] = useState("");
    useEffect(() => {

        if (rentid !== "NULL") {
            getDoc(doc(db, "lent", rentid)).then((doc: any) => {
                const data = doc.data();
                setText(data.text);
            })
        }

    }, []);

    function onClickSaveBtn() {
        console.log(inputtext);
        updateDoc(doc(db, "lent", `${rentid}`), { // 수정하고 업데이트하기
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