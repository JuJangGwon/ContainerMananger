import { useEffect, useState } from "react";
import { getStorage, ref, uploadBytes, listAll, getDownloadURL, } from "firebase/storage";
import db from "../../ net/db";

import Image from "next/image"
import Link from "next/link";

export default function ContainItem({ item, url, renting }) {

    const [imgurl, setImgurl] = useState();


    useEffect(() => {
        const func = async () => {
            if (url !== undefined) {
                const storage = getStorage();
                const reference = ref(storage, `images/${url}`);
                await getDownloadURL(reference).then((x) => {
                    setImgurl(x);
                    //    setReady(false);
                    //    UploadScreen(setUploading(false));
                })
            }
        }
        func();
    }, []);


    return (
        <div className="border-black order-solid border border-slate-300 bg-slate-50 w-42 h-50" >
            < Link href={`/articles/${item.id}`
            }>
                <div className="align-middle">
                    <div>
                        {renting === "NULL"
                            ? <p className="text-center text-green-500">임대가능</p>
                            : <p className="text-center text-red-600">임대중</p>
                        }
                    </div>
                    <div className="w-38 h-40 relative">
                        <Image unoptimized={true} alt="text" layout="fill" src={imgurl} />
                    </div>
                </div>
                <div className="border-black order-solid border border-slate-300">
                    <h1 className="bg-white"> 이름 : {item.nickname} </h1>
                    <h1 className="bg-white"> 규격 : {item.standard} </h1>
                </div>
            </Link >
        </div >
    );
}
