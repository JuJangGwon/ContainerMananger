import moment from "moment";
import DayInform from "../components/calanedarlist/DayInform";
import SideBar from "../components/SideBar";
import db from "../ net/db";
import { collection } from "firebase/firestore";
import { useState, useEffect } from "react";
import DayModal from "../components/calanedarlist/DayModal";
import { useDispatch, useSelector } from "react-redux";

interface DateData {
  full: string;
  date: string;
}

export default function Calendar() {
  const [selected, setSelected] = useState(moment());
  const openModal = useSelector((state) => state.openDaymodal.openDayModal);
  function moveNextMonth() {
    setSelected(selected.clone().add(1, "month"));
  }
  function movePrevMonth() {
    setSelected(selected.clone().subtract(1, "month"));
  }
  const usersCollectionRef = collection(db, "lent");



  return (
    <div className="con flex gap-3">
      <SideBar />
      <div className="bg-white">
        <div className="header">
          <div className="bg-gray-100 w-192 h-12 flex justify-between">
            <p className="font-bold text-2xl">대금 결제 일정 </p>
          </div>
          <div className="my-2 bg-gray-600 h-[1px]"></div>
          <div className="upbar">
            <button onClick={movePrevMonth}>이전달</button>
            <span>{selected.format("MM월")}</span>
            <button onClick={moveNextMonth}>다음달</button>
          </div>
          <MonthCalendar selected={selected} />
        </div>
        <style jsx>
          {`
          .upbar {
            display: flex;
            justify-content: center;
            gap : 20px;
          }
          .con {
            width : 700px;
            height : 300px;
          }
        ` }
        </style>
      </div >
    </div >
  );
};

export const MonthCalendar = ({ selected }: { selected: moment.Moment }) => {
  let date = selected.clone().startOf("month");
  const [openModal, setOpenModal] = useState<boolean>(false);

  let dates: DateData[] = [];

  // 1일 이전의 날짜들 처리
  for (let i = date.day(); i > 0; i--) {
    dates.unshift({ full: `${i} `, date: `none` });
  }

  // 날짜 데이터 넣기
  for (; date < selected.clone().endOf("month"); date.add(1, "day")) {
    const data: DateData = {
      full: date.format("YYYY-MM-DD"), // href 쿼리에 전달할 연도-월-날짜
      date: date.format("DD"), // 화면에 표시되는 날짜
    };
    dates = dates.concat(data);
  }

  // [주][날짜] 형태의 이중배열로 저장
  let calendar: DateData[][] = Array.from(Array(6), () => new Array(7));
  dates.forEach((date, index) => {
    calendar[Math.floor(index / 7)][index % 7] = date;
  });


  return (
    <div>
      <table border={1}>
        <thead>
          <tr>
            <th>Sun</th>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wed</th>
            <th>Thu</th>
            <th>Fri</th>
            <th>Sat</th>
          </tr>
        </thead>
        <tbody>
          {calendar.map((week, index) => (
            <tr key={index}>
              {week.map((day) => (
                <td key={day.full} className="item border-2 border-gray">
                  {day.date !== "none" ? (
                    <button id={day.full} value={day.full}>
                      <div id={day.full} value={day.full} className="flex gap-10">
                        <span id={day.full} value={day.full}>{day.date}</span>
                        <DayInform date={day.full} />
                      </div>
                    </button>
                  ) : (
                    <></>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <style jsx>{`
    .item {
    color: $gray - color;
    border - radius: 35 %;
    background - color: $theme - color;
    width: 150px;
    min - width: 20px;
    min - height: 20px;
    height: 100px;
    cursor: pointer;
    font: {
      size: 4vmin;
      weight: 500;
    }
    `}</style>
    </div>
  );
};