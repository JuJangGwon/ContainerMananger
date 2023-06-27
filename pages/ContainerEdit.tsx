import { collection, addDoc } from "firebase/firestore";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { v4 as uuid } from 'uuid';
import firebaseApp from "../ net/firebaseApp";

import { getStorage, ref, uploadBytes, listAll, getDownloadURL, } from "firebase/storage";
import db from "../ net/db";
import SideBar from "../components/SideBar";

type ContainerEditType = {
    setOpenEdit: React.Dispatch<React.SetStateAction<boolean>>
}

export default function ContainerEdit({ setOpenEdit }: ContainerEditType) {

    const [nickname, setNickname] = useState();
    const [standard, setStandard] = useState();
    const [madeday, setMadeday] = useState();
    const [madecompany, setMadecompany] = useState();
    const [where, setWhere] = useState();
    const [purpose, setPurpose] = useState();
    const [opt, setOpt] = useState([false, false, false, false, false, false, false, false]);
    let copiedopt = opt;
    const [imageUpload, setImageUpload] = useState([]);
    const [imageList, setImageList] = useState([]);
    let uuidarray = [];

    const storage = getStorage(firebaseApp);
    const imageListRef = ref(storage, "images/");

    function clear() {
        setNickname("");
        setStandard("");
        setMadeday("");
        setMadecompany("");
        setWhere("");
        setPurpose("");
        setOpt([false, false, false, false, false, false, false, false]);
    }
    function upload() {
        return new Promise((resolve, reject) => {

            if (imageUpload === null) return;
            [].forEach.call(imageUpload, function (item) {
                const tempuuid = uuid() + ".png";
                uuidarray.push(tempuuid);
                console.log(uuidarray);
                const imageRef = ref(storage, `images/${tempuuid}`);
                console.log(imageRef);
                uploadBytes(imageRef, item).then((snapshot: any) => {
                    getDownloadURL(snapshot.ref).then((url: any) => {
                        setImageList((prev: any) => [...prev, url]);
                    });
                });
            });
            resolve(uuidarray);
        });
    };

    useEffect(() => {
        listAll(imageListRef).then((response: any) => {
            response.items.forEach((item: any) => {
                getDownloadURL(item).then((url: any) => {
                    setImageList((prev: any) => [...prev, url]);
                });
            });
        });
    }, []);
    const onclickOptBtn = (num: number) => {
        copiedopt[num] = !copiedopt[num];
    }

    const router = useRouter();

    const submit = async () => {
        await upload();
        console.log("*");
        setNickname(nickname);
        setMadeday(madeday);
        setMadecompany(madecompany);
        setPurpose(purpose);
        const renting = "NULL";
        await addDoc(collection(db, `articles`),
            {
                nickname,
                standard,
                madeday,
                madecompany,
                purpose,
                opt,
                uuidarray,
                renting,
            })
        alert("업로드 되었습니다");
        router.push('/');
    }
    const onExitClick = () => {
        setOpenEdit(true);
    }
    return (
        <div className="flex gap-2">
            <SideBar />
            <div className="container">
                <div className="bg-white h-12 flex justify-between">
                    <p className="font-bold text-2xl">컨테이너 추가하기</p>
                </div>
                <br />
                <form onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
                    event.preventDefault();
                    return false;
                }}>
                    <div className="defaultinform">
                        <input
                            multiple
                            type="file"
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                setImageUpload(event.target.files);
                            }}
                        />
                        <div className="propertys">
                            <label for="nickname"> 별명 :  </label>
                            <input value={nickname} id="nickname" onChange={(event: React.ChangeEvent<HTMLInputElement>) => setNickname(event.target.value)} />
                        </div>
                        <div className="propertys">
                            <label for="standard"> 규격 :  </label>
                            <input value={standard} id="standard" onChange={(event: React.ChangeEvent<HTMLInputElement>) => setStandard(event.target.value)} />
                        </div>
                        <div className="propertys">
                            <label for="madeday"> 제작일 : </label>
                            <input value={madeday} id="madeday" onChange={(event: React.ChangeEvent<HTMLInputElement>) => setMadeday(event.target.value)} />

                        </div>
                        <div className="propertys">
                            <label for="madecompany"> 제작회사 : </label>
                            <input value={madecompany} id="standard" onChange={(event: React.ChangeEvent<HTMLInputElement>) => setMadecompany(event.target.value)} />

                        </div>
                        <div className="propertys">
                            <label for="purpose"> 용도 : </label>
                            <input value={purpose} id="purpose" onChange={(event: React.ChangeEvent<HTMLInputElement>) => setPurpose(event.target.value)} />
                        </div>
                        <div className="propertys">
                            <label for="where"> 위치 : </label>
                            <input value={where} id="where" onChange={(event: React.ChangeEvent<HTMLInputElement>) => setWhere(event.target.value)} />

                        </div>
                        <div className="optionContainer">
                            <div className="row">
                                <label>
                                    <input onChange={() => onclickOptBtn(0)} type="checkbox" name="" />
                                    <div className="icon-box">
                                        <i className="fa fa-heart" aria-hidden="true"></i>
                                        <span>에어컨</span>
                                    </div>
                                </label>
                                <label>
                                    <input onChange={() => onclickOptBtn(1)} type="checkbox" name="" />
                                    <div className="icon-box">
                                        <i className="fa fa-music" aria-hidden="true"></i>
                                        <span>냉난방기</span>
                                    </div>
                                </label>
                                <label>
                                    <input onChange={() => onclickOptBtn(2)} type="checkbox" name="" />
                                    <div className="icon-box">
                                        <i className="fa fa-imdb" aria-hidden="true"></i>
                                        <span> 바닥 전기판넬 </span>
                                    </div>
                                </label>
                                <label>
                                    <input onChange={() => onclickOptBtn(3)} type="checkbox" name="" />
                                    <div className="icon-box">
                                        <i className="fa fa-book" aria-hidden="true"></i>
                                        <span>스틸돌출배관</span>
                                    </div>
                                </label>

                                <label>
                                    <input onChange={() => onclickOptBtn(4)} type="checkbox" name="" />
                                    <div className="icon-box">
                                        <i className="fa fa-dribbble" aria-hidden="true"></i>
                                        <span>불연재합판</span>
                                    </div>
                                </label>
                                <label>
                                    <input onChange={() => onclickOptBtn(5)} type="checkbox" name="" />
                                    <div className="icon-box">
                                        <i className="fa fa-desktop" aria-hidden="true"></i>
                                        <span>바닥 철판</span>
                                    </div>
                                </label>
                                <label>
                                    <input onChange={() => onclickOptBtn(6)} type="checkbox" name="" />
                                    <div className="icon-box">
                                        <i className="fa fa-gamepad" aria-hidden="true"></i>
                                        <span>철재환풍기</span>
                                    </div>
                                </label>
                                <label>
                                    <input onChange={() => onclickOptBtn(7)} type="checkbox" name="" />
                                    <div className="icon-box">
                                        <i className="fa fa-gamepad" aria-hidden="true"></i>
                                        <span>아크누전기</span>
                                    </div>
                                </label>
                            </div>

                        </div>
                    </div>
                    <br />
                    <button className="h-8 w-12 border-2 border-black" onClick={submit}>완료</button>
                </form>

                <div className="rentinform">

                </div>
                <style jsx> {`
            .propertys {
                display: flex;
            }
            .propertys a{
                padding-left : 10px;
            }
            button {
            }
            .container{
                /* 모달창 크기 */
                width: 1000px;
                height: 700px;
  /* 최상단 위치 */
  
  /* 중앙 배치 */
  /* top, bottom, left, right 는 브라우저 기준으로 작동한다. */
  /* translate는 본인의 크기 기준으로 작동한다. */

  /* 모달창 디자인 */
  background-color: white;
  border: 1px solid black;
  border-radius: 8px;
}
            .exitbutton {
                right: 10px;
                top: 10px;
            }

            * {
            padding: 0;
            margin: 0;
            box-sizing: border-box;
            font-family: "Poppins", sans-serif;
          }
          
          .optionContainer {
            background-color: #1b1c24;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          
          .row {
            margin: 10px;
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr;
          }
          .row label {
            padding: 20px;
            cursor: pointer;
            display: flex;
          }
          
          .row label input[type="checkbox"] {
            display: none;
          }
          
          .row label .icon-box {
            position: relative;
            display: flex;
            width: 120px;
            padding: 20px;
            flex-direction: column;
            align-items: center;
            background-color: #353746;
            color: #fff;
            border-radius: 3px;
            font-size: 21px;
            transition: 0.5s;
            user-select: none;
          }
          
          .row label input[type="checkbox"]:checked ~ .icon-box {
            background: linear-gradient(138deg, #da2c4d, #f8ab37);
            color: #fff;
          }
          
          .row label .icon-box span {
            margin: 5px;
            font-size: 12px;
          }
          
          .optionContainer .btn {
            width: 130px;
            height: 40px;
            position: absolute;
            left: 550px;
            font-size: 16px;
            border: 0;
            outline: none;
            transition: 0.5s cubic-bezier(0.755, 0.05, 0.855, 0.06);
          }
            `
                }
                </style>
            </div>
        </div>
    );
}