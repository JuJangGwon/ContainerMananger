// import { useRouter } from "next/router";
// import { useState, useEffect } from "react";
// import db from "../../ net/db";
// import { doc, getDoc, query } from "firebase/firestore";


// export default function ContainInform({ setOpenModal, setOpenEdit }) {

//     const router = useRouter();
//     const [standard, setStandard] = useState('');

//     const [content, setContent] = useState('');

//     const onbtnclick = () => {
//         setOpenModal(false);
//     }
//     const onEditBtnclick = () => {
//         setOpenEdit(false);
//     }
//     useEffect(() => {
//         getDoc(doc(db, "articles", router.query.id)).then(doc => {
//             const data = doc.data();
//             setStandard(data.standard);

//         })
//     })

//     return (
//         <div className="container">
//             <button className="exitbutton" onClick={onbtnclick}>
//                 X
//             </button>
//             <button className="editbutton" onClick={onEditBtnclick}>
//                 Edit
//             </button>
//             <div className="defaultinform">
//                 <div className="propertys">
//                     <label for="standard"> 규격 :  </label>
//                     <a id="standard">name </a>
//                 </div>
//                 <div className="propertys">
//                     <label for="standard"> 제작일 : </label>
//                     <a id="standard">name </a>
//                 </div>
//                 <div className="propertys">
//                     <label for="standard"> 제작회사 : </label>
//                     <a id="standard">name </a>
//                 </div>
//                 <div className="propertys">
//                     <label for="standard"> 용도 : </label>
//                     <a id="standard">name </a>
//                 </div>
//                 <div className="propertys">
//                     <label for="standard"> 옵션 : </label>
//                     <button> 에어컨 </button>
//                     <button> 냉난방기 </button>
//                     <button> 바닥 전기판넬 </button>
//                     <button> 스틸돌출배관 </button>
//                     <button> 불연재합판 </button>
//                     <button> 바닥 철판  </button>
//                     <button> 철재환풍기 </button>
//                     <button> 아크누전기 </button>
//                 </div>
//             </div>

//             <div className="rentinform">
//                 <div className="propertys">
//                     <label for="standard"> 임대업체  </label>
//                     <a id="standard">name </a>
//                 </div>
//                 <div className="propertys">
//                     <label for="standard"> 임대기간 </label>
//                     <a id="standard">name </a>
//                 </div>
//                 <div className="propertys">
//                     <label for="standard"> 임대료 </label>
//                     <a id="standard">name </a>
//                 </div>
//                 <div className="propertys">
//                     <label for="standard"> 임대위치 </label>
//                     <a id="standard">name </a>
//                 </div>
//                 <div className="propertys">
//                     <label for="standard"> 운반비 </label>
//                     <a id="standard">name </a>
//                 </div>
//                 <div className="propertys">
//                     <label for="standard"> 임대업체 주소 </label>
//                     <a id="standard">name </a>
//                 </div>
//                 <div className="propertys">
//                     <label for="standard"> 임대업체 연락처 </label>
//                     <a id="standard">name </a>
//                 </div>
//                 <div className="propertys">
//                     <label for="standard"> 임대관리자 </label>
//                     <a id="standard">name </a>
//                 </div>
//                 <div className="propertys">
//                     <label for="standard"> 임대관리자 연락처 </label>
//                     <a id="standard">name </a>
//                 </div>
//                 <div className="propertys">
//                     <label for="standard"> 사업자등록증 </label>
//                     <a id="standard">name </a>
//                 </div>
//             </div>
//             <style jsx> {`
//             .propertys {
//                 display: flex;
//             }
//             .propertys a{
//                 padding-left : 10px;
//             }
//             button {
//             }
//             .container{
//                 /* 모달창 크기 */
//                 width: 1000px;
//                 height: 600px;
//   /* 최상단 위치 */
//   z-index: 999;

//   /* 중앙 배치 */
//   /* top, bottom, left, right 는 브라우저 기준으로 작동한다. */
//   /* translate는 본인의 크기 기준으로 작동한다. */
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);

//   /* 모달창 디자인 */
//   background-color: white;
//   border: 1px solid black;
//   border-radius: 8px;
// }
//             .exitbutton {
//                 position: absolute;
//                 right: 10px;
//                 top: 10px;
//             }
//             `
//             }
//             </style>
//         </div>
//     )
// }