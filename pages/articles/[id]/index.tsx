import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import db from "../../../ net/db"
import { doc, getDoc } from "firebase/firestore";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import firebaseApp from "../../../ net/firebaseApp";
import Image from 'next/image'
import RentInform from "../../../components/containerlist/containerinform/RentInform";
import Containerinform from "../../../components/containerlist/containerinform/Containerinform";
import ContainerSignInform from "../../../components/containerlist/containerinform/ContainerSignInform";
import SideBar from "../../../components/SideBar";
import ContainerMemo from "../../../components/containerlist/containerinform/ContainerMemo";
export default function index() {

    const router = useRouter();
    const [imgs, setImgs] = useState([]);
    const [url, setUrl] = useState();

    const [showcontaininform, setShowcontaininform] = useState(true);
    const [showrentinform, setShowrentinform] = useState(false);
    const [showsigninform, setShowshowsigninform] = useState(false);
    const [showcontaimermemo, setShowcontainermemo] = useState(false);


    const [RentID, setRentID] = useState();
    const [isRent, setIsRent] = useState(false);
    const [containerData, setContainerData] = useState([]);
    const [urlList, seturlList] = useState([]);
    const [ImageNum, setImageNum] = useState(0);
    const [Optlist, setOptlist] = useState([]);
    const [pivot, setPivot] = useState(1);

    // modal

    var ImageSettings = false;

    useEffect(() => {
        console.log(Optlist);
    }, [Optlist]);

    useEffect(() => {
        const func = async () => {
            setImageNum(imgs.length);
            if (imgs.length !== 0) {
                const storage = getStorage();
                for (var i = 0; i < imgs.length; i++) {
                    const reference = ref(storage, `images/${imgs[i]}`);
                    await getDownloadURL(reference).then((x) => {
                        seturlList((prev: any) => [...prev, x])
                    })
                }
            }
        }
        func();
    }, [imgs]);
    useEffect(() => {
        setUrl(RentID)
    }, [RentID]);

    useEffect(() => {
        console.log(imgs);
        console.log(url);
        ImageSettings = false;
    }, [url]);
    useEffect(() => {
        getDoc(doc(db, "articles", router.query.id)).then((doc: any) => {
            const data = doc.data();
            console.log(data);
            setContainerData(data);
            setImgs(data.uuidarray);
            setRentID(data.renting);
            if (data.renting !== "NULL") {
                setIsRent(true);
            }
        })
    }, []);

    function onClickLeftB() {
        if (pivot > 1) {
            setPivot(pivot - 1);
            ImageSettings = true;
            setUrl(urlList[pivot - 1]);
        }
        console.log(ImageNum + " + " + pivot);
    }
    function onClickRightB() {
        if (pivot < ImageNum) {
            setPivot(pivot + 1);

            setUrl(urlList[pivot - 1]);
        }
        console.log(ImageNum + " + " + pivot);
    }
    /*
    function onClickcloseRentB() {
        setModalOpen(false);
        console.log(modalOpen);
    }
    */
    function onClickContainerInformB() {
        setShowcontaininform(true);
        setShowrentinform(false);
        setShowshowsigninform(false);
        setShowcontainermemo(false);
    }
    function onClickRentinformB() {
        setShowcontaininform(false);
        setShowrentinform(true);
        setShowshowsigninform(false);
        setShowcontainermemo(false);
    }
    function onClickSigninformB() {
        setShowcontaininform(false);
        setShowrentinform(false);
        setShowshowsigninform(true);
        setShowcontainermemo(false);
    }
    function onClickShowMemoB() {
        setShowcontaininform(false);
        setShowrentinform(false);
        setShowshowsigninform(false);
        setShowcontainermemo(true);
    }


    return (
        <div className="flex gap-3">
            <SideBar />
            <div className="cc bg-gray-100">
                <div className="bg-gray-100 h-12 flex justify-between">
                    <p className="font-bold text-2xl">등록 컨테이너정보</p>
                </div>

                <div className="my-2 bg-gray-600 h-[1px]"></div>
                <div className="justify-center flex">
                    <div className="rounded-lg w-96 h-96 relative">
                        <Image unoptimized={true} alt="text" layout="fill" src={urlList[0]} />
                    </div>
                </div>
                <div>
                    <div className="flex">
                        <button onClick={onClickContainerInformB} className="border-2 border-gray w-36 h-12 bg-white focus:bg-slate-300 focus:font-bold">컨테이너 정보</button>
                        <button onClick={onClickRentinformB} className="border-2 border-gray w-36 h-12 bg-white focus:bg-slate-300 focus:font-bold">임대 정보</button>
                        <button onClick={onClickSigninformB} className="border-2 border-gray w-36 h-12 bg-white focus:bg-slate-300 focus:font-bold">결제 정보</button>
                        <button onClick={onClickShowMemoB} className="border-2 border-gray w-36 h-12 bg-white focus:bg-slate-300 focus:font-bold">기타 사항</button>

                    </div>
                    {showcontaininform && <Containerinform data={containerData} opts={containerData.opt} />}
                    {showrentinform && <RentInform rent={isRent} Id={router.query.id} rentid={RentID} />}
                    {showsigninform && <ContainerSignInform data={containerData} Id={router.query.id} rentid={RentID} rent={isRent} />}
                    {showcontaimermemo && <ContainerMemo />}
                </div>
            </div>
            <hr />
            <style jsx>
                {
                    `
                    .cc{
                        width : 800px;
                    }    
                `
                }
            </style>
        </div >
    )
}