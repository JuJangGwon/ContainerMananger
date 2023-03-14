import { useEffect } from "react"
import Loginpad from "../components/Login/Loginpad"
import SignUP from "../components/Login/SignUp"
import SideBar from "../components/SideBar"

export default function loginpage() {
    useEffect(() => 
    {
        },[]);
    return (
        <div className="flex">
            <SideBar />
            <Loginpad className ="inline-block"/>
        </div>
    )
}