import Link from "next/link";
import { useRouter } from "next/router";

export default function SideBar() {
  const router = useRouter();
  return (
    <body className="bg-gray-300">
      <div
        className="sidebar lg:left-0 p-2 w-[300px] overflow-y-auto text-center bg-gray-900 h-screen"
      >
        <div className="text-gray-100 text-xl">
          <div className="p-2.5 mt-1 flex items-center">
            <h1 className="font-bold text-gray-200 text-[15px] ml-3">컨테이너 관리시스템</h1>
            <i
              className="bi bi-x cursor-pointer ml-28 lg:hidden"
              onclick="openSidebar()"
            ></i>
          </div>
        </div>
        <Link href={`/home`}>
          <div
            className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
          >
            <i className="bi bi-house-door-fill"></i>
            <span className="text-[15px] ml-4 text-gray-200 font-bold">Home</span>
          </div>
        </Link>
        <Link href={`/`}>
          <div
            className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
          >
            <i className="bi bi-house-door-fill"></i>
            <span className="text-[15px] ml-4 text-gray-200 font-bold">컨테이너 리스트</span>
          </div>
        </Link>

        <Link href={`/ContainerEdit`}>

          <div
            className="text-left text-sm mt-2 w-4/5 mx-auto text-gray-200 font-bold"
            id="submenu"
          >
            <h1 className="cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1">
              컨테이너 추가하기
            </h1>
          </div>
        </Link>

        <Link href={`/calanendar`}>
          <div
            className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
          >
            <i className="bi bi-bookmark-fill"></i>
            <span className="text-[15px] ml-4 text-gray-200 font-bold">캘린더 </span>
          </div>
        </Link>

        <div className="my-4 bg-gray-600 h-[1px]"></div>

        <Link href={`/loginpage`}>
          <div
            className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
          >
            <i className="bi bi-bookmark-fill"></i>
            <span className="text-[15px] ml-4 text-gray-200 font-bold">로그인 </span>
          </div>
        </Link>


      </div>
    </body>

  );
}