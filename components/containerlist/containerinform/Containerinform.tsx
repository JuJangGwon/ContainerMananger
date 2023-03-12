import { collection, doc, getDoc, updateDoc } from "firebase/firestore";
import db from "../../../ net/db";
import { useState, useEffect } from "react";

export default function Containerinform({ data, opts }) {

    const [standard, setStandard] = useState('');
    const [nickname, setNickname] = useState("");
    const [madeday, setMadeday] = useState("");
    const [madecompany, setMadecompany] = useState("");
    const [where, setWhere] = useState();
    const [purpose, setPurpose] = useState("");
    const [optionText, setOptionText] = useState("");
    const [urlList, seturlList] = useState([]);
    const [Optlist, setOptlist] = useState([]);

    var FullOptionList = ["에어컨", "냉난방기", "바닥 전기판넬", "스틸 도출배관", "불연재합판", "바닥철판", " 철재환풍기", "아크누전기"];

    useEffect(() => {
        console.log(data);
        setStandard(data.standard);
        setNickname(data.nickname);
        setMadeday(data.madeday);
        setMadecompany(data.madecompany);
        setPurpose(data.purpose);
        var optstr = "";
        Optlist.map((item, index) => {
            optstr += item;
            optstr += "  ";
        });
        setOptionText(optstr);
    }, [data]);

    useEffect(() => {
        console.log(data);
        setStandard(data.standard);
        setNickname(data.nickname);
        setMadeday(data.madeday);
        setMadecompany(data.madecompany);
        setPurpose(data.purpose);
        var optstr = "";
        Optlist.map((item, index) => {
            optstr += item;
            optstr += "   ";
        });
        setOptionText(optstr);
    }, [Optlist]);

    useEffect(() => {
        console.log(opts);
        if (opts != null) {
            for (var i = 0; i < 8; i++) {
                if (opts[i] === true) {
                    const w = FullOptionList[i];
                    setOptlist((prev) => [...prev, w]);
                    console.log(FullOptionList[i]);
                }
            }
        }
    }, [opts]);
    return (
        <div>
            <table>
                <tr>
                    <th>컨테이너 별명</th>
                    <td>{nickname}</td>
                    <th>컨테이너 보관위치</th>
                    <td>{standard}</td>
                </tr>
                <tr>
                    <th>컨테이너 용도</th>
                    <td>{purpose}</td>
                    <th>컨테이너 규격</th>
                    <td>{standard}</td>
                </tr>
                <tr>
                    <th>컨테이너 제작회사</th>
                    <td>{madecompany}</td>
                    <th>컨테이너 제작일</th>
                    <td>{madeday}</td>
                </tr>
                <tr>
                    <th>컨테이너 옵선</th>
                    <td colspan="3">{optionText}</td>
                </tr>
            </table>
            <style jsx>
                {`
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