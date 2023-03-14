import { collection, doc, getDoc, updateDoc } from "firebase/firestore";
import db from "../../../ net/db";
import { useState, useEffect } from "react";
import AddRentInform from "../modal/AddRentInform";

type rentinformtype = {
    Id: string,
    rent: boolean,
    rentid: string,
}


export default function RentInform({ Id, rent, rentid }: rentinformtype) {

    const [rentCompany, setRentCompany] = useState("");
    const [rentManager, setRentManager] = useState("");
    const [rentStartDay, setRentStartDay] = useState();
    const [rentEndDay, setRentEndDay] = useState();
    const [rentPriod, setRentPriod] = useState("");
    const [rentfee, setRentfee] = useState("");
    const [rentSignday, setRentSignday] = useState("");
    const [rentWhere, setRentWhere] = useState("");
    const [shipmentFee, setShipmentFee] = useState("");
    const [rentHomewhere, setRentHomewhere] = useState("");
    const [rentHometel, setRentHometel] = useState("");
    const [rentManagerTel, setRentManagerTel] = useState("");
    const [rentDay, setRentDay] = useState([]);
    const [tips, setTips] = useState();

    const [modalOpen, setModalOpen] = useState(false);

    function onClickopenRentB() {
        setModalOpen(true);
        console.log(modalOpen);
    }

    useEffect(() => {

        if (Id !== "NULL") {
            getDoc(doc(db, "lent", rentid)).then((doc : any) => {
                const data = doc.data();
                setRentCompany(data.rentCompany);
                setRentManager(data.rentManager);
                setRentStartDay(data.rentStartDay);
                setRentEndDay(data.rentEndDay);
                setRentPriod(data.rentPriod);
                setRentfee(data.rentfee);
                setRentSignday(data.rentSignday);
                setRentWhere(data.rentWhere);
                setShipmentFee(data.shipmentFee);
                setRentHomewhere(data.rentHomewhere);
                setRentHometel(data.rentHometel);
                setRentManagerTel(data.rentManagerTel);
            })
        }
    }, []);
    return (
        <div>
            {modalOpen && <AddRentInform setState={setModalOpen} Id={Id} />
            }
            <div>
                {!rent && <button onClick={onClickopenRentB} className="bbb bg-white border-2 border-black hover:bg-gray-200">임대 정보 기입하기</button>}
            </div>
            {rent &&
                <table className="bg-white">
                    <tr>
                        <th>임대업체</th>
                        <td>{rentCompany}</td>
                        <th>임대관리자</th>
                        <td>{rentManager}</td>
                    </tr>
                    <tr>
                        <th>임대업체 연락처</th>
                        <td>{rentHometel}</td>
                        <th>임대관리자 연락처</th>
                        <td>{rentManagerTel}</td>
                    </tr>
                    <tr>
                        <th>임대기간</th>
                        <td>{rentStartDay} ~ {rentEndDay}</td>
                        <th>임대계약기간</th>
                        <td>{rentPriod}개월</td>
                    </tr>
                    <tr>
                        <th>임대료</th>
                        <td>{rentfee}만원</td>
                        <th>결제일</th>
                        <td>매월 {rentSignday}일</td>
                    </tr>
                    <tr>
                        <th>임대 장소</th>
                        <td>{rentWhere}</td>
                        <th>운반비 결제방식</th>
                        <td>{shipmentFee}</td>
                    </tr>
                </table>
            }
            <style jsx>
                {`
                    .bbb{
                        width : 580px;
                        height : 200px;
                    }
                    tr{
                        text-align: left;
                    }
                    th{
                        width : 150px;
                    }
                    td{
                        width : 250px;
                    }
                    table {
                        width: 100%;
                        border: 1px solid #444444;
                        border-collapse: collapse;
                      }
                      th, td {
                        border: 1px solid #444444;
                        padding: 10px;
                      }
                `}
            </style>
        </div>
    );
}