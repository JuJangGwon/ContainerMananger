import { async } from "@firebase/util";
import { collection, getDoc, doc, updateDoc } from "firebase/firestore";
import db from "../../../ net/db";


export default function Containersettings({ container_data, container_id }) {

    function delete_container() {
        db.collection("articles").doc(container_data.id).delete().then(() => {
        });
    }
    const update_rentingInform = async () => {
        await updateDoc(doc(db, "articles", container_id), { // 수정하고 업데이트하기
            renting: "NULL",
        });
    }
    function delete_lentinform() {
        db.collection("lent").doc(container_data.renting).delete().then(() => {
        });
    }

    return (
        <div className="flex gap-4">
            <button className="border-2 border-black">컨테이너 정보 삭제하기</button>
            <button className="border-2 border-black"> 컨테이너 수거 완료</button>
            <button className="border-2 border-black" ></button>
        </div>
    )
}