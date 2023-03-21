import { collection, doc, addDoc, updateDoc } from "firebase/firestore";
import db from "../../../ net/db";
import { useState, useEffect } from "react";
import moment from 'moment';

type AddRentinformType = {
    setState: React.Dispatch<React.SetStateAction<boolean>>;
    Id: boolean

}

export default function AddRentInform({ setState, Id }: AddRentinformType) {

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
    const [tips, setTips] = useState();

    function onClickCloseButton() {
        setState(false);
    }


    const onClickSubmit = async (event: React.FormEvent<HTMLButtonElement>) => {

        event.preventDefault();
        const ContainerID = Id;
        const containerInform_db = doc(db, "articles", `${Id}`);
        setState(false);
        setRentCompany(rentCompany);
        setRentManager(rentManager);
        setRentStartDay(rentStartDay);
        setRentEndDay(rentEndDay);
        setRentPriod(rentPriod);
        setRentfee(rentfee);
        setRentSignday(rentSignday);
        setRentWhere(rentWhere);
        setShipmentFee(shipmentFee);
        setRentHomewhere(rentHomewhere);
        setRentHometel(rentHometel);
        setRentManagerTel(rentManagerTel);
        setTips(tips);

        const text = "";
        const rentDay = ([]);
        const SignDay = ([]);
        const final_signDay = new Date(rentStartDay) - 1;
        var dd = new Date();
        for (var i = 0; i < Number(rentPriod); i++) {
            var temp = new Date(rentStartDay);
            temp.setMonth(temp.getMonth() + i);
            var moment = require('moment');
            const publish_date = moment(temp).format('YYYY-MM-DD')
            console.log(publish_date);
            rentDay.push(publish_date);
            SignDay.push(false);
        }
        const rentData = await addDoc(collection(db, `lent`),
            {
                rentCompany,
                rentManager,
                rentStartDay,
                rentEndDay,
                rentPriod,
                rentfee,
                rentSignday,
                rentWhere,
                shipmentFee,
                rentHomewhere,
                rentHometel,
                rentManagerTel,
                tips,
                ContainerID,
                rentDay,
                SignDay,
                final_signDay,
                text,
            })
        const rentData_id = rentData.id;
        console.log(rentData_id);
        console.log(containerInform_db);
        await updateDoc(containerInform_db, { // 수정하고 업데이트하기
            renting: rentData_id,
        });
    };

    return (
        <div className="container">

            <form onSubmit={(event) => {
                event.preventDefault();
                return false;
            }}>
                <button onClick={onClickCloseButton} className=""> X </button>

                <div className="propertys">
                    <label for="rentCompany"> 임대업체  </label>
                    <input id="rentCompany" value={rentCompany} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setRentCompany(event.target.value)} />

                </div>
                <div className="propertys">
                    <label for="standard"> 임대관리자 </label>
                    <input id="standard" value={rentManager} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setRentManager(event.target.value)} />

                </div>
                <div className="propertys flex">
                    <label for="standard"> 임대기간 </label>
                    <div className="gap-5 flex">
                        <input type="date"
                            id="date"
                            value={rentStartDay}
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => setRentStartDay(event.target.value)}
                        ></input>
                        <h1> ~ </h1>
                        <input type="date"
                            id="date"
                            value={rentEndDay}
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => setRentEndDay(event.target.value)}
                        ></input>
                        <input id="month" onChange={(event: React.ChangeEvent<HTMLInputElement>) => setRentPriod(event.target.value)} value={rentPriod} />
                        <label for="month"> 개월 </label>
                    </div>
                </div>
                <div className="propertys">
                    <label for="standard"> 임대료 </label>
                    <input id="standard" value={rentfee} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setRentfee(event.target.value)} />

                </div>
                <div className="propertys">
                    <label for="standard"> 임대료 정산일 </label>
                    <input id="standard" value={rentSignday} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setRentSignday(event.target.value)} />

                </div>
                <div className="propertys">
                    <label for="standard"> 임대위치 </label>
                    <input id="standard" value={rentWhere} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setRentWhere(event.target.value)} />

                </div>
                <div className="propertys">
                    <label for="standard"> 운반비 </label>
                    <input id="standard" value={shipmentFee} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setShipmentFee(event.target.value)} />

                </div>
                <div className="propertys">
                    <label for="standard"> 임대업체 주소 </label>
                    <input id="standard" value={rentHomewhere} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setRentHomewhere(event.target.value)} />

                </div>
                <div className="propertys">
                    <label for="standard"> 임대업체 연락처 </label>
                    <input id="standard" value={rentHometel} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setRentHometel(event.target.value)} />

                </div>

                <div className="propertys">
                    <label for="standard"> 임대관리자 연락처 </label>
                    <input id="standard" value={rentManagerTel} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setRentManagerTel(event.target.value)} />

                </div>
                <div className="propertys">
                    <label for="standard"> 사업자등록증 </label>
                    <input id="standard" />
                </div>
                <div className="propertys">
                    <label for="tips"> 특이사항 </label>
                    <input id="tips" onChange={event => setTips(event.target.value)} />
                </div>
                <button onClick={onClickSubmit}> 제출 </button>
            </form>
            <style jsx>
                {`
                .container {
                    width: 1000px;
                    height: 600px;
                    position: absolute;
                    z-index: 999;
                    background-color: white;
                    border: 1px solid black;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                }
            `}
            </style>
        </div>
    );
}