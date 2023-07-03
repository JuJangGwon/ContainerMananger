import db from "../../ net/db";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { useState, useEffect } from "react";
import openDayModalSlice from "../../redux/reducer/openDaymodal";
import { ModalsetOn } from "../../redux/reducer/openDaymodal"
import { useDispatch, useSelector } from "react-redux";

interface MyComponentProps {
    className?: string;
    date: any;
}


export default function DayInform(props: MyComponentProps) {

    const dispatch = useDispatch();
    //   const memberlist = useSelector((state) => state.openDayModalSlice.openDayModalSlice);

    const [signOk_list, setSignOk_list] = useState<Array<string>>([]);
    const [signNo_list, setSignNo_list] = useState<Array<string>>([]);
    const [list, setList] = useState<Array<any>>([]);
    const usersCollectionRef = collection(db, "lent");

    useEffect(() => {
        const q = query(
            usersCollectionRef,
            where("rentDay", "array-contains", props.date)
        )
        onSnapshot(q, (snapshot) => {
            const getdatalist = snapshot.docs.map((doc: any) => ({
                id: doc.id,
                ...doc.data(),
            }));
            if (getdatalist.length > 0) {
                setList(getdatalist);
            }
        });
    }, []);


    useEffect(() => {
        if (list !== undefined) {
            for (var i = 0; i < list.length; i++) {
                for (var j = 0; j < list[i].rentDay.length; j++) {
                    if (props.date == list[i].rentDay[j]) {
                        if (list[i].SignDay[j] === true) {
                            const tempp = list[i].ContainerID;
                            console.log(tempp);
                            setSignOk_list((temp: any) => [...temp, tempp]);
                        }
                        else if (list[i].SignDay[j] === false) {
                            const tempp = list[i].ContainerID;
                            console.log(tempp);
                            setSignNo_list((temp: any) => [...temp, tempp]);
                        }
                        break;
                    }
                }
            }
        }
    }, [list]);

    const onClickDay = () => {
        dispatch(ModalsetOn());
    }

    return (
        <div>
            <button onClick={onClickDay}>
                <div className="flex gap-1">
                    {
                        signOk_list.length !== 0
                            ?
                            <div className="circle bg-green-400" />
                            :
                            <p></p>
                    }
                    {
                        signOk_list.length !== 0
                            ?
                            <p>{signOk_list.length}</p>
                            :
                            <p></p>
                    }
                </div>

                <div className="flex gap-1">
                    {
                        signNo_list.length !== 0
                            ?
                            <div className="circle bg-red-600" />
                            :
                            <p></p>
                    }
                    {
                        signNo_list.length !== 0
                            ?
                            <p>{signNo_list.length}</p>
                            :
                            <p></p>
                    }
                </div>
                <style jsx>
                    {`
                    .circle{
                        margin-top: +7px;
                        width:12px;
                        height:12px;
                        border-radius:75px;
                    }
                `}
                </style>
            </button>
        </div >
    );
}